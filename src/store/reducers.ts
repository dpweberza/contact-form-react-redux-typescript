import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactform from './reducers/contactform';

const rootReducer = combineReducers({
    contactform,
    form: formReducer
});

export default rootReducer;