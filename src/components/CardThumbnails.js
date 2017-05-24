import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Thumbnail } from 'react-bootstrap';

class CardThumbnails extends Component {
    render() {
        const { cards } = this.props;

        return (
            <Thumbnail src="http://fillmurray.com/100/100" alt="100x100" />
        );
    }
}

function mapStateToProps(state) {
    return { cards: state.cards }
}

export default connect(mapStateToProps)(CardThumbnails)