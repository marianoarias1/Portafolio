import { TOGGLE_MOBILE } from "./mobileActions";

const INITIAL_STATE={
    visibleMobile: false,
};

export const mobileReducer=(state=INITIAL_STATE, action)=>{
    const {type, payload}= action

    switch(type){
        case TOGGLE_MOBILE:
            return{
                ...state,
                visibleMobile: !state.visibleMobile
            }
        default:
            return state
    }
}