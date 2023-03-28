import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Column, MealType } from '../../../common/types'
import { getOrder } from '../../../store/orders/orders.thunk'
import { AppDispatch, RootState } from '../../../store/store'
import AppTable from '../../UI/Table'

const Order = () => {
    const dispatch = useDispatch<AppDispatch>()
    const items = useSelector((state: RootState) => state.order.order)
    console.log(items)

    useEffect(() => {
        dispatch(getOrder())
    }, [dispatch])

    const columns: Column<MealType>[] = [
        {
            header: '№',
            key: '_id',
            index: true,
        },
        {
            header: 'Create',
            key: 'createAt',
            render: (meal: MealType) => <Grid>{meal.createdAt}</Grid>,
        },

        {
            header: 'Meals',
            key: 'title',
            render: (meal: MealType) => (
                <Grid>
                    {meal.items.map((item) => (
                        <p key={item._id}>{item.title}</p>
                    ))}
                </Grid>
            ),
        },
        {
            header: 'Amount',
            key: 'amount',
            render: (meal: MealType) => (
                <Grid>
                    {meal.items.map((item) => (
                        <p key={item._id}>{item.amount}</p>
                    ))}
                </Grid>
            ),
        },
        {
            header: 'totalPrice',
            key: 'totalPrice',
        },
    ]

    return (
        <div>
            <AppTable
                columns={columns}
                rows={items}
                getUniqueId={(val) => val._id}
            />
        </div>
    )
}

export default Order
