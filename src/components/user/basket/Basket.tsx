import React from 'react'

const Basket = () => {
    return <div>Basket</div>
}

export default Basket

// import { Box, Modal, styled } from '@mui/material'
// import React, { useCallback } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//     deleteBasketItem,
//     getBasket,
//     updateBasketItem,
// } from '../../../store/basket/basket.thunk'
// import { AppDispatch, RootState } from '../../../store/store'
// // import { postOrders } from '../../store/orders/order.thunk'
// // import { uiActions } from '../../store/UI/ui.slice'
// import BasketItem from './BasketItem'
// import TotalAmount from './TotalAmount'

// type Props = {
//     onClose: () => void
//     open: boolean
// }

// const Basket = ({ onClose, open }: Props) => {
//     const dispatch = useDispatch<AppDispatch>()
//     const items = useSelector((state: RootState) => state.basket.items)

//     const getTotalPrice = useCallback(() => {
//         return items.reduce((sum, { amount, price }) => sum + amount * price, 0)
//     }, [items])

//     const decrementAmount = (id: string, amount: number) => {
//         if (amount > 1) {
//             dispatch(updateBasketItem({ amount: amount - 1, id }))
//         } else {
//             dispatch(deleteBasketItem(id))
//         }
//     }

//     const incrementAmount = (id: string, amount: number) => {
//         dispatch(updateBasketItem({ amount: amount + 1, id }))
//     }

//     // const price = {
//     //     totalPrice: getTotalPrice(),
//     // }

//     const orderSubmitHandler = async () => {
//         try {
//             // await dispatch(postOrders(price)).unwrap()
//             dispatch(getBasket())
//             // dispatch(
//             //     uiActions.showSnackbar({
//             //         isOpen: true,
//             //         severity: 'success',
//             //         message: 'Order completed successfully',
//             //     })
//             // )
//         } catch (error) {
//             console.log(error)

//             // dispatch(
//             //     uiActions.showSnackbar({
//             //         isOpen: true,
//             //         severity: 'error',
//             //         message: 'Failed try again later',
//             //     })
//             // )
//         } finally {
//             onClose()
//         }
//     }

//     return (
//         <Modal onClose={onClose} open={open}>
//             <StyledModalContent>
//                 <Content>
//                     {items.length ? (
//                         <FixedHeightContainer>
//                             {items.map((item) => (
//                                 <BasketItem
//                                     // eslint-disable-next-line no-underscore-dangle
//                                     key={item._id}
//                                     incrementAmount={() =>
//                                         // eslint-disable-next-line no-underscore-dangle
//                                         incrementAmount(item._id, item.amount)
//                                     }
//                                     decrementAmount={() =>
//                                         // eslint-disable-next-line no-underscore-dangle
//                                         decrementAmount(item._id, item.amount)
//                                     }
//                                     title={item.title}
//                                     price={item.price}
//                                     amount={item.amount}
//                                 />
//                             ))}
//                         </FixedHeightContainer>
//                     ) : null}
//                     <TotalAmount
//                         price={getTotalPrice()}
//                         onCLose={onClose}
//                         onOrder={orderSubmitHandler}
//                     />
//                 </Content>
//             </StyledModalContent>
//         </Modal>
//     )
// }

// export default Basket

// const Content = styled('div')(() => ({
//     width: '100%',
//     height: '100%',
//     padding: '0 1rem 1.5rem 1rem',
// }))

// const FixedHeightContainer = styled('div')(() => ({
//     maxHeight: '228px',
//     overflowY: 'scroll',
// }))

// const StyledModalContent = styled(Box)(({ theme }) => ({
//     position: 'fixed',
//     top: '20vh',
//     backgroundColor: theme.palette.primary.dark,
//     color: theme.palette.primary.contrastText,
//     padding: '16px',
//     borderRadius: '14px',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
//     zIndex: 30,
//     animation: 'slide-down 300ms ease-out forwards',
//     width: '640px',
//     left: 'calc(50% - 20rem)',

//     '@keyframes slide-down': {
//         'from ': {
//             opacity: 0,
//             transform: 'translateY(-3rem)',
//         },
//         to: {
//             opacity: 1,
//             transform: 'translateY(0)',
//         },
//     },
// }))
