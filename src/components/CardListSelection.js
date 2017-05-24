import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Thumbnail, Image, Button } from 'react-bootstrap';

import * as actions from '../actions';

class CardListSelection extends Component {

    handleCardClick(event) {        
        const cardsArr = _.values(this.props.cards)
        const userCard = _.filter(cardsArr, card => {
            if (card.image === event.target.getAttribute('src')) {
                return card;
            };
        })
        
        this.props.addUserCard(userCard);
    }

    renderThumbnails() {
        const { cards } = this.props;
        const { cardStyle } = styles;

        const list = _.map(cards, card => (
            <Col key={card.name}  xs={6}>
                <Image 
                    onClick={this.handleCardClick.bind(this)} 
                    style={cardStyle} 
                    src={card.image} 
                    thumbnail 
                    alt="small-card" 
                />
                <p>{card.name}</p>
            </Col>
            )
        );
        return list;
    }
    
    render() {
        const { cards } = this.props;
        const { textStyle } = styles;

        return (
            <div style={textStyle}>
                <h2 style={textStyle}>Select Your Cards</h2>
                <Grid>
                    <Row>
                        {this.renderThumbnails()}
                    </Row>
                </Grid>
            </div>
        );
    }
}

const styles = {
    cardStyle: {
        margin: '5'
    },
    textStyle: {
        textShadow: '2px 2px 3px black',
        color: 'white',
        textAlign: 'center'
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps, actions)(CardListSelection);