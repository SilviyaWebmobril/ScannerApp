import * as types  from '../types';

const initialState = {

    loading:false

}


export default (state = initialState ,action) => {

    switch(action.type){

        case types.LOADING :
           return{
               ...state ,
               loading : action.isLoading,
           }

           default :
           return state;
   

    }




}


