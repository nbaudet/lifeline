import dayjs from 'dayjs'

export function getAge(birthDate: string, pointDate: string) {
    const diff = dayjs(pointDate).diff(dayjs(birthDate), 'year')
    return `${diff} ${diff === 1 ? 'year old' : 'years old'}`
}
