import dayjs from 'dayjs'
import { object, string, number, date, InferType, array } from 'yup'

export type Settings = InferType<typeof settingsSchema>

export type LifePoint = InferType<typeof lifePointSchema>

export type LifePoints = LifePoint[]

export type AppState = InferType<typeof rootStateSchema>

// Yup schema for validation
// @see https://github.com/jquense/yup
export const lifePointSchema = object({
    id: string().required(),
    date: date()
        .required('Provide a date for the event')
        .nullable()
        .default(undefined)
        .transform((value) => {
            return value ? dayjs(value).toDate() : value
        }),
    title: string().required('Give a title to the event'),
    value: number().required().min(-5).max(5),
    description: string().optional(),
})

export const settingsSchema = object({
    name: string().required('Choose a name for your graph'),
    birthDate: date()
        .required('Your date of birth is required to display your age next to the events')
        .nullable()
        .default(undefined)
        .transform((value) => {
            return value ? dayjs(value).toDate() : value
        }),
})

export const rootStateSchema = object({
    settings: settingsSchema,
    lifePoints: array(lifePointSchema),
})
