import React,{ Component } from 'react';
import style from './buttons.css';
class Register extends Component {
	constructor(props){
		super(props)
		this.state={
			value:"111111"
		}
	}
	render(){
		return (
				<div onClick={this.props.clickRegister}>
					<div className={style.register}>注册</div>
				</div>
			)
	}
}
export default Register