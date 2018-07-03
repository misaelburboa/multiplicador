import React from 'react';
import { connect } from 'react-redux';

export const Score =  (props) => (
    <div className="player-board">
        <div className="player-container">
            Jugador: 
            <h1 className="player">{props.player}</h1>
        </div>
        <div className="score-container">
            Tu puntuación es: 
            <h1 className="score">{props.score}</h1>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    score: state.score,
    player: state.player
});

export default connect(mapStateToProps)(Score);