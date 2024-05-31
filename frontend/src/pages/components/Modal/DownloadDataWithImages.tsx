import { ReactNode, useCallback, useState } from 'react'
import Modal from './Modal'
import Button from '../Button';
import { BACKEND_URL } from '../../../App';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectFilterData } from '../../../features/data';
import fileDownload from 'js-file-download';

enum fileType {
  csv,
  xlsx,
  shp,
}


function DownloadDataWithImages({
  closeHandler
}: {
  closeHandler: () => void
}) {
  const [buttonString, setButtonString] = useState<ReactNode>("Generate");
  const [isDisabled, setIsDisabled] = useState(false);
  const [archiveFormat, setArchiveFormat] = useState<fileType>(fileType.csv);
  const filterData = useSelector(selectFilterData);
  const generateArchiveRequest = useCallback(async () => {
    async function generator() {
      let finalURL = "";
      if (archiveFormat == fileType.csv) {
        finalURL = `${BACKEND_URL}api/v1/archive-data`;
      } else if (archiveFormat == fileType.xlsx) {
        finalURL = `${BACKEND_URL}api/v1/archive-data/xlsx`;
      }
      const response = await axios.post(
        finalURL,
        {
          pageNo: filterData.pageNo,
          entries: filterData.entries,
          latitude: filterData.latitude,
          longitude: filterData.longitude,
          accuracy: filterData.accuracy,
          landCover: filterData.landCover,
          description: filterData.description,
          email: filterData.email,
          sampleSize_1: filterData.sampleSize_1,
          sampleSize_2: filterData.sampleSize_2,
          biomassWeight: filterData.biomassWeight,
          cultivar: filterData.cultivar,
          sowDate: filterData.sowDate,
          harvestDate: filterData.harvestDate,
          waterSource: filterData.waterSource,
          cropIntensity: filterData.cropIntensity,
          primarySeason: filterData.primarySeason,
          primaryCrop: filterData.primaryCrop,
          secondarySeason: filterData.secondarySeason,
          secondaryCrop: filterData.secondaryCrop,
          livestock: filterData.livestock,
          croppingPattern: filterData.croppingPattern,
          cropGrowthStage: filterData.cropGrowthStage,
          remarks: filterData.remarks,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          responseType: "blob",
        }
      );
      console.log(response);
      await fileDownload(response.data, crypto.randomUUID() + ".zip");
      setButtonString("Generate")
      setIsDisabled(false)
      // if (fileformat == filfeType.csv)
      // else if (fileformat == fileType.xlsx)
      //   fileDownload(response.data, crypto.randomUUID() + ".xlsx");
    }
    generator();
  }, [filterData, archiveFormat]);

  const radioClassName = "accent-red-500 w-5 h-5";
  const spanClassName = "py-1 w-fit gap-2 flex items-center text-xl"
  return (
    <Modal closeHandler={closeHandler}>
      <div className='bg-white bg-opacity-75 p-4 rounded-lg'>
        <div className='text-xl font-semibold'>
          Select the type of data
        </div>
        <form action="" className='flex flex-col'>
          <span className={spanClassName}>
            <input type="radio" name="some" id="csvGDF" className={radioClassName} onClick={() => {
              setArchiveFormat(fileType.csv)
            }} />
            <label htmlFor="csvGDF">CSV</label>
          </span>
          <span className={spanClassName}>
            <input type="radio" name="some" id="xlsxGDF" className={radioClassName} onClick={() => {
              setArchiveFormat(fileType.xlsx)
            }} />
            <label htmlFor="xlsxGDF">XLSX</label>
          </span>
          <span>

            <Button disabled={isDisabled} onClick={async (event) => {
              setButtonString("Generating..")
              setIsDisabled(true);
              event.preventDefault()
              // functionalities
              await generateArchiveRequest();
            }} className='mt-2'>{buttonString}</Button>
            <Button onClick={(event) => {
              event.preventDefault()
              closeHandler()
            }}>
              Close
            </Button>
          </span>
        </form>
      </div>
    </Modal>
  )
}

export default DownloadDataWithImages