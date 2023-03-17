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
