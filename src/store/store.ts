import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { MealsSlice } from './meals/meals.slice'

export const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [MealsSlice.name]: MealsSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
