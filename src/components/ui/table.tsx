import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn'

const Table = ({ className, ...props }: ComponentProps<'table'>) => {
	return (
		<div className='relative w-full overflow-x-auto'>
			<table
				className={cn('w-full caption-bottom text-sm', className)}
				{...props}
			/>
		</div>
	)
}

const TableHeader = ({ className, ...props }: ComponentProps<'thead'>) => {
	return (
		<thead
			className={cn('[&_tr]:border-b', className)}
			{...props}
		/>
	)
}

const TableBody = ({ className, ...props }: ComponentProps<'tbody'>) => {
	return (
		<tbody
			className={cn('[&_tr:last-child]:border-0', className)}
			{...props}
		/>
	)
}

const TableFooter = ({ className, ...props }: ComponentProps<'tfoot'>) => {
	return (
		<tfoot
			className={cn('border-t font-medium [&>tr]:last:border-b-0', className)}
			{...props}
		/>
	)
}

const TableRow = ({ className, ...props }: ComponentProps<'tr'>) => {
	return (
		<tr
			className={cn('border-b', className)}
			{...props}
		/>
	)
}

const TableHead = ({ className, ...props }: ComponentProps<'th'>) => {
	return (
		<th
			className={cn('px-8 py-10 text-left align-middle font-medium border border-gray-300 relative', className)}
			{...props}
		/>
	)
}

const TableCell = ({ className, ...props }: ComponentProps<'td'>) => {
	return (
		<td
			className={cn('px-8 py-10 align-middle border border-gray-300 relative', className)}
			{...props}
		/>
	)
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell }
