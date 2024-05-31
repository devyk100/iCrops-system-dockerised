import {  createSlice } from "@reduxjs/toolkit";
// import { BACKEND_URL } from "../App";
// import axios from "axios";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
      overallData: null,
      filterData: {
        latitude: null,
        longitude: null,
        accuracy: null,
        landCover: null,
        description: null,
        email: null,
        sampleSize_1: null,
        sampleSize_2: null,
        biomassWeight: null,
        cultivar: null,
        sowDate: null,
        harvestDate: null,
        waterSource: null,
        cropIntensity: null,
        primarySeason: null,
        primaryCrop: null,
        secondarySeason: null,
        secondaryCrop: null,
        livestock: null,
        croppingPattern: null,
        cropGrowthStage: null,
        remarks: null,
        pageNo: 1,
        entries: 10,
        count: 0
      },
    },
    reducers: {
      setLatitude: (state, action) => {
        state.filterData.latitude = action.payload;
      },
      setLongitude: (state, action) => {
        state.filterData.longitude = action.payload;
      },
      setAccuracy: (state, action) => {
        state.filterData.accuracy = action.payload;
      },
      setLandCover: (state, action) => {
        console.log("payload")
        state.filterData.landCover = action.payload;
      },
      setDescription: (state, action) => {
        state.filterData.description = action.payload;
      },
      setEmail: (state, action) => {
        state.filterData.email = action.payload;
      },
      setSampleSize1: (state, action) => {
        state.filterData.sampleSize_1 = action.payload;
      },
      setSampleSize2: (state, action) => {
        state.filterData.sampleSize_2 = action.payload;
      },
      setBiomassWeight: (state, action) => {
        state.filterData.biomassWeight = action.payload;
      },
      setCultivar: (state, action) => {
        state.filterData.cultivar = action.payload;
      },
      setSowDate: (state, action) => {
        state.filterData.sowDate = action.payload;
      },
      setHarvestDate: (state, action) => {
        state.filterData.harvestDate = action.payload;
      },
      setWaterSource: (state, action) => {
        state.filterData.waterSource = action.payload;
      },
      setCropIntensity: (state, action) => {
        state.filterData.cropIntensity = action.payload;
      },
      setPrimarySeason: (state, action) => {
        state.filterData.primarySeason = action.payload;
      },
      setPrimaryCrop: (state, action) => {
        state.filterData.primaryCrop = action.payload;
      },
      setSecondarySeason: (state, action) => {
        state.filterData.secondarySeason = action.payload;
      },
      setSecondaryCrop: (state, action) => {
        state.filterData.secondaryCrop = action.payload;
      },
      setLivestock: (state, action) => {
        state.filterData.livestock = action.payload;
      },
      setCroppingPattern: (state, action) => {
        state.filterData.croppingPattern = action.payload;
      },
      setCropGrowthStage: (state, action) => {
        state.filterData.cropGrowthStage = action.payload;
      },
      setRemarks: (state, action) => {
        state.filterData.remarks = action.payload;
      }
      ,
      movePageForward: (state) => {
        console.log(state.filterData.count, "is the count")
        if(state.filterData.pageNo * state.filterData.entries < state.filterData.count) {
            state.filterData.pageNo += 1;
        }
        else{
            alert("Reached the end")
        }
      },
      movePageBack: (state) => {
        if(state.filterData.pageNo > 1){
            state.filterData.pageNo -= 1
        }
      },
      setCount: (state, action) => {
        state.filterData.count = action.payload
      },
      setEntries: (state, action) => {
        state.filterData.entries = action.payload
      }
    },
  });
  
  
  // Export action creators
  export const {
    setLatitude,
    setLongitude,
    setAccuracy,
    setLandCover,
    setDescription,
    setEmail,
    setSampleSize1,
    setSampleSize2,
    setBiomassWeight,
    setCultivar,
    setSowDate,
    setHarvestDate,
    setWaterSource,
    setCropIntensity,
    setPrimarySeason,
    setPrimaryCrop,
    setSecondarySeason,
    setSecondaryCrop,
    setLivestock,
    setCroppingPattern,
    setCropGrowthStage,
    setRemarks,
    setCount,
    movePageBack,
    movePageForward,
    setEntries
  } = dataSlice.actions;
  
export default dataSlice.reducer;
export const selectData = (state: any) => state.data.overallData;
export const selectFilterData = (state: any) => state.data.filterData;
export const selectPageNo = (state:any) => state.data.filterData.pageNo
export const selectEntries = (state:any) => state.data.filterData.entries