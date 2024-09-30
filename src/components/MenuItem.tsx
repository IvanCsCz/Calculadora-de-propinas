import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button onClick={() => addItem(item)} className="p-3 border-2 border-purple-200 hover:bg-purple-200 rounded-md w-full flex justify-between">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem