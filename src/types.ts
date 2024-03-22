import { object, string, number, date } from 'yup'

export type Settings = {
    name: string
    birthDate: string
}

export type LifePoint = {
    id: string
    date: string
    title: string
    value: number
    description: string
}

export type LifePoints = LifePoint[]

// Yup schema for validation
// @see https://github.com/jquense/yup
export const lifePointSchema = object({
    id: string().required(),
    date: date().required('Provide a date for the event'),
    title: string().required('Give a title to the event'),
    value: number().required().min(-5).max(5),
    description: string().optional(),
})
