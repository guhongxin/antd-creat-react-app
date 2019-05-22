import React from 'react';
import { Button } from 'antd'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
    this.loginBtn = this.loginBtn.bind(this)
  }
  loginBtn() {
    this.setState({
      userName: '232',
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.userName}</p>
        <Button type="primary" onClick={this.loginBtn}>登录</Button>
      </div>
    )}
}
export default Login