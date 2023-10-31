import { FC } from 'react'
import styles from './App.module.scss'
import ToDoForm from './ToDoForm/ToDoForm'
import ToDoList from './ToDoList/ToDoList'

const App: FC = () => {
	return (
		<div className={styles.appWrapper}>
			<h1>Todo with typescript</h1>
			<ToDoForm />
			<ToDoList />
		</div>
	)
}

export default App
