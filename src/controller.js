import * as sagasAux from "./sagas-auxiliares";
import * as funcoesAux from "./funcoes-auxiliares";
import store from "./store";

//controller usado para teste
export function* home(payload) {
    yield put({ type: "HOME_ON" });
    yield put({ type: "PLACAR_GERAL_OFF" });
}

export function* placargeral(payload) {
    yield put({ type: "HOME_OFF" });
    yield put({ type: "PLACAR_GERAL_ON" });

    const base_url_api = "https://api.cartolafc.globo.com/time/slug";

    const slug = "guifay-fc";
    const rodada = 2;

    //Pega dados do jogador da API do cartola
    //TODO: TA DANDO PROBLEMA DE CORS
    const dadosTimeURL = `${base_url_api}/${slug}/${rodada}`;
    let dadosTime = yield call(axios.get, dadosTimeURL);
    dadosTime = dadosTime.data.value[0];
    console.log(dadosTime);
    yield put({ type: "DADOS_TIME", payload: dadosTime });
}