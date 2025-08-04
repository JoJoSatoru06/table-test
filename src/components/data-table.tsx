import { EditableCell } from './editable-cell'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { EnumCellType } from '../lib/cell-types'
import { memo, type ComponentProps } from 'react'
import { cn } from '../lib/cn'

// Мемоизация нужна для того, чтобы избежать перерисовки компонента при изменении значения таймера.
// На уровне выше обернул onValueChange в useEvent, поэтому ссылка на функцию будет единой, поэтому редактироваемые карточки не будут перерисовываться при изменении значения таймера (можно проверить через Profiler)

interface DataTableProps extends ComponentProps<'div'> {
	onValueChange: (id: string, value: string, originalValue: string) => void
}

export const DataTable = memo(({ onValueChange, className, ...props }: DataTableProps) => {
	return (
		<div
			className={cn('max-w-[1600px] w-full mx-auto overflow-hidden', className)}
			{...props}>
			<Table className='w-full text-sm text-center'>
				<TableHeader>
					<TableRow className='font-bold bg-gray-200'>
						<TableHead>
							<EditableCell
								id='date'
								defaultValue='30 января 2024'
								cellType={EnumCellType.TEXT}
								onValueChange={onValueChange}
							/>
						</TableHead>
						<TableHead>
							<EditableCell
								id='shift'
								defaultValue='Смена 2'
								cellType={EnumCellType.TEXT}
								onValueChange={onValueChange}
							/>
						</TableHead>
						<TableHead colSpan={2}>
							<EditableCell
								id='master'
								defaultValue='Мастер: Иванов И. И.'
								cellType={EnumCellType.NAME}
								onValueChange={onValueChange}
							/>
						</TableHead>
						<TableHead>
							<EditableCell
								id='master'
								defaultValue='РПТКМ-120'
								cellType={EnumCellType.TEXT}
								onValueChange={onValueChange}
							/>
						</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					<TableRow>
						<TableCell className='font-semibold text-left px-8'>
							<EditableCell
								id='personal'
								defaultValue='Персонал'
								cellType={EnumCellType.TEXT}
								onValueChange={onValueChange}
							/>
						</TableCell>
						<TableCell
							className='text-left px-8'
							colSpan={3}>
							<EditableCell
								id='personal-count'
								defaultValue='100500 человек'
								cellType={EnumCellType.TEXT}
								onValueChange={onValueChange}
							/>
						</TableCell>
						<TableCell
							className='text-left px-8'
							rowSpan={3}>
							<EditableCell
								id='comment'
								defaultValue='Комментарий в 3-5 строчек, который тоже можно редактировать.'
								cellType={EnumCellType.COMMENT}
								onValueChange={onValueChange}
							/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell
							className='font-semibold text-left px-8'
							rowSpan={2}>
							<EditableCell
								id='ktp'
								defaultValue='КТП 2000 321'
								cellType={EnumCellType.TEXT}
								onValueChange={onValueChange}
							/>
						</TableCell>
						<TableCell className='text-left px-8'>
							<EditableCell
								id='status'
								defaultValue='Работает'
								cellType={EnumCellType.TEXT}
								onValueChange={onValueChange}
							/>
						</TableCell>
						<TableCell className='text-left px-8'>
							<EditableCell
								id='count'
								defaultValue='24'
								cellType={EnumCellType.NUMBER}
								onValueChange={onValueChange}
							/>
						</TableCell>
						<TableCell className='text-left px-8'>
							<EditableCell
								id='spi'
								defaultValue='SPI 3432'
								cellType={EnumCellType.TEXT}
								onValueChange={onValueChange}
							/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='text-left px-8'>
							<EditableCell
								id='percent'
								defaultValue='98.4%'
								cellType={EnumCellType.PERCENTAGE}
								onValueChange={onValueChange}
							/>
						</TableCell>
						<TableCell
							className='text-center text-red-500 font-semibold'
							colSpan={2}>
							<EditableCell
								id='status-note'
								defaultValue='Функционирует, но не бьет'
								cellType={EnumCellType.TEXT}
								onValueChange={onValueChange}
							/>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
})

DataTable.displayName = 'DataTable'
