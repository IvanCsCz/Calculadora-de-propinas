type TipPercentageFormProps = {
  selectTip: (value:number) => void
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

function TipPercentageForm({selectTip}:TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl mb-2">Propina:</h3>

      <form className="space-y-1">
        {tipOptions.map(tip => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input 
              id={tip.id} 
              type="radio" 
              name="tip" 
              value={tip.value} 
              onChange={(e) => selectTip(Number(e.target.value))} />
          </div>
        ) )}
      </form>
    </div>
  )
}

export default TipPercentageForm