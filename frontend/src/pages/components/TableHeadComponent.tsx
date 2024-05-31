// import React from 'react'
import {
    landData, cropGrowthStageData,
    cropIntensityData,
    croppingPatternData,
    cropsData,
    livestockData,
    seasonData,
    waterSourceData,
} from '../dashboard/dataList';
// import { setLandCover } from '../../features/data';

import {
    setAccuracy,
    setBiomassWeight,
    setCropGrowthStage,
    setCropIntensity,
    setCroppingPattern,
    setCultivar,
    setDescription,
    setEmail,
    setHarvestDate,
    setLandCover,
    setLatitude,
    setLivestock,
    setLongitude,
    setPrimaryCrop,
    setPrimarySeason,
    setRemarks,
    setSampleSize1,
    setSampleSize2,
    setSecondaryCrop,
    setSecondarySeason,
    setSowDate,
    setWaterSource,
} from "../../features/data";
import CheckBox, { typeOfCheckBox } from "./CheckBox";
import TableHead from '../dashboard/TableHead';
import { useSelector } from 'react-redux';
import { selectColumns } from '../../features/ui';
function TableHeadComponent({ deletion }: {
    deletion: boolean
}) {
    const columns = useSelector(selectColumns);
    const tableHeaders = [
        { name: "Latitude", onChangeValueSetter: setLatitude },
        { name: "Longitude", onChangeValueSetter: setLongitude },
        { name: "Accuracy", onChangeValueSetter: setAccuracy },
        { name: "Land Cover Type", onChangeValueSetter: setLandCover, optionsList: landData },
        { name: "Description", onChangeValueSetter: setDescription },
        { name: "By", onChangeValueSetter: setEmail },
        { name: "Water Source", onChangeValueSetter: setWaterSource, optionsList: waterSourceData },
        { name: "Crop Intensity", onChangeValueSetter: setCropIntensity, optionsList: cropIntensityData },
        { name: "Crop Growth Stage", onChangeValueSetter: setCropGrowthStage, optionsList: cropGrowthStageData },
        { name: "Cropping Pattern", onChangeValueSetter: setCroppingPattern, optionsList: croppingPatternData },
        { name: "Livestock", onChangeValueSetter: setLivestock, optionsList: livestockData },
        { name: "Primary Crop", onChangeValueSetter: setPrimaryCrop, optionsList: cropsData },
        { name: "Primary Season", onChangeValueSetter: setPrimarySeason, optionsList: seasonData },
        { name: "Secondary Crop", onChangeValueSetter: setSecondaryCrop, optionsList: cropsData },
        { name: "Secondary Season", onChangeValueSetter: setSecondarySeason, optionsList: seasonData },
        { name: "Remarks", onChangeValueSetter: setRemarks },
        { name: "Sample Size 1", onChangeValueSetter: setSampleSize1 },
        { name: "Sample Size 2", onChangeValueSetter: setSampleSize2 },
        { name: "Biomass Weight", onChangeValueSetter: setBiomassWeight },
        { name: "Cultivar", onChangeValueSetter: setCultivar },
        { name: "Sow Date", onChangeValueSetter: setSowDate },
        { name: "Harvest Date", onChangeValueSetter: setHarvestDate },
    ];

    return (
        <tr>
            {deletion ? <CheckBox type={typeOfCheckBox.heading} id={-1} /> : null}
            {tableHeaders.map((header, index) => {
                for (let a of columns) {
                    if (a == header.name) return <TableHead
                        key={index}
                        name={header.name}
                        onChangeValueSetter={header.onChangeValueSetter}
                        optionsList={header.optionsList}
                    />
                }
                return null;
            })}
        </tr>
    )
}

export default TableHeadComponent