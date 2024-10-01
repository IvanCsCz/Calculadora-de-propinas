type TipPercentageFormProps = {
  selectTip: (value:number) => void,
  tip: number
}

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

function TipPercentageForm({selectTip, tip}:TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl mb-2">Propina:</h3>

      <form className="space-y-1">
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input 
              id={tipOption.id} 
              type="radio" 
              name="tip" 
              value={tipOption.value} 
              onChange={(e) => selectTip(Number(e.target.value))}
              checked={tipOption.value === tip}  
            />
          </div>
        ) )}
      </form>
    </div>
  )
}

export default TipPercentageForm