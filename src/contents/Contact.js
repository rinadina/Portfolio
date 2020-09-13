import React, { Component } from 'react'
import Social from '../components/Social'

class Contact extends Component {

    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <br></br>
                <h3>Email  :  dharinahanumunthadu@gmail.com</h3>
                <br></br>
                <h3>LinkedIn  :  <a id="aLink" href="https://Linkedin.com/in/dharinahanumunthadu" target="_blank" rel="noopener noreferrer">dharinahanumunthadu</a></h3>
                <br></br>
                <h3>Github  :  <a id="aLink" href="https://github.com/rinadina" target="_blank" rel="noopener noreferrer">rinadina</a></h3>
                <Social />
            </div>
        )
    }
}
export default Contact