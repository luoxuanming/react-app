import React from "./react";

//通过类定义组件
class Clock extends React.Component{
	constructor(){
		super();
		this.state={
			time:new Date().toLocaleTimeString()
		}
	}
	componentDidMount(){//组件已经挂在的生命周期
		this.tick();
	}
	
	tick(){
		setInterval(()=>{
			this.setState({
				time : new Date().toLocaleTimeString()
			})
		})
	}
	
	render(){
	return <h1>{this.props.name}{this.state.time}</h1>
	}
}
export default Clock;