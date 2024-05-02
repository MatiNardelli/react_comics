import { types } from "../types/types";

// reducer se destina a funciones puras sin llamar a otras. No se agrega otras funciones.

export const authReducer = (state={},action) => {
    switch (action.type) {
        case types.login:            
            return {
                ...state,
                logged:true,
                user:action.payload
            };

        case types.logout:
            
            return {
                logged: false,
            };
    
        default:
            return state;
    }
}