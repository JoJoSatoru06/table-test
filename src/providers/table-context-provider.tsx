import { type ReactNode, useCallback, useState } from 'react'
import { useTimer } from '../hooks/use-timer'
import { type EditedCell, TableContext, type TableContextType } from './table-context'

export const TableProvider = ({ children }: { children: ReactNode }) => {
	const [editedCells, setEditedCells] = useState<EditedCell[]>([])

	const addEditedCell = useCallback((id: string, value: string, defaultValue: string) => {
		setEditedCells(prev => {
			const existingIndex = prev.findIndex(cell => cell.id === id)

			if (existingIndex !== -1) {
				const newCells = [...prev]
				newCells[existingIndex] = { defaultValue, id, value }
				return newCells
			} else {
				return [...prev, { defaultValue, id, value }]
			}
		})
	}, [])

	const removeEditedCell = useCallback((id: string) => {
		setEditedCells(prev => prev.filter(cell => cell.id !== id))
	}, [])

	const clearEditedCells = useCallback(() => {
		setEditedCells([])
	}, [])

	const delayTimer = useTimer(5, {
		immediately: false,
		onExpire: () => {
			loadingTimer.start()
		}
	})

	const loadingTimer = useTimer(10, {
		immediately: false,
		onExpire: () => {
			console.log('Отредактированные ячейки:', editedCells)
			clearEditedCells()
		}
	})

	const value: TableContextType = {
		// Таймеры
		delayTimer,
		loadingTimer,

		// Массив отредактированных ячеек
		editedCells,

		// Функции для работы с массивом отредактированных ячеек
		addEditedCell,
		removeEditedCell,
		clearEditedCells
	}

	return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}
