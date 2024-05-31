import { useDispatch } from "react-redux";

export default function ({
  name,
  onChangeValueSetter,
  optionsList
}: {
  name: String;
  onChangeValueSetter: any;
  optionsList?: {
    title: string;
    value: number
  }[] | null
}) {
  const dispatch = useDispatch();
  return (
    <th className="border-2">
      <span>{name}</span>
      <span className="flex px-2">
        <label htmlFor="" className="font-thin text-lg mx-1">Search:</label>
        <input
          type="text"
          className="border-2 rounded-lg"
          onChange={(e) => {
            dispatch(onChangeValueSetter(e.target.value));
          }}
        />
      </span>
      {
        optionsList? <span className="flex px-2 mt-2">
          <label htmlFor="" className="font-thin text-lg mx-1">Select:</label>
        <select name="cars" id="cars" 
        className="bg-red-200 w-full rounded-xl px-2"
        onChange={(e) => {
            console.log(e.target.value)
            if(e.target.value == "Any") {
                dispatch(onChangeValueSetter(null))
                return
            }
            dispatch(onChangeValueSetter(e.target.value))
        }}>
            <option value={"Any"}>Any</option>
            {
                optionsList.map(value => {
                    return (
                        <>
                        <option value={value.title}>{value.title}</option>              
                        </>
                    )
                })
            }
        </select>
      </span> :null
      }
      
    </th>
  );
}
