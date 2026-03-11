import { szamjegyekOsszege } from "./fugveny.js";

function szamjegyekOsszegeTeszt(){
    const tesztLista = [
        { n: 1234, vart: 10, szoveg: "több jegyű számmal" },
        { n: 123, vart: 6, szoveg: "páratlan szám " },
        { n: 12, vart: 3, szoveg: "páros szám " },
        { n: 1, vart: 2, szoveg: "egyjegyű szám " },
        { n: 0, vart: 0, szoveg: "nullával" },
    ];
    for (let i = 0; i < tesztLista.length; i++){
        let eredmeny = szamjegyekOsszege(tesztLista[i].n);
        console.assert(
            eredmeny === tesztLista[i].vart, `n=${tesztLista[i].vart},kapott=${eredmeny}`,
            tesztLista[i].szoveg,
        );
    }
}
szamjegyekOsszege();