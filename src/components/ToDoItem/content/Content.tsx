import { FC, MouseEvent } from 'react'
import styles from './Content.module.scss'

interface ContentProps {
	setStatus: (status: MouseEvent<HTMLButtonElement>) => void
	content: string
	buttonText: string
}

const Content: FC<ContentProps> = ({ content, setStatus, buttonText }) => {
	return (
		<div className={styles.contentWrapper}>
			<h2 className={styles.todoTitle}>{content}</h2>
			<div className={styles.container}>
				<button onClick={setStatus} className={styles.learn_more}>
					<span className={styles.circle} aria-hidden='true'>
						<span className={`${styles.icon} ${styles.arrow}`}></span>
					</span>
					<span className={styles.button_text}>{buttonText}</span>
				</button>
			</div>
		</div>
	)
}

export default Content
