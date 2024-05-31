import { useDispatch, useSelector } from "react-redux";
import {
  deletionOff,
  emptyList,
  selectDeletion,
  selectDeletionList,
} from "../../features/ui";
import { useCallback } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../App";
import Button from "./Button";


export default function () {
  const deleteOn = useSelector(selectDeletion);
  const dispatch = useDispatch();
  const deletionList = useSelector(selectDeletionList);
  const deleteRequest = useCallback(async () => {
    const response = await axios.post(
      BACKEND_URL + "api/v1/data/deletemany",
      {
        dataId: deletionList,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(deletionOff());
    dispatch(emptyList());
    console.log(response, "is the total response");
  }, [deletionList]);

  const deleteAllRequest = useCallback(async () => {
    await axios.post(
      BACKEND_URL + "api/v1/data/deleteall",
      {
        dataId: deletionList,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(deletionOff());
    dispatch(emptyList());
  }, []);
  if (!deleteOn) null
  if (deleteOn)
    return (
      <div className="justify-center left-1/2 w-fit sticky px-7 py-4 rounded-lg bg-opacity-50 items-center bottom-0 bg-green-500 flex flex-col md:flex-row">
        <div>
          <Button
            className="bg-red-500 p-2 mx-2 rounded-3xl hover:bg-red-700"
            onClick={() => {
              deleteRequest();
            }}
          >
            Delete
          </Button>
          <Button
            className="bg-red-500 p-2 mx-2 rounded-3xl hover:bg-red-700"
            onClick={() => {
              deleteAllRequest();
              dispatch(deletionOff());
              dispatch(emptyList());
            }}
          >
            Delete All
          </Button>
        </div>
      </div>
    );
}
