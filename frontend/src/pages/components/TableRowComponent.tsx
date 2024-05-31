import { useCallback, useEffect, useState } from 'react'
import { CCEType, cropInfo } from '../SpecificData';
import CheckBox, { typeOfCheckBox } from './CheckBox';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectColumns } from '../../features/ui';
type Data = {
  id: number;
  latitude: number;
  longitude: number;
  accuracy: number;
  landCover: string;
  description: string;
  cropInformation: cropInfo[];
  CCEdata: CCEType[];
  user: {
    email: string;
  };
  count: Number;
};

function TableRowComponent({ data, deletion }: {
  data: null | Data[];
  deletion: boolean
}) {
  const navigate = useNavigate();
  const columns = useSelector(selectColumns);
  const [columnsVisibility, setColumnsVisibility] = useState([
    {
      name: "Latitude",
      value: false
    },
    {
      name: "Longitude",
      value: false
    },
    {
      name: "Accuracy",
      value: false
    },
    {
      name: "Land Cover Type",
      value: false
    },
    {
      name: 'Description',
      value: false
    },
    {
      name: "By",
      value: false
    },
    {
      name: "Water Source",
      value: false
    },
    {
      name: "Crop Intensity",
      value: false
    },
    {
      name: "Crop Growth Stage",
      value: false
    },
    {
      name: "Cropping Pattern",
      value: false
    },
    {
      name: "Livestock",
      value: false
    },
    {
      name: "Primary Crop",
      value: false
    }, {
      name: "Primary Season",
      value: false
    },
    {
      name: "Secondary Crop",
      value: false
    },
    {
      name: "Secondary Season",
      value: false
    },
    {
      name: "Remarks",
      value: false
    },
    {
      name: "Sample Size 1",
      value: false
    },
    {
      name: "Sample Size 2",
      value: false
    },
    {
      name: "Biomass Weight",
      value: false
    },
    {
      name: "Cultivar",
      value: false
    },
    {
      name: "Sow Date",
      value: false
    },
    {
      name: "Harvest Date",
      value: false
    }
  ])
  const updater = useCallback(() => {
    let tempColumnsVisibility = columnsVisibility;
    tempColumnsVisibility = (tempColumnsVisibility.map((v) => {
      return {
        name: v.name,
        value: false
      }
    }))
    for (let a of columns) {
      tempColumnsVisibility = tempColumnsVisibility.map((v) => {
        if (a == v.name || v.value == true) {
          return {
            name: v.name,
            value: true
          }
        }
        else return {
          name: v.name,
          value: false
        }
      })
    }
    setColumnsVisibility(tempColumnsVisibility)
  }, [columns])
  useEffect(() => {
    updater()
    console.log(columnsVisibility)
  }, [columns])
  if (data != null)
    return (
      <>
        {data.map((value: any) => {
          const newValue = value as Data;
          const CCEData = newValue.CCEdata[0];
          console.log("CCEData", CCEData);
          const CropInfo = newValue.cropInformation[0];
          console.log("Crop Information", CropInfo);
          return (
            <tr>
              {deletion ? <CheckBox type={typeOfCheckBox.row} id={newValue.id} /> : null}
              {columnsVisibility[0].value ? <td className="border-2 pr-2 border-t-0">{newValue.latitude}</td> : null}
              {columnsVisibility[1].value ? <td className="border-2 pr-2 border-t-0">{newValue.longitude}</td> : null}
              {columnsVisibility[2].value ? <td className="border-2 pr-2 border-t-0">{newValue.accuracy}</td> : null}
              {columnsVisibility[3].value ? <td className="border-2 pr-2 border-t-0">{newValue.landCover}</td> : null}
              {columnsVisibility[4].value ? <td className="border-2 pr-2 border-t-0">
                {newValue.description}
              </td> : null}
              {columnsVisibility[5].value ? <td className="border-2 pr-2 border-t-0">
                {newValue.user.email}
              </td> : null}
              {columnsVisibility[6].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.waterSource : null}</td> : null}
              {columnsVisibility[7].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.cropIntensity : null}</td> : null}
              {columnsVisibility[8].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.cropGrowthStage : null}</td> : null}
              {columnsVisibility[9].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.croppingPattern : null}</td> : null}
              {columnsVisibility[10].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.livestock : null}</td> : null}
              {columnsVisibility[11].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.primaryCrop : null}</td> : null}
              {columnsVisibility[12].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.primarySeason : null}</td> : null}
              {columnsVisibility[13].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.secondaryCrop : null}</td> : null}
              {columnsVisibility[14].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.secondarySeason : null}</td> : null}
              {columnsVisibility[15].value ? <td className="border-2 pr-2 border-t-0">{CropInfo ? CropInfo.remarks : null}</td> : null}
              {columnsVisibility[16].value ? <td className="border-2 pr-2 border-t-0">{CCEData ? CCEData.sampleSize_1 : null}</td> : null}
              {columnsVisibility[17].value ? <td className="border-2 pr-2 border-t-0">{CCEData ? CCEData.sampleSize_2 : null}</td> : null}
              {columnsVisibility[18].value ? <td className="border-2 pr-2 border-t-0">{CCEData ? CCEData.biomassWeight : null}</td> : null}
              {columnsVisibility[19].value ? <td className="border-2 pr-2 border-t-0">{CCEData ? CCEData.cultivar : null}</td> : null}
              {columnsVisibility[20].value ? <td className="border-2 pr-2 border-t-0">{CCEData ? CCEData.sowDate : null}</td> : null}
              {columnsVisibility[21].value ? <td className="border-2 pr-2 border-t-0">{CCEData ? CCEData.harvestDate : null}</td> : null}
              {<td>
                <button
                  className="p-3 bg-gray-200 rounded-lg m-2 border-2 border-gray-500 hover:bg-gray-300"
                  onClick={() => {
                    navigate("/data/" + value.id);
                  }}
                >
                  See more
                </button>
              </td>}
            </tr>
          );
        })}
      </>
    )
}

export default TableRowComponent