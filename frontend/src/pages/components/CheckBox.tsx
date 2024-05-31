import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDeletionListElement,
  setDeleteAll,
  removeDeletionListElement,
  selectDeleteAll,
} from "../../features/ui";

export enum typeOfCheckBox {
  heading,
  row,
}
export default function ({ type, id }: { type: typeOfCheckBox; id: Number }) {
  const [on, setOn] = useState(false);
  const dispatch = useDispatch();
  const deleteAll = useSelector(selectDeleteAll)
  useEffect(() => {
    if(typeOfCheckBox.row == type){
        if(deleteAll){
            setOn(true);
            dispatch(addDeletionListElement(id));
        }
    }
  }, [deleteAll])
  if (type == typeOfCheckBox.heading) {
    return (
      <td className="flex p-1 items-center gap-2">
        <label htmlFor="" className="p-1 text-lg text-center">Select all</label>
        <input
          type="checkbox"
          checked={deleteAll}
          className="accent-red-500 w-5 h-5"
          onChange={() => {
            if (!deleteAll) {
              dispatch(setDeleteAll(true))
            } else {
              dispatch(setDeleteAll(false));
            }
          }}
          value={deleteAll.toString()}
        />
      </td>
    );
  }
  return (
    <>
      <td className="flex p-1 justify-end px-4">
        <input
          type="checkbox"
          className="accent-red-500 w-5 h-5 ring-1 checked:ring-red-950"
          checked={on}
          onChange={() => {
            setOn((t) => {
              if (!t) {
                dispatch(addDeletionListElement(id));
              } else {
                dispatch(removeDeletionListElement(id));
                dispatch(setDeleteAll(false))
              }
              return !t;
            });
          }}
          
        />
      </td>
    </>
  );
}
