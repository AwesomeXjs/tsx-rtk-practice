import { FC } from 'react'
import { useAppSelector } from '../../custom/hooks'
import { todosStateArray } from '../../state/Slices/ToDoSlice'
import ToDoItem from '../ToDoItem/ToDoItem'
import styles from './ToDoList.module.scss'

const ToDoList: FC = () => {
	const todos = useAppSelector(todosStateArray)
	return (
		<div className={styles.listWrapper}>
			{todos.map(todo => {
				return <ToDoItem key={todo.id} {...todo} />
			})}
		</div>
	)
}

export default ToDoList
