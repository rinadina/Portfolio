import React, { Component } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import profilepic from '../img/professional-picture.jpg'
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} alt="This is me." className="profilepic"></img>
                <br></br>
                <ReactTypingEffect className="typingeffect" text={['Hello, my name is Dharina Hanumunthadu. I am a 4th year in Software Engineering.']} speed={105} eraseDelay={100}/>
                <Social />
            </div>
        )
    }
}
export default Home