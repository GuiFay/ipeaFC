import store from "./store";

export function hendleplacargeral(e) {
    e.preventDefault();

    const novaRota = {
        parametros: "placar-geral",
        query: {
            // territoriality
        }
    };
    route(
        `${novaRota.parametros}?${queryString.stringify(novaRota.query, {
      encode: false
    })}`
    );
}

export function hendlehome(e) {
    e.preventDefault();

    const novaRota = {
        parametros: "",
        query: {
            // territoriality
        }
    };
    route(
        `${novaRota.parametros}?${queryString.stringify(novaRota.query, {
      encode: false
    })}`
    );
}