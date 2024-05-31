import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        deletionOn: false,
        deletionList: [-1],
        deleteAll: false,
        columns: ["Latitude", "Longitude", "By", "Land Cover Type", "Primary Crop", "Secondary Crop"]
    },
    reducers: {
        deletionOn: (state) => {
            state.deletionOn = true
        },
        deletionOff: (state) => {
            state.deletionOn = false
        },
        addDeletionListElement: (state, action) => {
            if(action.payload != -1) state.deletionList.push(action.payload);
            console.log(state.deletionList)
        },
        removeDeletionListElement: (state, action) => {
            let duplicateList = state.deletionList.filter((value) => {
                if(value == action.payload) return false
                return true;
            })
            state.deletionList = duplicateList;
        },
        emptyList: (state) => {
            state.deletionList = [];
        },
        setDeleteAll: (state, action) => {
            state.deleteAll = action.payload;
        },
        addColumns: (state, action) => {
            let something = JSON.parse(JSON.stringify(state.columns))
            console.log(something)
            state.columns.push(action.payload);
        },
        removeColumns: (state, action) => {
            state.columns = state.columns.filter((value) => {
                if(value == action.payload) return false;
                return true;
            })
        }
    }
})

export const {deletionOff, deletionOn, addDeletionListElement, removeDeletionListElement, removeColumns, setDeleteAll, emptyList, addColumns} = uiSlice.actions
export default uiSlice.reducer
export const selectDeletion = (state:any) => state.ui.deletionOn
export const selectDeletionList = (state:any) => state.ui.deletionList
export const selectDeleteAll = (state:any) => state.ui.deleteAll
export const selectColumns = (state:any) => state.ui.columns