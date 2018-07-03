const scoreDefaultState = { 
    score: 0, 
    player: 'Annonymous',
    isOpen: false
 };
export default  (state = scoreDefaultState, action) => {
    switch (action.type) {
        case "MOVE_SCORE":
            return {
                score: action.score,
                player: action.player,
                isOpen: action.isOpen
            };
        case "RESET":
            return {
                score: 0
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                isOpen: false
            }
        case "ADD_PLAYER_NAME" :
            return {
                ...state,
                player: action.player
            }
        default :
            return state;
        
    }
};