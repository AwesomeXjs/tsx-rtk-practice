import { FC, useState } from 'react'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { ToDo } from '../../types/ToDoType'
import styles from './ToDoItem.module.scss'
import { useAppDispatch } from '../../custom/hooks'
import { favoriteToggleTodo, removeTodo } from '../../state/Slices/ToDoSlice'
import Content from './content/Content'
import CustomButton from '../../custom/UI/CustomButton/CustomButton'

const ToDoItem: FC<ToDo> = ({ id, title, description, complete }) => {
	const [status, setStatus] = useState<boolean>(true)

	const dispatch = useAppDispatch()

	const completeToggleHandler = (id: string) => {
		dispatch(favoriteToggleTodo(id))
	}

	const toggleContentHandler = () => {
		setStatus(!status)
	}

	const deleteTodoHandler = (id: string) => {
		dispatch(removeTodo(id))
	}

	return (
		<div className={styles.itemWrapper}>
			<div
				onClick={() => completeToggleHandler(id)}
				className={styles.iconWrapper}
			>
				<IoCheckmarkDoneCircle className={complete && styles.active} />
			</div>
			{status && (
				<Content
					content={title}
					setStatus={toggleContentHandler}
					buttonText={'Смотреть описание'}
				/>
			)}

			{!status && (
				<Content
					content={description}
					setStatus={toggleContentHandler}
					buttonText={'Вернуться...'}
				/>
			)}
			<div className={styles.interfaceWrapper}>
				<CustomButton variant={true} onClick={() => completeToggleHandler(id)}>
					Выполнено!
				</CustomButton>
				<CustomButton variant={false} onClick={() => deleteTodoHandler(id)}>
					Удалить!
				</CustomButton>
			</div>
		</div>
	)
}

export default ToDoItem
