import React, {Component} from 'react'
import './Navbar.css'

class Navbar extends Component {

    render() {
        const {onNewGame} = this.props;

        return (
            <header>
                <h2><a href="/">Memory Game</a></h2>
                <nav>
                    <li><a href="/" onClick={onNewGame}>New Game</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar;