export enum UserRoles {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST',
}

export type SigninUser = {
    email: string
    password: string
}

export type SignUpUser = {
    name: string
    email: string
    password: string
    confirm: string
    role: string
}

export interface Meal {
    title: string
    price: number
    description: string
    amount: number
    readonly _id: string
}

export interface Order {
    amount: number
    food: null
    price: number
    description: string
    title: string
    readonly _id: string
}

export type Column<T> = {
    header: string
    key: string
    minWidth?: string | number
    align?: 'left' | 'right' | 'center'
    index?: boolean
    render?: (meal: T) => JSX.Element
}

export type UpdateData = {
    id: string
    values: {
        price: number
        title: string
        description: string
    }
}
