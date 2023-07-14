import React from "react";


class ComponentKdim extends React.Component {
    constructor(){
        super();
        this.state = {
            counter :0
        }
        this.fnc1 = this.fnc1.bind(this)
    }
    componentDidUpdate(){
        console.log("  tbadalt khdhit el 6eme")
    }
    componentDidMount(){
        console.log("rkeb el component")
    }
    componentWillUnmount(){
        console.log("component tna7a")
    }
    fnc1(){
        this.setState({counter: this.state.counter + 1})
    }
    render(){
        console.log("render")
        return (
            <div style={{border:'2px solid black'}}>
                <h2>{this.state.counter}</h2>
                <button onclick={this.fnc1}>click mel class comp</button>
            </div>
        )
    }
}

export default ComponentKdim