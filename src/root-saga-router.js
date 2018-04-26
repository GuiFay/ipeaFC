import catchErrors from "./error-handler";
import store from "./store";
import * as appController from "./controller";

const executarRoute = (...parametros) => {
    const query = route.query();

    //Se query for objeto vazio: retorna parametros original
    // Se tiver query: remove ultimo item do parametros (que eh a query)
    if (Object.keys(query).length !== 0) {
        // const ultimoItem = parametros.pop()
        parametros.pop();
    }

    store.dispatch({
        type: "ROUTE",
        payload: {
            parametros,
            query
        }
    });
};

route.base("#/");
route(executarRoute);
route.start(true);

function* handleRoute(action) {
    switch (action.payload.parametros[0]) {
        case "":
            {
                yield call(appController.home, action.payload);
                break;
            }
        case "placar-geral":
            {
                yield call(appController.placargeral, action.payload);
                break;
            }
        default:
            {
                throw 404;
            }
    }
}

export default function* rootSaga() {
    yield takeEvery("ROUTE", catchErrors, handleRoute);
}