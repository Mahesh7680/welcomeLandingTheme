const Message = props => {
    const {login} = props
  <div>
  {login ? <h1>Please Login</h1> : <h1>Welcome User</h1>}
  </div>
}

export default Message
