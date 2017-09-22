import {combineReducers} from 'redux';
import reducer from './reducer'
const allReducers = combineReducers({
    signin:()=> {
        return {

        }


    },
    appreducer : reducer

});


export default allReducers;