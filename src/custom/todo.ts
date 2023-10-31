import { ToDo } from '../types/ToDoType'
import { v4 as uuidv4 } from 'uuid'

export const todoObject: ToDo = {
	id: uuidv4(),
	complete: false,
	title: '',
	description: '',
}
