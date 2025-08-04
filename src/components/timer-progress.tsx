import { useTableContext } from '../hooks/use-table-context'
import { Progress } from './ui/progress'

export const TimerProgress = () => {
	const { loadingTimer } = useTableContext()

	if (!loadingTimer.active) return null

	return (
		<div className='w-full max-w-[680px] mx-auto'>
			<div className='text-sm mb-2 text-gray-700 text-center'>Отправка данных через {loadingTimer.seconds}</div>
			<Progress value={(loadingTimer.seconds / 10) * 100} />
		</div>
	)
}
