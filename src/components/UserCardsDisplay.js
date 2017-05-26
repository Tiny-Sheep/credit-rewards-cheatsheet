import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Col, 
    Grid, 
    Row, 
    Clearfix, 
    Image, 
    Button
} from 'react-bootstrap';

class UserCardsDisplay extends Component {
    constructor(props) {
        super(props);

        this.handleRemoveUserCard = this.handleRemoveUserCard.bind(this);
    }

    handleRemoveUserCard(card) {
        const { userCards } = this.props;
        
        const removedCard = _.remove(userCards, userCard => {
            if (card.name === userCard.name) {
                return card
            }
        })

        this.setState({
            userCards
        });

        console.log(userCards)
    }

    renderCards() {
        const { userCards } =  this.props;
        const { cardStyle, textStyle, cardContainerStyle } = styles;

        const cardList = userCards.map(card => (
            <Col key={card.name} xs={6} sm={2}>
                <Clearfix visibleLgBlock visibleMdBlock visibleSmBlock visibleXsBlock>
                <div style={cardContainerStyle}>
                    <Image
                        style={cardStyle}
                        src={card.image}
                        alt="users-card"
                        thumbnail
                    />
                    <p style={textStyle}>{card.name}</p>
                    <Button 
                        bsSize="xsmall" 
                        bsStyle="danger" 
                        onClick={() => this.handleRemoveUserCard(card)}
                    >X</Button>
                </div>
                </Clearfix>
            </Col>
            )
        );
        return cardList
    }
    
    render() {
        const { textStyle } = styles;
        const { userCards } = this.props;

        if (userCards.length < 1) {
            return (
                <div style={textStyle}>
                    <h2>Your Card List Is Empty</h2>
                </div>
            );   
        }

        return (
            <div className="user-cards-display">
                <h2 style={textStyle}>Your Card List</h2>
                <Grid fluid>
                    <Row>
                        {this.renderCards()}
                    </Row>
                </Grid>
            </div>
        );
    }
}

const styles = {
    textStyle: {
        textShadow: '2px 2px 3px black',
        color: 'white'
    },
    cardStyle: {
        margin: 5,
        padding: 5
    },
    cardContainerStyle: {
        height: 225
    }
};

function mapStateToProps(state) {
    return {
        userCards: state.userCards
    }
}

export default connect(mapStateToProps)(UserCardsDisplay);