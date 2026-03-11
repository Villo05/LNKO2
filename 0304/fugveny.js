export function lnko(a,b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a
}





export function szamjegyekOsszege(n){
  let z = 0;
  while (n > 0){
    let c = n % 10;
    z = z+ c;
    n = Math.floor(n/10);
  }
  return z;
}

export function primszam(szam){
  let i = 2;
  while (i <= Math.sqrt(szam) && szam % i !== 0){
    i++;
  }
  return i > Math.sqrt(szam);
}