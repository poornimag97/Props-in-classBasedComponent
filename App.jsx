import React from "react";
import {Component} from "react"
import Nav from './Nav';



class App extends Component
{
    render()
    {
        return(
            <>
            <Nav data="hello" username="sam"/>
            </>
        )
    }
} export default App;