import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './ToDoForm.module.scss'
import { useAppDispatch, useAppSelector } from '../../custom/hooks'
import {
	addTodo,
	deleteAllTodos,
	removeCompleteTodo,
	todosStateArray,
} from '../../state/Slices/ToDoSlice'
import CustomButton from '../../custom/UI/CustomButton/CustomButton'
import CustomInput from '../../custom/UI/CustomInput/CustomInput'
import { v4 as uuidv4 } from 'uuid'

const ToDoForm: FC = () => {
	const dispatch = useAppDispatch()
	const todos = useAppSelector(todosStateArray)
	const [text, setText] = useState<{ title: string; description: string }>({
		title: '',
		description: '',
	})
	const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setText({
			...text,
			[name]: value,
		})
	}
	const fromSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (text.title.trim().length && text.description.trim().length) {
			dispatch(
				addTodo({
					id: uuidv4(),
					complete: false,
					title: text.title,
					description: text.description,
				})
			)
			setText({
				title: '',
				description: '',
			})
		}
	}

	const removeCompleteTodosHandler = () => {
		dispatch(removeCompleteTodo(todos))
	}

	const deleteAllTodoses = () => {
		dispatch(deleteAllTodos([]))
	}

	return (
		<div>
			<form
				className={styles.formWrapper}
				action='submit'
				onSubmit={fromSubmitHandler}
			>
				<CustomInput
					type='text'
					name='title'
					placeholder='Введите название...'
					value={text.title}
					onChange={inputChangeHandler}
				/>
				<CustomInput
					type='text'
					name='description'
					placeholder='Введите описание...'
					value={text.description}
					onChange={inputChangeHandler}
				/>
			
				<CustomButton variant={true} type='submit'>
					Добавить
				</CustomButton>
			</form>
			<CustomButton onClick={deleteAllTodoses} variant={false}>
				Удалить все
			</CustomButton>
			<CustomButton onClick={removeCompleteTodosHandler} variant={false}>
				Удалить выполненые
			</CustomButton>
		</div>
	)
}

export default ToDoForm
