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
			state.ToDos = state.ToDos.filter(todo => todo.id !== action.payload)
		},
		favoriteToggleTodo: (state, action: PayloadAction<string>) => {
			/* const toggledTodo = state.ToDos.find(todo => todo.id === action.payload)
			if (toggledTodo) {
				toggledTodo.complete = !toggledTodo.complete
			} */
			state.ToDos = state.ToDos.map(todo =>
				todo.id === action.payload
					? { ...todo, complete: !todo.complete }
					: { ...todo }
			)
		},
		removeCompleteTodo: (state, action: PayloadAction<ToDo[]>) => {
			state.ToDos = action.payload.filter(todo => todo.complete !== true)
		},
		deleteAllTodos: (state, action: PayloadAction<[]>) => {
			state.ToDos = action.payload
		},
	},
})

export const todosStateArray = (state: RootType) => state.ToDos.ToDos

export const {
	addTodo,
	removeTodo,
	favoriteToggleTodo,
	removeCompleteTodo,
	deleteAllTodos,
} = ToDoSlice.actions

export default ToDoSlice.reducer
