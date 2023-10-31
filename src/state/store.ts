import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from './Slices/ToDoSlice'

export const store = configureStore({
	reducer: {
		ToDos: ToDoReducer,
	},
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
