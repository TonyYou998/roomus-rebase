import * as ActionType from "./constant";

export const actStoreChoose=(data)=>{
    return {
        type:ActionType.STORE_CHOOSE,
        payload:data
    }
}