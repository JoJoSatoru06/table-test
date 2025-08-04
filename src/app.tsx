import { DataTable } from './components/data-table'
import { TimerProgress } from './components/timer-progress'
import { useEvent } from './hooks/use-event'
import { useTableContext } from './hooks/use-table-context'
import { TableProvider } from './providers/table-context-provider'

const Content = () => {
	const { delayTimer, loadingTimer, addEditedCell } = useTableContext()

	// Благодаря использованию useEvent и мемоизации компонента редактируемых ячеек, ссылка на функцию будет единой, поэтому редактироваемые карточки не будут перерисовываться при изменении значения таймера
	const onValueChange = useEvent((id: string, value: string, originalValue: string) => {
		if (value === originalValue) {
			loadingTimer.clear()
			delayTimer.clear()

			return
		}

		loadingTimer.clear()
		delayTimer.start()
		addEditedCell(id, value, originalValue)
	})

	return (
		<div className='p-8 w-full h-full flex flex-col items-center justify-center gap-[100px] min-h-dvh'>
			<DataTable onValueChange={onValueChange} />
			<TimerProgress />
		</div>
	)
}

const App = () => {
	return (
		<TableProvider>
			<Content />
		</TableProvider>
	)
}

export default App
