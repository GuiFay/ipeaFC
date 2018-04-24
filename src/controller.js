import * as sagasAux from "./sagas-auxiliares";
import * as funcoesAux from "./funcoes-auxiliares";
import store from "./store";

//controller usado para teste
export function* home(payload) {
  yield put({ type: "HOME_ON" });
}

export function* mapaController(payload) {
  yield put({ type: "HOME_OFF" });
}
