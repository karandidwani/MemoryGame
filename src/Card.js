import React, {Component} from 'react';
import './Card.css'

class Card extends Component {

    render(){

        const {backgroundColor, showing, onClick} = this.props;
        let style = {}

        if(showing){
            style.backgroundColor = backgroundColor;
        }

        return (
            <div
                className='card-container'
                style={style}
                onClick={onClick}
            >
            </div>
        )
    }
}

export default Card;