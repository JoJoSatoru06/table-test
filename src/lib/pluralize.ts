export const pluralizeSeconds = (seconds: number): string => {
	const lastDigit = seconds % 10
	const lastTwoDigits = seconds % 100

	if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
		return `${seconds} секунд`
	}

	if (lastDigit === 1) {
		return `${seconds} секунду`
	}

	if ([2, 3, 4].includes(lastDigit)) {
		return `${seconds} секунды`
	}

	return `${seconds} секунд`
}
