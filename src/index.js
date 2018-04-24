/** JS */
import "../build/tags";
import store from "./store";
import * as funcoesAuxiliares from "./funcoes-auxiliares";
import * as handlers from "./handlers";

/* Mixins */
// import "./componentes/navbar-ipeadata/navbar-ipeadata-mixins";

/** CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";

/* Executar */
const reduxGlobal = { ...store, ...funcoesAuxiliares, ...handlers };
riot.mixin("reduxGlobal", reduxGlobal);
riot.mount("#view", "app");
