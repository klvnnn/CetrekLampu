function saklartamu() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    
    
    if (toggle1.checked){
        //Nyala
        lampu1.src = "assets/images/on.gif";
    }else{
        //Mati
        lampu1.src = "assets/images/off.gif";
    }
    if (toggle2.checked){
        //Nyala
        lampu2.src = "assets/images/on.gif";
    }else{
        //Mati
        lampu2.src = "assets/images/off.gif";
    }
    if (toggle3.checked){
        //Nyala
        lampu3.src = "assets/images/on.gif";
    }else{
        //Mati
        lampu3.src = "assets/images/off.gif";
    }
    if (toggle4.checked) {
        //Nyala
        lampu4.src = "assets/images/on.gif";
    } else {
        //Mati
        lampu4.src = "assets/images/off.gif";
    }
    
    
}

function saklarutamatamu(){
    let toggletamu = document.getElementById("default-toggletamu");

    if (toggletamu.checked) {
        lampu1.src = "assets/images/on.gif";
        lampu2.src = "assets/images/on.gif";
        lampu3.src = "assets/images/on.gif";
        lampu4.src = "assets/images/on.gif";
    } else {
        lampu1.src = "assets/images/off.gif";
        lampu2.src = "assets/images/off.gif";
        lampu3.src = "assets/images/off.gif";
        lampu4.src = "assets/images/off.gif";
    }
}


function saklartidur(){
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");

    let lampu5 = document.getElementById("lampu5");
    let lampu6 = document.getElementById("lampu6");

    if (toggle5.checked) {
        //Nyala
        lampu5.src = "assets/images/on.gif";
    } else {
        //Mati
        lampu5.src = "assets/images/off.gif";
    }
    if (toggle6.checked) {
        //Nyala
        lampu6.src = "assets/images/on.gif";
    } else {
        //Mati
        lampu6.src = "assets/images/off.gif";
    }
    
}

function saklarutamatidur(){
    let toggletidur = document.getElementById("default-toggletidur");

    if (toggletidur.checked) {
        lampu5.src = "assets/images/on.gif";
        lampu6.src = "assets/images/on.gif";
        
    } else {
        lampu5.src = "assets/images/off.gif";
        lampu6.src = "assets/images/off.gif";
    }
}

function saklarmakan(){
    let toggle7 = document.getElementById("default-toggle7");

    let lampu7 = document.getElementById("lampu7");

    if (toggle7.checked) {
        //Nyala
        lampu7.src = "assets/images/on.gif";
    } else {
        //Mati
        lampu7.src = "assets/images/off.gif";
    }
}

function saklarkeluarga(){
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");

    let lampu8 = document.getElementById("lampu8");
    let lampu9 = document.getElementById("lampu9");
    let lampu10 = document.getElementById("lampu10");

    if (toggle8.checked) {
        //Nyala
        lampu8.src = "assets/images/on.gif";
    } else {
        //Mati
        lampu8.src = "assets/images/off.gif";
    }
    if (toggle9.checked) {
        //Nyala
        lampu9.src = "assets/images/on.gif";
    } else {
        //Mati
        lampu9.src = "assets/images/off.gif";
    }
    if (toggle10.checked) {
        //Nyala
        lampu10.src = "assets/images/on.gif";
    } else {
        //Mati
        lampu10.src = "assets/images/off.gif";
    }

}

function saklarutamakeluarga() {
    let togglekeluarga = document.getElementById("default-togglekeluarga");

    if (togglekeluarga.checked) {
        lampu8.src = "assets/images/on.gif";
        lampu9.src = "assets/images/on.gif";
        lampu10.src = "assets/images/on.gif";
        
    } else {
        lampu8.src = "assets/images/off.gif";
        lampu9.src = "assets/images/off.gif";
        lampu10.src = "assets/images/off.gif";
    }
}
