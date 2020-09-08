import React, { Component } from 'react';
import Navitem from './NavItem';

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state={
            'NavItemActive':''
        }
    }

    activeitem=(id)=>{
        if(this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active')
        }
        this.setState( {'NavItemId':id}, ()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active')
        } )
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                    <Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>
                    <Navitem item="Experience" tolink="/experience" activec={this.activeitem}></Navitem>
                    <Navitem item="Home" tolink="/contact" activec={this.activeitem}></Navitem>
                </ul>
            </nav>
        )
    }
}
export default Navbar