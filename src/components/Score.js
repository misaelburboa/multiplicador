import React from 'react';
import { connect } from 'react-redux';

export const Score =  (props) => (
    <div>
        <div>
            Jugador: {props.player}
        </div>
        Tu puntuación es: {props.score}
    </div>
);

const mapStateToProps = (state) => ({
    score: state.score,
    player: state.player
});

export default connect(mapStateToProps)(Score);