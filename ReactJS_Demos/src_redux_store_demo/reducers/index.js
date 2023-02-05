
import changeTheNumber from './UpDownReducer'

import {combineReducers} from "redux";


const  rootReducer = combineReducers({ changeTheNumber })  // here changeTheNumber is a reducer func

export default rootReducer;