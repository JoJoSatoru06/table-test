import { createContext } from 'react'
import { type UseTimerReturn } from '../hooks/use-timer'

export interface EditedCell {
	id: string
	value: string
	defaultValue: string
}

export interface TableContextType {
	// Таймеры
	delayTimer: UseTimerReturn
	loadingTimer: UseTimerReturn

	// Массив отредактированных ячеек
	editedCells: EditedCell[]

	// Функции для работы с массивом отредактированных ячеек
	addEditedCell: (id: string, value: string, defaultValue: string) => void
	removeEditedCell: (id: string) => void
	clearEditedCells: () => void
}

export const TableContext = createContext<TableContextType | undefined>(undefined)
