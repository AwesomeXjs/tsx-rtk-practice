import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from './Slices/ToDoSlice'
import ErrorReducer from './Slices/ErrorSlice'

export const store = configureStore({
	reducer: {
		ToDos: ToDoReducer,
		Errors: ErrorReducer,
	},
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
