export const EnumCellType = {
	TEXT: 'text',
	NUMBER: 'number',
	PERCENTAGE: 'percentage',
	NAME: 'name',
	COMMENT: 'comment'
} as const

export type CellType = (typeof EnumCellType)[keyof typeof EnumCellType]

export interface CellTypeConfig {
	type: CellType
	validate: (value: string) => boolean
	format: (value: string) => string
}

export const CELL_TYPES: Record<CellType, CellTypeConfig> = {
	text: {
		type: 'text',
		validate: (): boolean => true,
		format: (value: string): string => value
	},
	number: {
		type: 'number',
		validate: (value: string): boolean => /^-?\d*\.?\d*$/.test(value),
		format: (value: string): string => value
	},
	percentage: {
		type: 'percentage',
		validate: (value: string): boolean => /^-?(\d+(\.\d*)?)?%?$/.test(value),
		format: (value: string): string => {
			if (value.endsWith('%')) return value
			return value ? `${value}%` : value
		}
	},
	name: {
		type: 'name',
		// Добавил пробелы, так как иначе всё было бы слитно. Также добавил двоеточие, так как оно имеется в дизайне
		validate: (value: string): boolean => /^[А-Яа-яЁё\s:.]*$/.test(value),
		format: (value: string): string => value
	},
	comment: {
		type: 'comment',
		validate: (): boolean => true,
		format: (value: string): string => value
	}
}
