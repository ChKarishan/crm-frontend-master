//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";
import API from "../../../common/data/FatchData";


import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from './reducer';

// const fireBaseBackend = getFirebaseBackend();

export const loginUser = (user, history) => async (dispatch) => {
  try {
    let data;
    var status;
    var token;
    var name;
    var dataa;
   
    // console.log(`user data ${user.email}`);
    dataa = await API.postUserLogin(user).then((response) =>{
          console.log(`response data ${response.data}`);
          token = response.data.token;
          status = response.data.status;

           data = {"status" :  response.data.status, 
          "token" : response.data.token,
            "data" : {
                "first_name" : "bilal"
            } 
        };


        }).catch((error)=>{});


     


       
    
   
    // if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
    //   let fireBaseBackend = getFirebaseBackend();
    //   response = fireBaseBackend.loginUser(
    //     user.email,
    //     user.password
    //   );
    // } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
    //   response = postJwtLogin({
    //     email: user.email,
    //     password: user.password
    //   });

    // } else if (process.env.REACT_APP_API_URL) {
    //   response = postFakeLogin({
    //     email: user.email,
    //     password: user.password,
    //   });
    // }

    //   var datas = await dataa;
  
     console.log(data);

    if (data) {
      localStorage.setItem("token", data.token);

      sessionStorage.setItem("authUser", JSON.stringify(data));
      if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
        var finallogin = JSON.stringify(data);
        finallogin = JSON.parse(finallogin)
        data = finallogin.data;
         if (finallogin.status === "success") {
          // if ("success" === "success") {
            dispatch(loginSuccess(data));
          history('/dashboard')
        } else {
          dispatch(apiError(finallogin));
        }
      } else {
        dispatch(loginSuccess(data));
        history('/dashboard')
      }
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("authUser");
    let fireBaseBackend = getFirebaseBackend();
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = fireBaseBackend.logout;
      dispatch(logoutUserSuccess(response));
    } else {
      dispatch(logoutUserSuccess(true));
    }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const socialLogin = (type, history) => async (dispatch) => {
  try {
    let response;

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.socialLoginUser(type);
    }
    //  else {
      //   response = postSocialLogin(data);
      // }
      
      const socialdata = await response;
    if (socialdata) {
      sessionStorage.setItem("authUser", JSON.stringify(response));
      dispatch(loginSuccess(response));
      history('/dashboard')
    }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginFlag = () => async (dispatch) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};