import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageFromFilename from "./ImageFromFilename";
import Spinner from "./Spinner";
import { BACKEND_URL } from "../App";
import Navbar from "./components/Navbar";

interface imgType{
    id: number;
    fileName: string;
    dataId: number;
}

export interface cropInfo {
  waterSource: string;
  cropGrowthStage: string;
  cropIntensity: string;
  livestock: string;
  croppingPattern: string;
  primaryCrop: string;
  primarySeason: string;
  remarks: string;
  secondaryCrop: string;
  secondarySeason: string;
}

export interface CCEType {
  biomassWeight: string;
  cultivar: string;
  grainWeight: string;
  dataId: number;
  harvestDate: string;
  id: number;
  sampleSize_1: number;
  sampleSize_2: number;
  sowDate: string;
}

export default function () {
  const { dataid } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<{
    latitude: number;
    longitude: number;
    accuracy: number;
    landCover: string;
    cropInformation: cropInfo[];
    CCEdata: CCEType[];
    images: imgType[];
    user: {
        email: string;
    }
  } | null>(null);
  useEffect(() => {
    if(localStorage.getItem("email") == "" || localStorage.getItem("email") == undefined || localStorage.getItem("token") == '' ||localStorage.getItem('token') == undefined){
      navigate("/login")
  }
    async function fetchAnEntry(dataId: number) {
      console.log();
      const response = await axios.post(
        BACKEND_URL+"api/v1/data/" + dataId+"/",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      return response.data;
    }
    console.log(dataid);

    if (dataid)
      fetchAnEntry(parseInt(dataid)).then((val) => {
        setData(val);
        console.log(val);
      });
  }, []);
  if(data == null) return (
    <Spinner />
  )
  return (
    <div>
      <Navbar></Navbar>
      {data ? (
        <div className="m-2">
          <button
          className="border-gray-500 p-3 rounded-lg bg-gray-200 hover:bg-gray-300 border-2 mb-2"
            onClick={() => {
              navigate("/data");
            }}
          >
            Go Back
          </button>
          <div >
            <span className="font-bold">By: </span> {
                data.user.email
            }

          </div>
          <div>
            <span className="font-bold">Latitude</span>: {data.latitude}</div>
          <div>
            <span className="font-bold">Longitude</span>: {data.longitude}</div>
          <div>
            <span className="font-bold">Accuracy</span>: {data.accuracy}</div>
          <div>
            <span className="font-bold">Land Cover</span>: {data.landCover}</div>
          {data.cropInformation?.length > 0 ? (
            <div>
              <h3 className="font-bold mt-4 mb-2">Crop Information</h3>
              <div><span className="font-bold">Water Source</span>: {data.cropInformation[0].waterSource}</div>
              <div><span className="font-bold">Crop growth stage</span>
                : {data.cropInformation[0].cropGrowthStage}
              </div>
              <div><span className="font-bold">Crop intensity</span>: {data.cropInformation[0].cropIntensity}</div>
              <div><span className="font-bold">Livestock</span>: {data.cropInformation[0].livestock}</div>
              <div><span className="font-bold">Cropping Pattern</span>
                : {data.cropInformation[0].croppingPattern}
              </div>
              <div className="font-bold mt-3">Season 1</div>
              <div><span className="font-bold">Crop</span>: {data.cropInformation[0].primaryCrop}</div>
              <div><span className="font-bold">Season</span>: {data.cropInformation[0].primarySeason}</div>
              <div className="font-bold mt-3">Season 2</div>
              <div><span className="font-bold">Crop</span>: {data.cropInformation[0].secondaryCrop}</div>
              <div><span className="font-bold">Season</span>: {data.cropInformation[0].secondarySeason}</div>
              <div><span className="font-bold mt-2">Remarks</span>: {data.cropInformation[0].remarks}</div>
            </div>
          ) : null}
          {data.CCEdata?.length > 0 ? (
            <div>
              <h3 className="mt-3 font-bold">CCE Data</h3>
              <div><span className="font-bold">Biomass Weight</span>: {data.CCEdata[0].biomassWeight} kg</div>
              <div><span className="font-bold">Sample Size</span>
                : {data.CCEdata[0].sampleSize_1} m X{" "}
                {data.CCEdata[0].sampleSize_2} m
              </div>
              <div><span className="font-bold">Grain Weight</span>: {data.CCEdata[0].grainWeight} kg</div>
              <div><span className="font-bold">Harvest Date</span>: {data.CCEdata[0].harvestDate.toString()}</div>
              <div><span className="font-bold">Sow Date</span>: {data.CCEdata[0].sowDate.toString()}</div>
            </div>
          ) : null}
            <h3 className="font-bold mt-4">Images</h3>
            <div className="flex flex-col md:flex-row w-lvw p-2 pt-0">
          {data.images?.length > 0 && (
            data.images.map(image => (
              <ImageFromFilename key={image.id} filename={image.fileName} />
            )) || "nothing"
          )}
        </div>
      
        </div>
      ) : null}
    </div>
  );
}
