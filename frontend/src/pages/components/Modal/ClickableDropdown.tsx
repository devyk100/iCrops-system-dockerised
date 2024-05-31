import  {  MouseEventHandler, useState } from 'react'
import Modal from './Modal'
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { addColumns, removeColumns, selectColumns } from '../../../features/ui';

const columnsList = [
    {
        name: "Latitude",
        value: "latitude"
    },
    {
        name: "Longitude",
        value: "longitude"
    },
    {
        name: "Accuracy",
        value: "accuracy"
    },
    {
        name: "Land Cover Type",
        value: "landCoverType"
    },
    {
        name: 'Description',
        value: "description"
    },
    {
        name: "By",
        value: "by"
    },
    {
        name: "Water Source",
        value: "waterSource"
    },
    {
        name: "Crop Intensity",
        value: "cropIntensity"
    },
    {
        name: "Crop Growth Stage",
        value: "cropGrowthStage"
    },
    {
        name: "Cropping Pattern",
        value: "croppingPattern"
    },
    {
        name: "Livestock",
        value: "livestock"
    },
    {
        name: "Primary Crop",
        value: "primaryCrop"
    }, {
        name: "Primary Season",
        value: "primarySeason"
    },
    {
        name: "Secondary Crop",
        value: "secondaryCrop"
    },
    {
        name: "Secondary Season",
        value: "secondarySeason"
    },
    {
        name: "Remarks",
        value: "remarks"
    },
    {
        name: "Sample Size 1",
        value: "sampleSize1"
    },
    {
        name: "Sample Size 2",
        value: "sampleSize2"
    },
    {
        name: "Biomass Weight",
        value: "biomassWeight"
    },
    {
        name: "Cultivar",
        value: "cultivar"
    },
    {
        name: "Sow Date",
        value: "sowDate"
    },
    {
        name: "Harvest Date",
        value: "harvestDate"
    }

]

function CheckBox({ text, checked, onClick }: {
    text: string;
    key: string;
    checked?: boolean;
    onClick?: MouseEventHandler<HTMLInputElement>
}) {
    let num = Math.floor(Math.random() * 100000);
    return (
        <div className='w-fit flex items-center transition hover:scale-110 my-1'>
            {/* <input type="checkbox" className='mx-2 border-2 checked:border-red-500   accent-lime-400' id={`${num}`} /> */}
            <input type="checkbox" onClick={onClick} onChange={(event) => console.log(event.target.value)} checked={checked} className=" checked:bg-red-500 checked:border-transparent checked:ring-1 checked:ring-green-600 h-5 w-5 rounded-2xl accent-lime-300" id={`${num}`} />

            <label htmlFor={`${num}`} className='px-2 text-lg'>{text}</label>
        </div>
    )
}

function ClickableDropdown({ closeHandler }: {
    closeHandler: () => void
}) {
    const dispatch = useDispatch()
    const columns = useSelector(selectColumns)
    return (
        <Modal closeHandler={closeHandler}>
            <div className='bg-white p-10 rounded-lg bg-opacity-80'>

                <div className='text-2xl font-bold mb-2'>
                    Select Columns to see
                </div>
                <form action="">

                    {
                        columnsList.map((value) => {
                            let checked = false;
                            for(let a of columns){
                                if(a == value.name) checked = true;
                            }
                            const [isChecked, setIsChecked] = useState(checked);
                            return (
                                <CheckBox onClick={() => setIsChecked((t) => {
                                    if(t == false){
                                        dispatch(addColumns(value.name))
                                    }
                                    if(t == true){
                                        dispatch(removeColumns(value.name))
                                    }
                                    return !t
                                })} text={value.name} checked={isChecked} key={value.value}></CheckBox>
                            )
                        })
                    }
                </form>
                <div className='mt-4'>
                    {/* <Button className='' onClick={() => close}>Confirm</Button> */}
                    <Button className='' onClick={() => closeHandler()}>Close</Button>
                </div>
            </div>
        </Modal>
    )
}

export default ClickableDropdown