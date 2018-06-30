export const moveScore = (playerInfo) => {
    return {
        type: 'MOVE_SCORE',
        score: playerInfo.score,
        player: playerInfo.player
    }
};

export const startMoveScore = (playerInfo) => {
    return (dispatch) => {
        dispatch(moveScore(playerInfo));
    };
};