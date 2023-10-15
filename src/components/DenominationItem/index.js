// Write your code here
import './index.css'

const DenominationItem = props => {
  const {buttonDetails, updateBalance} = props
  const {value} = buttonDetails
  const onFifty = () => {
    updateBalance(value)
  }
  return (
    <li>
      <button className="button" type="button" onClick={onFifty}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
