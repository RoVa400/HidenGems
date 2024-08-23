import {combineReducers} from 'redux';

const initialState = {
  player: null,
  players: null,
};

const player = (state = initialState.player, action) => {

}

const players = (state = initialState.player, action) => {

}

const reducer = combineReducers({
  player,
  players,
});

export default reducer;
