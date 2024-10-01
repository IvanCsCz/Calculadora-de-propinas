import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {
  const { order, tip, addItem, removeItem, selectTip } = useOrder()

  return (
    <>
      <header className="bg-purple-300 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumos</h1>
      </header>

      <main className="max-w-5xl mx-auto py-16 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-6">
            {menuItems.map(item => <MenuItem key={item.id} item={item} addItem={addItem} />)}
          </div>
        </div>

          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <OrderContents order={order} removeItem={removeItem} />
            <TipPercentageForm selectTip={selectTip} />
            <OrderTotals order={order} tip={tip} />
          </div>
        
      </main>
    </>
  )
}

export default App
