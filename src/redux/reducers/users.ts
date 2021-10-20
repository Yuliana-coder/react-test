import { GET_DATA_SUCCESS, LIKE_CARD, DELETE_CARD } from "../types";

export function info (state: any = {users: [], likedUsers: []}, action: any) {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {users: action.users, likedUsers: [...action.users].filter((item: any) => { return item.isLiked })};
        case LIKE_CARD:
            let newUsers: any = [...state.users];
            let user = newUsers.find((item: any) => { return item.id ===  action.payload});      
            user.isLiked = !user.isLiked;
            return {users: newUsers, likedUsers: [...newUsers].filter((item: any) => { return item.isLiked}) };
        case DELETE_CARD:
            return {users: [...state.users].filter((item: any) => { return item.id != action.payload}), likedUsers: [...state.users].filter((item: any) => { return item.isLiked && item.id != action.payload}) };
        default:
            return state;
    }
}
