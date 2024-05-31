import { CCEType } from "../SpecificData"

export default function({CCEData}: {
    CCEData: CCEType
}){
    return (
        <>
                      
        <td className="border-2 pr-2 border-t-0">{CCEData? CCEData.sampleSize_1: null}</td>
        <td className="border-2 pr-2 border-t-0">{CCEData? CCEData.sampleSize_2: null}</td>
        <td className="border-2 pr-2 border-t-0">{CCEData? CCEData.biomassWeight: null}</td>
        <td className="border-2 pr-2 border-t-0">{CCEData? CCEData.cultivar: null}</td>
        <td className="border-2 pr-2 border-t-0">{CCEData? CCEData.sowDate: null}</td>
        <td className="border-2 pr-2 border-t-0">{CCEData? CCEData.harvestDate: null}</td>
        {/* <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.cropGrowthStage: null}</td>
        <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.croppingPattern: null}</td>
        <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.livestock: null}</td>
        <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.primaryCrop: null}</td>
        <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.primarySeason: null}</td>
        <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.secondaryCrop: null}</td>
        <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.secondarySeason: null}</td>
        <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.remarks: null}</td> */}
</>
    )
}