import * as types  from '../types';

const initialState = {

    hash:null

}


export default (state = initialState ,action) => {

    switch(action.type){

        case types.SAVE_USER_RESULTS :
            let hash_action = action.hash;
         

            if(hash_action !== null){
                console.log("user detaisl1111",hash_action);
                return{
                    ...state ,
                    hash : {...hash_action},
                }
            }else{
                return{
                    ...state ,
                    hash : null,
                }
            }

          
        case types.LOGOUT_USER :
            return {
                ...state,
                hash :action.hash
            }

           default :
           return state;
   

    }




}


