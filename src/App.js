import React, { Component } from "react";
import Btn from "./Btn";
import Header from './Header'

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    plusCount = (val) => {
        return () => {
            this.setState({ count: this.state.count + val });
        };
    };
    
    resetCount = () =>{
        this.setState({count:0})
    }
    
    render() {
        const { count } = this.state;
        return (
            <div>
                <Header />
                <div style={{ textAlign: "center" }}>
                    <h1>{count}</h1>
                
                                        <button
                                        onClick={this.resetCount}
                                        style={{
                                            marginBottom:50,
                                            width:100,
                                            height:50,
                                            backgroundColor:"#555",
                                            color:"#fff",
                                            fontWeight:"bold",
                                            fontSize:20
                                        }} 
                                        >RESET</button>
                                        <br/>
                    <div>
                        <Btn plusCount={this.plusCount} num={1} />
                        <Btn plusCount={this.plusCount} num={2} />
                        <Btn plusCount={this.plusCount} num={5} />
                        <Btn plusCount={this.plusCount} num={10} />
                        <Btn plusCount={this.plusCount} num={100} />
                        <Btn plusCount={this.plusCount} num={500} />
                        <Btn plusCount={this.plusCount} num={1000} />
                        <Btn plusCount={this.plusCount} num={5000} />
                        <Btn plusCount={this.plusCount} num={10000} />
                    </div>
                    <br />
                    <div>
                        <Btn plusCount={this.plusCount} num={-1} />
                        <Btn plusCount={this.plusCount} num={-2} />
                        <Btn plusCount={this.plusCount} num={-5} />
                        <Btn plusCount={this.plusCount} num={-10} />
                        <Btn plusCount={this.plusCount} num={-100} />
                        <Btn plusCount={this.plusCount} num={-500} />
                        <Btn plusCount={this.plusCount} num={-1000} />
                        <Btn plusCount={this.plusCount} num={-5000} />
                        <Btn plusCount={this.plusCount} num={-10000} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
