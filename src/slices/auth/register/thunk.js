//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeRegister,
  postJwtRegister,
} from "../../../helpers/fakebackend_helper";

import API from "../../../common/data/FatchData";
// action
import {
  registerUserSuccessful,
  registerUserFailed,
  resetRegisterFlagChange,
  apiErrorChange
} from "./reducer";

// initialize relavant method of both Auth
const fireBaseBackend = getFirebaseBackend();

// Is user register successfull then direct plot user in redux.
export const registerUser = (user) => async (dispatch) => {
  try {
    var response = 5;
    var dataa;
    var message;

    console.log(user);

    console.log(`user=====> reg ${user}`);

    dataa = await API.postUserRegister(user).then((response) =>{
      console.log(`response data is ${response.data}`);
      message = response.data.message;
    

      


    }).catch((error)=>{});



    if (message === "User registered successfully") {
    //   response = fireBaseBackend.registerUser(user.email, user.password);
    //   // yield put(registerUserSuccessful(response));
    // } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
    //   response = postJwtRegister('/post-jwt-register', user);
    //   // yield put(registerUserSuccessful(response));
    // } else if (process.env.REACT_APP_API_URL) {
    //   response = postFakeRegister(user);
    //   const data = await response;

    // if(){


      if (data.message === "success") {
        dispatch(registerUserSuccessful(data));
      } else {
        dispatch(registerUserFailed(data));
      }
    }
  } catch (error) {
    dispatch(registerUserFailed(error));
  }
};

export const resetRegisterFlag = () => {
  try {
    const response = resetRegisterFlagChange();
    return response;
  } catch (error) {
    return error;
  }
};

export const apiError = () => {
  try {
    const response = apiErrorChange();
    return response;
  } catch (error) {
    return error;
  }
};