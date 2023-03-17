import { SigninUser, SignUpUser } from '../common/types'
import { axiosInstance } from '../config/axiosInstance'

export const signInRequest = (values: SigninUser) => {
    return axiosInstance.post('auth/login', values)
}

export const signUpRequest = (values: SignUpUser) => {
    return axiosInstance.post('auth/register', values)
}
