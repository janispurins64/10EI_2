var dzi = 6;
var dzi_cur = 6;
const t_laiks = 100;
var laiks2;
var t;
var pu = 0;
//Izsaucam sākuma funkcijas
window.onload = () => {
    dzivibas(dzi);
    poguBurti();
    // Izvēlēsimies melējamo burtu
    const mekleBurts = document.querySelector(".mekle-burtu");
    let g_index = parseInt(Math.random() * 8)+1;
    console.log(g_index);
    const meklePogu1 = document.querySelector('#p'+String(g_index));
    mekleBurts.innerHTML = meklePogu1.innerHTML;
    //Meklējam taimera rāmi
    const taimeraramis = document.querySelector(".taimeris");
    taimeraramis.innerHTML = String(laiks2);
    laiks2 = t_laiks;
    t = setInterval(taimeraApstrade, 100);
}
//Taimera notikuma apstrāde
function taimeraApstrade() {
    laiks2--;
    const taimeraramis = document.querySelector(".taimeris");
    taimeraramis.innerHTML = String(laiks2);
    if(laiks2==0) {
        clearInterval(t);
        alert("Spēle beigusies!!!!");
    }
}
//Pogu nosaukumi
const poguBurti = () => {    
    for(let i=0;i<9;i=i+1)
    {
        const meklePogu1 = document.querySelector('#p'+String(i+1));
        meklePogu1.innerHTML = ranBurts();
    }
}

//Funkcija pogu ģenerēšanai
//Pogu masīva izveide
const visasPogas = () =>{
    for(let i=0; i<32; i++) jaunaPoga(i);
}
//Gadījuma burts
const ranBurts = () =>{
    // Ģenerēsim gadījuma burtu
    const burti ="ABCDEFGHIJKLMNOPSTRUVZ"; //22
    return burti[Math.floor(Math.random() * 22)];
}


//Vienas pogas izveide
const jaunaPoga = (i) => {
    const poguRamis = document.querySelector(".pogas-pogas");
    let jaunaPoga1 = document.createElement("button");
    jaunaPoga1.setAttribute("class","poga1");
    let p_id = "poga"+String(i);
    jaunaPoga1.setAttribute("id",p_id);
    jaunaPoga1.innerHTML=ranBurts();
    jaunaPoga1.onclick=(evt)=>clickPoga();
    poguRamis.appendChild(jaunaPoga1);
}

//Pogas notikuma onclick apstrāde
const clickPoga = () => {
    const nosPoga = document.querySelector("#poga1");
    nosPoga.setAttribute("class","nospiesta-poga")
}
//Pogas notikuma onclick apstrāde
const clickPoga2 = (p_id) => {
    const nosPoga = document.querySelector("#"+p_id);
    
    let burts = nosPoga.innerHTML
    //Kuru burtu meklējam
    const mBurts = document.querySelector(".mekle-burtu");
    let m_bu = mBurts.innerHTML
    
    
    const dzivibuRamis = document.querySelector(".dziviba");
    let bernu_skaits = dzivibuRamis.childElementCount 
    if(burts!=m_bu){
        dzivibuRamis.removeChild(dzivibuRamis.firstChild);
        console.log("Dzēšam dzīvību");
        console.log("Skaits:");
        console.log(bernu_skaits);
        nosPoga.setAttribute("class","slikta-poga");
        pu = pu - 5;
        const punkturamis = document.querySelector(".punkti");
        punkturamis.innerHTML = "Punkti: " + String(pu);                   
    }
    else {
        console.log("Skaits:");
        console.log(bernu_skaits);
        nosPoga.setAttribute("class","nospiesta-poga"); 
        pu = pu + 30;
        const punkturamis = document.querySelector(".punkti");
        punkturamis.innerHTML = "Punkti: " + String(pu);  
    }


}
//Vienas dzīvības izveide
const vienaDz = () => {
    const dzivibuRamis = document.querySelector(".dziviba");
    let jaunaDz = document.createElement("img");
    jaunaDz.setAttribute("src","sirds.png");
    jaunaDz.setAttribute("alt","Sirds");
    jaunaDz.setAttribute("width","20");
    jaunaDz.setAttribute("height","20");
    dzivibuRamis.appendChild(jaunaDz);
}


//Dzīvību izveide
const dzivibas = (i) => {
    for(let j=0; j<i;j++)  vienaDz();
}