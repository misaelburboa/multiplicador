const scoreDefaultState = { score: 0, player: 'Annonymous' };
export default  (state = scoreDefaultState, action) => {
    switch (action.type) {
        case "MOVE_SCORE":
            return {
                score: action.score,
                player: action.player
            };
        case "RESET":
            return {
                score: 0
            }
        default :
            return state;
        
    }
};