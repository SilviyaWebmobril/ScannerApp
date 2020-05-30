import * as types  from '../types';
import Axios from 'axios';
import ApiUrl from '../../ApiUrl';
import { Platform } from 'react-native';

export const submitAccount = (username,email, mobile,password) => dispatch => 
    new Promise((resolve , reject) => {

        dispatch({
            type: types.LOADING,
            isLoading:true
        });


        let formdata = new FormData();
        formdata.append("name",username);
        formdata.append("email",email);
        formdata.append("password",password);
        formdata.append("mobile",mobile);
        formdata.append("confirm_password",password);
        formdata.append("device_type", Platform.OS == 'android' ? 1 : 2);
        formdata.append("device_token","hcvdfjbfgnkhgkhjhhgkkvgccgdBAJFGLGMDLMNB");
        console.log("formdata",formdata);
        
        Axios.post(ApiUrl.base_url+ApiUrl.signup,formdata)
            .then(response => {

                console.log(response.data);

                dispatch({
                    type: types.LOADING,
                    isLoading:false
                });

              
                if(response.data.error == "false"){
                    // dispatch({
                    //     type:types.SAVE_USER_RESULTS,
                    //     user:response.data.result
                    // })
                }

                resolve(response)

            })
            .catch(error => {

                console.log("error",error);

                dispatch({
                    type: types.LOADING,
                    isLoading:false
                });

                reject(error)

            })

    })



export const submitLogin = (email, password) => dispatch => 
    new Promise((resolve ,reject) =>{

        dispatch({
            type: types.LOADING,
            isLoading:true
        });


       let formdata = {
           "email" : email,
           "pass" :password
       };

       console.log(formdata);

        Axios.post(ApiUrl.base_url+ApiUrl.login,formdata)
            .then(response => {

                dispatch({
                    type: types.LOADING,
                    isLoading:false
                });

                console.log("hi1",response.data);

                if(response.data.success){
                    console.log("hi")

                    dispatch({
                        type:types.SAVE_USER_RESULTS,
                        hash:response.data.hash
                    })

                }

                resolve(response);

            })
            .catch(error => {

                dispatch({
                    type: types.LOADING,
                    isLoading:false
                });

                reject(error);
            })

    })




export const editUserProfile = (name,email, mobile) => dispatch => 
new Promise((resolve ,reject) =>{

    dispatch({
        type: types.LOADING,
        isLoading:true
    });


    let formdata = new FormData();
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("mobile",mobile);
    formdata.append("device_type", Platform.OS == 'android' ? 1 : 2);
    formdata.append("device_token","hcvdfjbfgnkhgkhjhhgkkvgccgdBAJFGLGMDLMNB");

    console.log("formdata",formdata);

    Axios.post(ApiUrl.base_url+ApiUrl.updateProfile,formdata)
        .then(response => {

            dispatch({
                type: types.LOADING,
                isLoading:false
            });

            console.log("hi1",response.data);

            if(response.data.status ==  "SUCCESS"){
                console.log("hi")

                dispatch({
                    type:types.SAVE_USER_RESULTS,
                    user:response.data.updatedUser[0]
                })

            }

            resolve(response);

        })
        .catch(error => {

            dispatch({
                type: types.LOADING,
                isLoading:false
            });

            reject(error);
        })

})


export const getAsyncStorage = (user) => {

    return {
        type:types.SAVE_USER_RESULTS,
        hash:user
    }

}

export const onLogoutUser = () => {

    return {
        type:types.LOGOUT_USER,
        hash:null
    }
}

export const saveUserResult = (user) => {

    return {
        type:types.SAVE_USER_RESULTS,
        hash:user
    }
}