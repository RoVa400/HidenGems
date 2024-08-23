import {combineReducers} from 'redux';

import player from '../modules/player';

const rootReducer = combineReducers({
  player: player.reducer,
});

export default rootReducer;
