import { FC, MouseEvent } from 'react'
import styles from './CustomButton.module.scss'

interface CustomButtonProps {
	children?: React.ReactNode
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	type?: 'submit' | 'reset' | undefined
	variant: boolean
}

const CustomButton: FC<CustomButtonProps> = ({
	children,
	onClick,
	type,
	variant,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={
				variant
					? `${styles.customBtnWrapper} ${styles.variantGreen}`
					: `${styles.customBtnWrapper} ${styles.variantRed}`
			}
		>
			{children}
		</button>
	)
}

export default CustomButton
