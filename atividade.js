
let cabra = c;

let lobo = l;

let alfafa = a;

let homem = h;



h += c; // O Homem leva a cabra, deixando apenas o lobo e a alfafa

c -= h; // O Homem deixa a cabra do outro lado, e volta

h += a - c; // O homem leva o maço de alfafa

a -= h - c; // O homem volta com a cabra, deixando apenas a alfafa

h += l - c; //O homem pega o lobo para o outro lado, e deixa a cabra

h -= l + a; // Homem deixa o lobo e a alfafa e volta para buscar a cabra

h += c + l + a; // Após o homem voltar, todos ficam juntos



let todos = h + c + l + a;