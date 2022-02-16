/* 검색 요청시 실행할 액션 */
export const SEARCH_USERS_REQ = "SEARCH_USERS_REQ";
/* 검색 성공시 실행할 액션 */
export const SEARCH_USERS_SUCCESS = "SEARCH_USERS_SUCCESS";
/* 검색 실패시 실행할 액션 */
export const SEARCH_USERS_FAIL = "SEARCH_USERS_FAIL";

export const searchUsersReq = (params) => {
    /* 검색 요청시 params로 검색 조건을 전달하는 액션함수 */
    return {
        type: SEARCH_USERS_REQ,
        params
    }
}

export const searchUsersSuccess = (data) => {
    /* 검색 성공시 결과를 data로 전달하여, 전역상태인 userList를 변환하는 액션함수 */
    return {
        type: SEARCH_USERS_SUCCESS,
        data
    }
}

export const searchUsersFail = (error) => {
    /* 검색 실패시 에러를 전달하는 액션함수 */
    return {
        type: SEARCH_USERS_FAIL,
        error
    }
}