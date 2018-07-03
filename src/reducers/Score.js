const scoreDefaultState = { 
    score: 0, 
    player: 'Annonymous',
    isOpen: false
 };
export default  (state = scoreDefaultState, action) => {
    console.log(action.type);
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
        default :
            return state;
        
    }
};