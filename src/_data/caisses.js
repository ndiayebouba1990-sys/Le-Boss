// Points de service disposant d'une page dédiée (référencement local) :
// toutes les entrées de agences.json marquées « page: true ».
import fs from "node:fs";

export default function () {
  const donnees = JSON.parse(fs.readFileSync(new URL("./agences.json", import.meta.url), "utf8"));
  return donnees.liste.filter((point) => point.page);
}
