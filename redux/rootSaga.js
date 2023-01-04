// component pour combiner les middlewares sagaMiddleware
// ici nous passons nos sagas au redux store
// all = pour avoir des resultat en parallèle et call pour appeler des async fonction
import { all, call } from 'redux-saga/effects';
import productListSagas from './productList/productList.saga';

export default function* rootSaga() {
    yield all([
        call(productListSagas)
    ])
}