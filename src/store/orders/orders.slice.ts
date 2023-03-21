import { createSlice } from '@reduxjs/toolkit'
import { Order } from '../../common/types'
import { getAllOrder } from './orders.thunk'

type OrdersState = {
    items: Order[]
}

const initialState: OrdersState = {
    items: [],
}

export const OrdersSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllOrder.fulfilled, (state, { payload }) => {
            state.items = payload
        })
    },
})
