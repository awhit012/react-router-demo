import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom'

class Navbar extends Component {
    render () {
        return (
			<ul>
			   <li><Link to="/about">About</Link></li>
			   <li><Link to="/home">Home</Link></li>
			   <li><Link to="/code-snippets">Code Snippets</Link></li>
			</ul>
        )
    }
}

export default Navbar;





