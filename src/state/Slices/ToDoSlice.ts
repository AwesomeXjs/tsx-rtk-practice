import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootType } from '../store'
import { ToDo } from '../../types/ToDoType'

interface ToDosState {
	ToDos: ToDo[]
}
const initialState: ToDosState = {
	ToDos: [],
}

const ToDoSlice = createSlice({
	name: 'ToDoSlice',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ToDo>) => {
			state.ToDos.push(action.payload)
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.ToDos.filter(todo => todo.id !== action.payload)
		},
		favoriteToggleTodo: (state, action: PayloadAction<string>) => {
			state.ToDos.map(todo =>
				todo.id === action.payload
					? { ...todo, complete: !todo.complete }
					: { ...todo }
			)
		},
	},
})

export const todosStateArray = (state: RootType) => state.ToDos.ToDos

export const { addTodo, removeTodo, favoriteToggleTodo } = ToDoSlice.actions

export default ToDoSlice.reducer
