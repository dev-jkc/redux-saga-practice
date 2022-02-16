import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { reducers, rootSaga } from './reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// 사가 미들웨어를 생성한다.
const sagaMiddleware = createSagaMiddleware();
// 스토어에 사가 미들웨어 연결 >> applyMiddleware함수를 사용한다.
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// 사가 미들웨어에서 통합 사가 함수를 실행시킨다.
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
