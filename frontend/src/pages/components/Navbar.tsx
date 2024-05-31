import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deletionOff,
  deletionOn,
  // selectDeleteAll,
  selectDeletion,
  // selectDeletionList,
} from "../../features/ui";
import Button from "./Button";
import ClickableDropdown from "./Modal/ClickableDropdown";
import { movePageBack, movePageForward, selectEntries, selectPageNo, setEntries } from "../../features/data";
import GenerateDataFile from "./Modal/GenerateDataFile";
import DownloadDataWithImages from "./Modal/DownloadDataWithImages";
// import axios from "axios";
// import { BACKEND_URL } from "../../App";


export default function () {
  // const [selectableDropdown] = useState(false);
  // const [columns] = useState([]);
  const navigate = useNavigate();
  const deleteOn = useSelector(selectDeletion);
  const dispatch = useDispatch();
  const deletion = useSelector(selectDeletion);
  // const deletionList = useSelector(selectDeletionList);
  const dataAndHandlers = {
    Next: function () {
      return (
        <Button onClick={() => {
          dispatch(movePageForward())
        }}>
          Next
        </Button>
      )
    },
    Previous: function () {
      return (
        <Button onClick={() => {
          dispatch(movePageBack())
        }}>
          Previous
        </Button>
      )
    },
    Entries: function () {
      const entries = useSelector(selectEntries)
      const pageNo = useSelector(selectPageNo);
      return (<>
        <div className="inline p-2 rounded-sm">
          <label htmlFor="">Entries: </label>
          <input
            type="number"
            className="border-2 max-w-14 p-2 bg-slate-200 rounded-2xl"
            value={entries}
            onChange={(e) => {
              dispatch(setEntries(e.target.value));
            }}
          />
          <label htmlFor="" className="ml-1"> Page {pageNo}</label>
        </div>
      </>)
    },
    DownloadDataWithImage: function () {
      const [isModalOpen, setModalOpened] = useState(false);
      return (
        <>
          <Button onClick={() => {
            setModalOpened(t => !t)
          }}>
            Download Data with Images
          </Button>
          {isModalOpen ? <DownloadDataWithImages closeHandler={() => {
            setModalOpened(false)
          }} /> : null}
        </>
      )
    },
    DownloadData: function () {
      const [isModalOpen, setModalOpened] = useState(false);
      return (
        <>
          <Button onClick={() => {
            setModalOpened(t => !t)
          }}>
            Download Data File
          </Button>
          {isModalOpen ? <GenerateDataFile closeHandler={() => {
            setModalOpened(false)
          }} /> : null}
        </>
      )
    },
    Help: function(){
      return (

        <Button onClick={() => {
          window.open("https://docs.google.com/document/d/1iokflyiwnFyCEla7k6UOsdiYx3NtD4cgInTQoLP-MBI/edit?usp=sharing", '_blank');
        }}>
        Help
      </Button>
      )
    },
    Delete: function () {
      return (
        <>
          {!deletion ? (
            <Button
              onClick={() => {
                dispatch(deletionOn());
                // else dispatch(deletionOff())
              }}
            >
              Delete
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch(deletionOff());
              }}
            >
              Cancel Deletion
            </Button>
          )}
        </>
      )
    },
    Columns: function () {
      const [isModalOpen, setModalOpened] = useState(false);
      return (
        <>
          <Button onClick={() => {
            setModalOpened(t => !t);
          }}>
            Columns
          </Button>
          {
            isModalOpen ? <ClickableDropdown closeHandler={() => setModalOpened(false)}></ClickableDropdown> : null
          }
        </>
      )
    },
    Logout: function () {
      return (
        <Button onClick={() => {
          localStorage.setItem("token", "");
          localStorage.setItem("email", "");
          navigate("/login");
        }}>
          Logout
        </Button>
      )
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem("email") == "" ||
      localStorage.getItem("email") == undefined ||
      localStorage.getItem("token") == "" ||
      localStorage.getItem("token") == undefined
    ) {
      navigate("/login");
    }
  });
  return (
    <>
      <div className="w-full h-fit bg-green-300 flex justify-between p-2 items-center left-0 sticky top-0">
        <div className="">
          <span>
            Admin user: {localStorage.getItem("email")}
          </span>
          {
            !deleteOn? <>
            <dataAndHandlers.Next></dataAndHandlers.Next>
          <dataAndHandlers.Previous />
            </>: null
          }
          <dataAndHandlers.Entries />

        </div>
        <div className="">
          {
            !deleteOn? <>
            <dataAndHandlers.DownloadDataWithImage />
          <dataAndHandlers.DownloadData />
          <dataAndHandlers.Help />
            </>: null
          }
          <dataAndHandlers.Delete />
          {
            !deleteOn? 
            <>
            <dataAndHandlers.Columns />
          <dataAndHandlers.Logout />
            </>:null
          }
        </div>
      </div>
    </>
  );
}
