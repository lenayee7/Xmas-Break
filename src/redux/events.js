import * as ActionTypes from './ActionTypes';
import { EVENTS } from '../shared/events';

export const Events = (state = {
    isLoading: true,
    errMess: null,
    events: EVENTS
}, action) => {

    switch (action.type) {
    case ActionTypes.ADD_EVENTS:
        return {...state, isLoading: false, errMess: null, events: action.payload};
    case ActionTypes.EVENTS_LOADING:
        return {...state, isLoading: true, errMess: null, events: []};
    case ActionTypes.EVENTS_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
    }
};