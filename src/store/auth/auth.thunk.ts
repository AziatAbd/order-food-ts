import { createAsyncThunk } from '@reduxjs/toolkit'
import { signInRequest, signUpRequest } from '../../api/authService'
import { STORAGE_KEYS } from '../../common/constants'
import { SigninUser, SignUpUser } from '../../common/types'

export const signOut = createAsyncThunk('auth/signOut', async () => {
    return localStorage.removeItem(STORAGE_KEYS.AUTH)
})

export const signIn = createAsyncThunk<SigninUser, SigninUser>(
    'auth/signin',
    async (values, { rejectWithValue }) => {
        try {
            const { data } = await signInRequest(values)
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const signUp = createAsyncThunk<SignUpUser, SignUpUser>(
    'auth/signUp',
    async (values, { rejectWithValue }) => {
        try {
            const { data } = await signUpRequest(values)
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
