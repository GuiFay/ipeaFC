export default function* catchErrors(fn, ...args) {
  try {
    yield* fn(...args);
  } catch (err) {
    let numbError = parseInt(
      err
        .toString()
        .match(/\d/g)
        .join("")
    );
    if (numbError === 502) {
      console.log("Erro de proxy");
    }
    console.log("Erro do handler: ", err.toString());
  }
}
