import { lnko } from "./fugveny.js";

function lnkoTest() {
  let a = 18;
  let b = 3;
  let eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 3,
    ` a=${a}, b=${b}, elvárt=3, kapott=${eredmeny}`,
  );

  /*a nem töbszörse b-nek. de az lnko >1 24,18*/
  a = 24;
  b = 18;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 6,
    ` a=${a}, b=${b}, elvárt=6, kapott=${eredmeny}`,
    "az a nem töbszörse b-nek. de az lnko >1,",
  );

  // loko=1 , de egygik szám sem prim,relatív prímek
  a = 8;
  b = 15;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 1,
    ` a=${a}, b=${b}, elvárt=1, kapott=${eredmeny}`,
    "az a nem töbszörse b-nek. de az lnko =1,",
  );

  //két prím
  a = 13;
  b = 17;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 1,
    ` a=${a}, b=${b}, elvárt=1, kapott=${eredmeny}`,
    "az a nem töbszörse b-nek. de az lnko =1,",
  );

  //két egyenlő szám
  a = 12;
  b = 12;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 12,
    ` a=${a}, b=${b}, elvárt=12, kapott=${eredmeny}`,
    "az a nem töbszörse b-nek. de az lnko =12,",
  );

  //két negatív szám
  a = -24;
  b = -18;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 6,
    ` a=${a}, b=${b}, elvárt=6, kapott=${eredmeny}`,
    "az a nem töbszörse b-nek. de az lnko >1,",
  );

  //eggyik pozitív a másik negatív
  a = -24;
  b = 18;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 6,
    ` a=${a}, b=${b}, elvárt=6, kapott=${eredmeny}`,
    "az a nem töbszörse b-nek. de az lnko >1,",
  );
}
lnkoTest();

function lnkoTest2() {
  const testEsetlista = [
    {
      a: 18,
      b: 3, elvart: 3, 
      szoveg: "a töbszörse b-nek" 
    },
    { 
      a: 24, 
      b: 18, 
      elvart: 6, 
      szoveg: "a nem töbszörse b-nek. de az lnko >1" 
    },
    {
      a: 8,
      b: 15,
      elvart: 1,
      szoveg: "az a nem töbszörse b-nek. de az lnko =1",
    },
    {
      a: 13,
      b: 17,
      elvart: 1,
      szoveg: "az a nem töbszörse b-nek. de az lnko =1",
    },
    {
      a: 12,
      b: 12,
      elvart: 12,
      szoveg: "az a nem töbszörse b-nek. de az lnko =12",
    },
    {
      a: -24,
      b: -18,
      elvart: 6,
      szoveg: "az a nem töbszörse b-nek. de az lnko >1",
    },
  ];
  for (let i = 0; i < testEsetlista.length; i++) {
    let eredmeny = lnko(testEsetlista[i].a, testEsetlista[i].b);
    console.assert(
      eredmeny === testEsetlista[i].elvart,
      ` a=${testEsetlista[i].a}, b=${testEsetlista[i].b}, elvárt=${testEsetlista[i].elvart}, kapott=${eredmeny}`,
      testEsetlista[i].szoveg,
    );
  }
}
lnkoTest2();


