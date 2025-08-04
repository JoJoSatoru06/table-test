import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn'

interface ProgressProps extends ComponentProps<'div'> {
	value: number
}

export const Progress = ({ className, value, ...props }: ProgressProps) => {
	return (
		<div
			className={cn('h-6 rounded-2xl', className)}
			{...props}>
			<div className='w-full bg-gray-300 rounded-full h-full'>
				<div
					className='bg-yellow-400 h-full rounded-full'
					style={{ width: `${value}%` }}></div>
			</div>
		</div>
	)
}
