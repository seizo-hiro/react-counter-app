import React, { Component } from 'react'

export class Btn extends Component {
    render() {
        const {plusCount,num} = this.props
        return (
                <button style={{
                    width : 90,
                    height : 50,
                    fontSize:20,
                    fontWeight:'bold',
                    backgroundColor:"#1de9b6",
                    borderColor:"#00b686",
                    margin:10}} 
                onClick={plusCount(num)}>{num>0 ? `+${num}` : num}</button>
        )
    }
}

export default Btn
