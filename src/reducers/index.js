import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import userReducer from "./user/reducer";
import userSaga from "./user/saga";

export const reducers = combineReducers({
    userReducer
})

// redux-saga함수를 작성할 때에는 *를 붙여서 제너레이터 함수로 만든다.
export function* rootSaga() {
    // fork함수는 call함수와 다르게 비동기로 함수를 실행한다.
    // 아래처럼 작성하면 최종적으로 redux-saga함수를 작성한 것이다. 이후, 미들웨어에 연결하면 된다.
    yield all([fork(userSaga)])
}