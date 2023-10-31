import { ChangeEvent, FC, FormEvent, useState } from 'react'
import styles from './ToDoForm.module.scss'
import { todoObject } from '../../custom/todo'
import { useAppDispatch } from '../../custom/hooks'
import { addTodo } from '../../state/Slices/ToDoSlice'
import CustomButton from '../../custom/UI/CustomButton/CustomButton'

const ToDoForm: FC = () => {
	const dispatch = useAppDispatch()
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
					...todoObject,
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
	return (
		<div>
			<form
				className={styles.formWrapper}
				action='submit'
				onSubmit={fromSubmitHandler}
			>
				<input
					type='text'
					name='title'
					value={text.title}
					onChange={inputChangeHandler}
				/>
				<input
					type='text'
					name='description'
					value={text.description}
					onChange={inputChangeHandler}
				/>
				<div>
					<CustomButton onClick={() => {}} type='submit'>
						Добавить
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

export default ToDoForm
