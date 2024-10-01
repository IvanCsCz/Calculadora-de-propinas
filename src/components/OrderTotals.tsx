import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}

function OrderTotals({order, tip, placeOrder}:OrderTotalsProps) {
  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity),0), [order])
  const tipAmount = useMemo(() => tip * subtotalAmount , [subtotalAmount, tip])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>Subtotal a pagar:
          <span className="pl-1 font-black">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>Propina:
          <span className="pl-1 font-black">{formatCurrency(tipAmount)}</span>
        </p>

        <p>Total a pagar:
          <span className="pl-1 font-black">{formatCurrency(subtotalAmount + tipAmount)}</span>
        </p>
      </div>

      <button onClick={placeOrder} disabled={subtotalAmount === 0} className="w-full bg-black p-3 uppercase text-white font-bold rounded-md disabled:opacity-10">
        Guardar Orden
      </button>
    </>
  )
}

export default OrderTotals