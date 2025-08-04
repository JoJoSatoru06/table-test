import type { DependencyList, EffectCallback } from 'react'

import { useEffect, useRef } from 'react'

export const useDidUpdate = (effect: EffectCallback, deps?: DependencyList) => {
	const mounted = useRef(false)

	useEffect(
		() => () => {
			mounted.current = false
		},
		[]
	)

	useEffect(() => {
		if (mounted.current) {
			return effect()
		}

		mounted.current = true
		return undefined
	}, deps)
}
