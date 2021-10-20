import axios from "axios";
import { LIKE_CARD, GET_DATA_SUCCESS, DELETE_CARD } from "../types";

export function userGetDataSuccess(users: any) {
    return {
      type: GET_DATA_SUCCESS,
      users
    }
  }

export function likeUserCard(id: any) {
    return {
      type: LIKE_CARD, 
      payload: id
    }
}

export function deleteUserCard(id: any) {
    return {
        type: DELETE_CARD,
        payload: id
    }
}

export function userGetData() {
    return (dispatch: any) => {
        axios.get("https://reqres.in/api/users?page=1").then((response: any) => {
        if (response && response.data && response.data.data) {
            let users = response.data.data;
            users.forEach((element: any) => {
                element.isLiked = false;
            });
            return users
        }
        }).then((res: any) => { return dispatch(userGetDataSuccess(res))})
        .catch((error: any) => {
            console.log(error)
        });
    }
}
