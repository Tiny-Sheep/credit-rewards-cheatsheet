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
        this.props.addUserCard(event, userCards, cards);

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

        if ( _.isEmpty(cards) ) { 
            return (
                <div style={textStyle}>
                    <h1>Step 1:</h1>
                    <p>Loading cards...Please wait</p>
                </div>
            )
        } else {
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