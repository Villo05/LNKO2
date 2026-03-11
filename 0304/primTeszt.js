import { primszam } from "./fugveny.js";


function primszamTeszt(){
    const tesztLista = [
        { n: 0, vart: false, szoveg: "több jegyű számmal" },
        { n: 1, vart: false, szoveg: "páratlan szám " },
        { n: 2, vart: false, szoveg: "páros szám " },
        { n: 5, vart: true, szoveg: "egyjegyű szám " },
        { n: 12, vart: false, szoveg: "nullával" },
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