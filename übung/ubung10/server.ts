let fallzahlen={
    "BW": {
        "Anzahl": 880657,
        "Differenz_zum_Vortag": 10.598,
        "Faelle_in_den_letzen_7_Tagen": 59.201,
        "7-Tagen_Inzidenz": 533.2,
        "Todesfaelle": 11966
    },
    "Bayern": {
        "Anzahl": 1191561,
        "Differenz_zum_Vortag": 6168,
        "Faelle_in_den_letzen_7_Tagen": 69172,
        "7-Tagen_Inzidenz": 526.4,
        "Todesfaelle": 17.954
    },
    "Berlin": {
        "Anzahl": 285.058,
        "Differenz_zum_Vortag": 308,
        "Faelle_in_den_letzen_7_Tagen": 12508,
        "7-Tagen_Inzidenz": 341.4,
        "Todesfaelle": 3.855
    }
}
//console.log(fallzahlen["BW"]["Anzahl"]);
const stadt:string[]=["BW","Bayern","Berlin"];
let anzahl:number[]=[];
stadt.map(elt=>{
    // @ts-ignore
    anzahl.push(fallzahlen[elt]["Anzahl"]);
})
console.log(anzahl);
const minAnzahl= Math.min(...anzahl);
console.log(minAnzahl);

const maxAnzahl= Math.max(...anzahl);
console.log(maxAnzahl);

let drch=anzahl.reduce((a:number,b:number)=>a+b,0)/anzahl.length;
console.log(drch);

const sumAnzahl= (a:number,b:number)=>a+b;
console.log(anzahl.reduce(sumAnzahl));