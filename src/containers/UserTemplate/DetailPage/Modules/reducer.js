import * as ActionType from "./constant";

const detailState = {
    // scheduleTime: [],
    // fromDate: null,
    // toDate: null,
    // fromTime: null,
    // toTime: null,
    // yardCheck: null,
    data: null,
    loading: null,
    err: null,
}

const detailReducer = (state = detailState, action)=>{
    switch (action.type) {
        case ActionType.STORE_CHOOSE:
            state = action.payload;
            return {...state};
    
        default:
            return state;
    }
}

export {detailReducer}