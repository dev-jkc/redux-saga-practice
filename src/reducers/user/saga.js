import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { SEARCH_USERS_FAIL, SEARCH_USERS_REQ, SEARCH_USERS_SUCCESS } from "./action";

function getUsers(params = "") {
    // api 호출을 위해서 axios 패키지 다운로드
    // 서버에서 요청한 users api를 호출하기 위해 해당 주소를 가져오고, 
    // params를 합쳐서 필터링되게 설정한다.(검색)
    return axios.get("http://localhost:8080/users" + params)
}

// 사용자 검색 액션 요청에 따라 실행될 함수로, 액션을 dispatch()해서 api를 호출한 후, 결과를 전송할 것이다.
function* searchRequest(action) {
    // call을 이용하여 api를 호출한다. (call은 함수를 동기적으로 실행해준다.)
    // getUsers함수를 호출하고 SEARCH_USERS_REQ액션 실행시 전달되는 params를 getUsers함수로 넘긴다.
    const userData = yield call(getUsers, action.params);

    try {
        // 검색 성공시, SEARCH_USERS_SUCCESS액션을 디스패치하여 유저데이터를 넘긴다.
        yield put({ type: SEARCH_USERS_SUCCESS, data: userData.data })
    } catch (error) {
        // 검색 실패시, SEARCH_USERS_FAIL을 디스패치하여 에러를 넘긴다.
        yield put({ type: SEARCH_USERS_FAIL, data: error.response.data })
    }
}

// SEARCH_USERS_REQ액션을 감지하는 함수를 userSaga에 세팅해야한다.
function* waitSearchReq() {
    // yield는 다음 동작을 제어하는 의미를 가진 키워드이다.(ES6문법)
    // takeLatest()는 가장 마지막에 실행된 액션을 감지하는 함수이다.
    yield takeLatest(SEARCH_USERS_REQ, searchRequest)
}

// userSaga를 작성한 후에는 액션을 리슨(액션이 실행됨을 감지)하는 함수를 만든다.
export default function* userSaga() {
    // all 함수는 내부별에 등록된 redux-saga 함수를 redux-saga 미들웨어에 등록하는 부수효과 함수이다.
    // 아래처럼 세팅이 완료되었으므로, rootSaga 함수에 세팅해야한다.
    yield all([waitSearchReq()])
}