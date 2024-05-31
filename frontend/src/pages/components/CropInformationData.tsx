import { cropInfo } from "../SpecificData"

export default function({cropInformation}: {
    cropInformation:cropInfo;
}){
    return (
        <>
                      
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.waterSource: null}</td>
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.cropIntensity: null}</td>
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.cropGrowthStage: null}</td>
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.croppingPattern: null}</td>
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.livestock: null}</td>
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.primaryCrop: null}</td>
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.primarySeason: null}</td>
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.secondaryCrop: null}</td>
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.secondarySeason: null}</td>
                      <td className="border-2 pr-2 border-t-0">{cropInformation? cropInformation.remarks: null}</td>
        </>
    )
}