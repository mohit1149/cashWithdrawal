// Write your code here
// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    currentBalance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({
      currentBalance: prevState.currentBalance - value,
    }))
  }

  render() {
    const {currentBalance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="background">
        <div className="container">
          <div className="first-container">
            <p className="round">s</p>
            <p className="customer-name">Sarah Williams</p>
          </div>
          <div className="second-container">
            <p className="balance"> Your Balance</p>
            <p className="current-balance">{currentBalance}</p>
          </div>
          <p className="rupees">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="final-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                buttonDetails={eachItem}
                key={eachItem.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
