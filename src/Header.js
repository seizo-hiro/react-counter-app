import React, { Component } from "react";

export class Header extends Component {
    render() {
        return (
            <div
                style={{
                    padding: 60,
                    textAlign: "center",
                    backgroundColor: "#00b686",
                    color: "white",
                    fontSize: 50,
                }}
            >
                Counter App
            </div>
        );
    }
}

export default Header;
