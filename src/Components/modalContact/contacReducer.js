import { TOGGLE_VISIBLE } from "./contactActions";

const INITIAL_STATE={
    visible:false,
};

export const contactReducer=(state=INITIAL_STATE, action)=>{
    const {type, payload}=action;

    switch(type){
        case TOGGLE_VISIBLE:
            return{
                ...state,
                visible: !state.visible

            }
        default:
            return state;
    }
}