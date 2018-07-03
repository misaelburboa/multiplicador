export const moveScore = (playerInfo) => {
    return {
        type: 'MOVE_SCORE',
        score: playerInfo.score,
        player: playerInfo.player,
        isOpen: playerInfo.isOpen
    }
};

export const startMoveScore = (playerInfo) => {
    return (dispatch) => {
        dispatch(moveScore(playerInfo));
    };
};

export const closeModal = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLOSE_MODAL'
        });
    };
};