import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import { BACKEND_URL } from "../../App";
import Navbar from "../components/Navbar";
import { CCEType, cropInfo } from "../SpecificData";
// import CropInformationData from "../components/CropInformationData";
import { useDispatch, useSelector } from "react-redux";
import {
  selectData,
  selectFilterData,
  setCount,
} from "../../features/data";

import { selectDeletion, selectDeletionList } from "../../features/ui";
// import CheckBox, { typeOfCheckBox } from "../components/CheckBox";
import Footer from "../components/Footer";
// import CCEInformationData from "../components/CCEInformationData";
import TableHeadComponent from "../components/TableHeadComponent";
import TableRowComponent from "../components/TableRowComponent";

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

export default function () {
  const [data, setData] = useState<null | Data[]>(null);
  const overallData = useSelector(selectData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deletion = useSelector(selectDeletion);
  const filterData = useSelector(selectFilterData);
  const deletionList = useSelector(selectDeletionList);
  useEffect(() => {
    if(deletion == true) return ;
    if (
      localStorage.getItem("email") == "" ||
      localStorage.getItem("email") == undefined ||
      localStorage.getItem("token") == "" ||
      localStorage.getItem("token") == undefined
    ) {
      navigate("/login");
    }
    async function fetcher() {
      // if(deletionList.length != 0) return
      if (filterData.entries == null || filterData.entries == undefined || filterData.entries.toString() == "") {
        return;
      }
      const response = await axios.post(
        `${BACKEND_URL}api/v1/data/`,
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
        }
      );
      if(response.data.logOut){
        localStorage.setItem("email", "");
        localStorage.setItem("token", "")
        navigate("/login");
      }
      console.log(response.data.count);
      setData(response.data.response);
      console.log(response.data.response)
      dispatch(setCount(response.data.count))
    }
    console.log(deletionList)
    fetcher();
  }, [filterData, deletionList]);
  useEffect(() => {
    console.log("hello");
  }, [overallData]);

  if (data == null) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="text-xl p-4 overflow-y-scroll overflow-x-scroll">
        <TableHeadComponent deletion={deletion}></TableHeadComponent>
        <TableRowComponent data={data} deletion={deletion} />
      </div>
      <Footer></Footer>
    </>
  );
}
