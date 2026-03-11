/* két egész szám leg nagyobb közös osztolyát adja vissza*/
//bemenet 2 egés szám kimenet egy szám


import { lnko } from "./fugveny.js";

let eredmeny=lnko(18,3)
console.log(eredmeny)

import { szamjegyekOsszege } from "./fugveny.js";
let eredmeny2=szamjegyekOsszege(1234)
console.log(eredmeny2)

let eredmeny3=szamjegyekOsszege(123)
console.log(eredmeny3)

let eredmeny4=szamjegyekOsszege(12)
console.log(eredmeny4)

let eredmeny5=szamjegyekOsszege(1)
console.log(eredmeny5)

let eredmeny6=szamjegyekOsszege(0)
console.log(eredmeny6)