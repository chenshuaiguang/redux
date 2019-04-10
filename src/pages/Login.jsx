import React,{ Component } from 'react';
import style from './buttons.css';
class Login extends Component {
	constructor(props){
		super(props)
		this.state={
			value:"111111"
		}
	}
	render(){
		return (
				<div onClick={this.props.clickLogin}>
					<div className={style.login}>登录</div>
				</div>
			)
	}
}
export default Login