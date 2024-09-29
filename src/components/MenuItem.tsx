import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}

function MenuItem({item}: MenuItemProps) {
  return (
    <button className="p-3 border-2 border-purple-200 hover:bg-purple-200 rounded-md w-full flex justify-between">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem