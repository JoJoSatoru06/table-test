import { useContext } from 'react'
import { TableContext, type TableContextType } from '../providers/table-context'

export const useTableContext = (): TableContextType => {
	const context = useContext(TableContext)

	if (context === undefined) {
		throw new Error('useTableContext должен использоваться внутри TableProvider')
	}

	return context
}
