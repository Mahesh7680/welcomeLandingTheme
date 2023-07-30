import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {login: true}

  onLogin = () => {
    this.setState(prevState => ({
      login: !prevState.login,
    }))
  }

  render() {
    const {login} = this.state
    return (
      <div className="box-container">
        <Message {login:login}/>
        {login ? (
          <button onClick={this.onLogin}>Login</button>
        ) : (
          <button onClick={this.onLogin}>Logout</button>
        )}
      </div>
    )
  }
}

export default Home
