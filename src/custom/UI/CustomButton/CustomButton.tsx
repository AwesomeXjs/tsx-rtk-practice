import { FC } from 'react'
import styles from './CustomButton.module.scss'

interface CustomButtonProps {
	children?: React.ReactNode
	onClick: () => void
	type: 'submit' | 'reset' | undefined
}

const CustomButton: FC<CustomButtonProps> = ({ children, onClick, type }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${styles.customBtnWrapper} `}
		>
			{children}
		</button>
	)
}

export default CustomButton
