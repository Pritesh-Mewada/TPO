import  Axios from 'axios';


export  const AuthSuccess = (user)=>{


    return {
        type: 'SIGN_IN_SUCCESS',
        payload: user
    }

}

export const authentication  = (user) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    var apiUrl = "http://localhost:8080/auth";
    return (dispatch) => {
        // Returns a promise
        return Axios.post(apiUrl,user)
            .then(response => {
                // Dispatch another action
                // to consume data
                dispatch(AuthSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

