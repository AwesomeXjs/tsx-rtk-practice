import { ChangeEvent, FC } from 'react'
import styles from './CustomInput.module.scss'

interface CustomInputProps {
	type: string
	name: string
	value: string
	placeholder: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	children?: React.ReactNode
}

const CustomInput: FC<CustomInputProps> = props => {
	const { children } = props
	return (
		<input className={styles.customIntputWrapper} {...props}>
			{children}
		</input>
	)
}

export default CustomInput
