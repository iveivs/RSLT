import { ACTION_TYPE } from "./action-type";
import { server } from "../bff";

export const logout = () => { 
    server
    return {
        type: ACTION_TYPE.LOGOUT,
    }
    
}