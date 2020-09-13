import React, { Component } from 'react'

class About extends Component {

    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>

                <h4>My name is <h1 id="name-title">Dharina Hanumunthadu,</h1> I'm a 4th year undergraduate student in Software Engineering at Carleton University, graduating in December 2020.</h4>

                <h4>My resume can be found <a id="aLink" href="https://drive.google.com/file/d/1hrycv84KI6naZQ7Eu3LfnIGVhJU3igg-/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.</h4>

                <br></br>

                <h4>This is my portfolio depicting my experiences as a student in Engineering, specifically my skills and lessons learned throughout my university journey.</h4>

                <br></br>

                <p>I am originally from Mauritius, I am billingual (English and French), I have attended secondary school in Brampton Ontario, and chose Carleton University in Ottawa for my undergraduate studies.</p>
                <p>I value community and contributing to it and as such, have taken part in many avenues that are targeted toward helping others and improving my skillset. I volunteered for the IEEE Carleton University Student Branch as a Lead Organizer for IEEE SPAC (Student Professional Awareness Conference), I was elected as the IEEE Women in Engineering (WIE) Chair and as Vice Chair.</p>
                <p>My most recent contribution is starting a podcast series, called Capital Interns, at the beginning of August 2020, with my friend. I am the co-founder and currently a co-host of Capital Interns, an education podcast with the goal of helping out high school students, or anyone, looking for insight and help in choosing their post secondary career paths. I am also currently a mentor for Technolgap, an initiative run by women in Compute Science at Carleton University, where I help out first year students joining Software Engineering on navigating their journey at school.</p>
                <p>I recently completed my 6th internship at Solace as a Junior Software Developer. I have previously worked at Enghouse Systems as a Server-Side Cloud Developer and at Trend Micro as a Java Software Developer.</p>
                            
            </div>
        )
    }
}
export default About