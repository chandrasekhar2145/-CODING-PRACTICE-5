// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class HOME extends Component {
  state = {isLoggedIn: false}
  isClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }
  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.isClickButton} />
          ) : (
            <Login login={this.isClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default HOME
