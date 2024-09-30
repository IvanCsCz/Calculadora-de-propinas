import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(orderItem => orderItem.id === item.id)
    if( !itemExists ) {
      setOrder([...order, {...item, quantity: 1}])
      return
    }

    const updatedOrder = order.map( orderItem => {
      if(orderItem.id === item.id){
        return{
          ...orderItem,
          quantity: orderItem.quantity + 1
        }
      }

      return orderItem
    })
    setOrder(updatedOrder)
  }

  const removeItem = (id: MenuItem['id']) => {
    const updatedOrder = order.filter((orderItem) => orderItem.id !== id )
    setOrder(updatedOrder)
  }

  return {
    order,
    addItem,
    removeItem
  }
}

export default useOrder