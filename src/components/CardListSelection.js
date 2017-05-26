import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Grid, 
    Row, 
    Col, 
    Thumbnail, 
    Image, 
    Button, 
    Clearfix 
} from 'react-bootstrap';

import * as actions from '../actions';


class CardListSelection extends Component {

    handleCardClick(event) {        
        const { userCards, cards } = this.props;
        
        const cardsArr = _.values(cards)
        
        const selectedCard = _.filter(cardsArr, card => {
            if (card.image === event.target.getAttribute('src')) {
                return card;
            };
        })

        const cardDuplicate = _.find(userCards, card => {
            return card._id === selectedCard[0]._id
        })

        if (!cardDuplicate) {
            this.props.addUserCard(selectedCard[0], userCards);
        }
    }

    renderThumbnails() {
        const { cards } = this.props;
        const { cardStyle } = styles;

        const list = _.map(cards, card => (
            <Col key={card.name} xs={6} sm={2}>
                <Clearfix 
                    visibleXsBlock 
                    visibleSmBlock 
                    visibleMdBlock 
                    visibleLgBlock
                >
                    <Image 
                        onClick={this.handleCardClick.bind(this)} 
                        style={cardStyle} 
                        src={card.image} 
                        thumbnail 
                        alt="small-card" 
                    />
                <p>{card.name}</p>
                </Clearfix>
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
                <h1>Step 1:</h1>
                <h2>Select Your Cards</h2>
                <Grid fluid>
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
        margin: 5
    },
    textStyle: {
        textShadow: '1px 1px 2px black',
        color: 'white',
        textAlign: 'center'
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards,
        userCards: state.userCards
    }
}

export default connect(mapStateToProps, actions)(CardListSelection);