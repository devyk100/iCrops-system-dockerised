import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/data'
import uiReducer from '../features/ui'

export default configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer
  }
})

