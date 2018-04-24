import rootReducer from "./root-reducer"
import rootSaga from "./root-saga-router"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
