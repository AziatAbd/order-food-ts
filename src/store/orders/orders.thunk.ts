import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import orderService from '../../api/orderService'

export const getAllOrder = createAsyncThunk(
    'order/getAllOrder',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await orderService.getAllOrder()
            console.log(data.data)

            return data.data
        } catch (e) {
            if (isAxiosError(e)) {
                const error = e as AxiosError<{
                    status: number
                    message: string
                }>
                return rejectWithValue(error.response?.data.message)
            }
            return rejectWithValue('Something went wrong')
        }
    }
)

export const getOrder = createAsyncThunk(
    'order/getOrder',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await orderService.getOrder()
            return data.data
        } catch (e) {
            if (isAxiosError(e)) {
                const error = e as AxiosError<{
                    status: number
                    message: string
                }>
                return rejectWithValue(error.response?.data.message)
            }
            return rejectWithValue('Something went wrong')
        }
    }
)
