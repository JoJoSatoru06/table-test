import { useState, type ComponentProps, type KeyboardEvent } from 'react'
import { CELL_TYPES, EnumCellType, type CellType } from '../lib/cell-types'
import { useEvent } from '../hooks/use-event'
import { cn } from '../lib/cn'

interface EditableCellProps extends ComponentProps<'div'> {
	id: string
	defaultValue: string
	onValueChange: (id: string, value: string, originalValue: string) => void
	cellType: CellType
}

export const EditableCell = ({ id, defaultValue, onValueChange, cellType, className, ...props }: EditableCellProps) => {
	const [value, setValue] = useState(defaultValue)
	const [isEditing, setIsEditing] = useState(false)

	const onEdit = useEvent(() => {
		if (isEditing) return

		setIsEditing(true)
	})

	const onInputChange = useEvent((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value
		setValue(newValue)
		onValueChange(id, newValue, defaultValue)
	})

	const onInputBlur = useEvent(() => {
		if (!value.trim()) {
			setValue(defaultValue)
		}

		setIsEditing(false)
	})

	const onKeyDown = useEvent((e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key.length > 1 || e.ctrlKey || e.altKey || e.metaKey) {
			return
		}

		const validator = CELL_TYPES[cellType].validate
		const { value, selectionStart, selectionEnd } = e.currentTarget

		const nextValue = value.substring(0, selectionStart ?? 0) + e.key + value.substring(selectionEnd ?? 0)

		if (!validator(nextValue)) {
			e.preventDefault()
		}
	})

	// Сделал так, чтобы текст можно было редактировать в textarea (в тз в одной из колонок несколько строчек), а остальные в input
	const Component = cellType === EnumCellType.COMMENT ? 'textarea' : 'input'

	return (
		<div
			className={cn(cellType === EnumCellType.COMMENT ? 'w-[300px] h-full grid min-h-[220px]' : 'w-full h-full', className)}
			id={id}
			{...props}>
			{isEditing ? (
				// На процентах можно использовать какой-нибудь инпут с маской (react-number-format), но в тз подобного не было
				<Component
					value={value}
					className={cn('min-w-full min-h-full bg-transparent resize-none whitespace-pre-wrap')}
					autoFocus
					onChange={onInputChange}
					onBlur={onInputBlur}
					onKeyDown={onKeyDown}
				/>
			) : (
				<div
					className='w-full cursor-text whitespace-pre-wrap'
					onClick={onEdit}>
					{value}
				</div>
			)}
		</div>
	)
}

EditableCell.displayName = 'EditableCell'
