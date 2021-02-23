const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


// ====================================  For contact popup



function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
    // For Full name
    var nametxt= document.getElementById("name").value,
        shownametxt= document.getElementById("nametxt");
         shownametxt.textContent="Your name is: "+nametxt;
    // For email
    var nametxt= document.getElementById("email").value,
         shownametxt= document.getElementById("emailtxt");
          shownametxt.textContent="Your Email is: "+nametxt; 
    // For Phone
    var nametxt= document.getElementById("phone").value,
          shownametxt= document.getElementById("phonetxt");
           shownametxt.textContent="Your Phone is: "+nametxt;    
    // For msg
    var nametxt= document.getElementById("msg").value,
          shownametxt= document.getElementById("msgtxt");
           shownametxt.textContent="Your Msg is: "+nametxt;       
          
  }




// ====================================



var boitevitesse

var formulaire = document.querySelector(".formulaire");

function myliste() {

    var i = formulaire.vehicule.selectedIndex;

    for (j = 1; j < 5; j++)
     formulaire.carburant.options[j].text = "";



    if (i == 0) {
        for (j = 1; j < 4; j++) 
         formulaire.carburant.options[j].text = "";

    } else {
        switch (i) {
            case 1:
                var v = new Array("Electrique", "Essence");
                boitevitesse = 0;

                break;

            case 2:
                var v = new Array("Hybride", "Essence", "Diesel");
                boitevitesse = 0;
                break;
            case 3:
                var v = new Array("Electrique", "Hybride", "Essence", "Diesel");
                boitevitesse = 0;
                break;
            case 4:
                var v = new Array("Hybride", "Essence", "Diesel");
                boitevitesse = 0.19;
                break;
            case 5:
                var v = new Array("Diesel");
                boitevitesse = 0;
                break;
            case 6:
                var v = new Array("Essence", "Diesel");
                boitevitesse = 0;
                break;
            case 7:
                var v = new Array("Diesel");
                boitevitesse = 0.19;
                break;

        }

        for (k = 0; k < v.length; k++)
            formulaire.carburant.options[k + 1].text = v[k];
    }


}


function calcule() {
    var i = formulaire.vehicule.selectedIndex;
    var tarifcarburant, tarif;
    var jour = Number(document.querySelector(".jours").value);

    switch (i) {

        case 1:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 10;
            if (p == 1) {
                tarifcarburant = 0.05;

            } else {
                tarifcarburant = 0.14;
            }
            break;

        case 2:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 14;
            if (p == 1) {
                tarifcarburant = 0.09;

            } else if (p == 2) {
                tarifcarburant = 0.14;
            } else {
                tarifcarburant = 0.21;
            }
            break;

        case 3:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 12;
            if (p == 1) {
                tarifcarburant = 0.05;

            } else if (p == 2) {
                tarifcarburant = 0.09;
            } else {
                tarifcarburant = 0.14;
            }
            break;

        case 4:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 20;
            if (p == 1) {
                tarifcarburant = 0.09;

            } else if (p == 2) {
                tarifcarburant = 0.14;
            } else {
                tarifcarburant = 0.21;
            }
            break;

        case 5:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 16;
            tarifcarburant = 0.21;

            break;
        case 6:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 900;
            if (p == 1) {
                tarifcarburant = 0.14;
            } else {
                tarifcarburant = 0.21;
            }
            break;

        case 7:
            var p = formulaire.carburant.selectedIndex;
            if (p == 0) break;
            tarif = 250;
            tarifcarburant = 0.21;

            break;

    }

    prixTotal = ((boitevitesse + tarifcarburant) * tarif + tarif) * jour;
    document.querySelector("#test").innerHTML = "The Price is :" + "  " + prixTotal + "   " + "$";
}
















//   =================================================

// function liste(){
//     var i=formulaire.type.selectedIndex;

// if(i==0){
//     for(j=1; j<i.length; j++)
//     formulaire.energy.options[j].text="";
// }    
// else{
//     switch(i)
//     {
//         case 1 : var vi =new Array("Electrique","Essence","",""); break;
//         case 2 : var vi =new Array("Electrique","Hybride","Essence","diesel"); break;
//         case 3 : var vi =new Array("Hybride","Essence","diesel",""); break;
//         case 4 : var vi =new Array("Hybride","Essence","diesel",""); break;
//         case 5 : var vi =new Array("diesel","","",""); break;
//         case 6 : var vi =new Array("diesel","Essence","",""); break;
//         case 7 : var vi =new Array("diesel","","",""); break;
//     }
//     for(k =0;k<4;k++)
//     formulaire.energy.options[k].text=vi[k];
    
// }
// formulaire.energy.selectedIndex=0;
// }

// if(i==1 && vi[0]){
//     alert("hiiiii");
// }

