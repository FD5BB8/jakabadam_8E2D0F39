function calculateParticleCount(){
    let sebesseg = parseInt(document.getElementById("sebesseg").value)
    let ido = parseInt(document.getElementById("ido").value)
    if (sebesseg > 0 && ido > 0){
        let eredmeny = sebesseg * ido;
        document.getElementById("particles").innerHTML = "osszes reszecske: " + eredmeny;
    }
    else {
        document.getElementById("particles").innerHTML = "ong hulye vagy";
    }
}
//show texture types
function showTextureTypes(){
    let textures  = ["Duffuse",
                    "Normal map",
                    "Speculta",
                    "Emission",
                    "Height Map"
    ]

    let lista = document.getElementById("textlist");
    lista.innerHTML = "";
    for (let i = 0; i < textures.length; i++) {
        let li = document.createElement("li");
        li.textContent = textures[i];
        lista.appendChild(li);
    }
}

//
function szamolFrame(hossz, fps) {
    return hossz * fps;
}
//frameCalc function
function frameCalc() {
    let hossz = parseInt(document.getElementById("hossz").value);
    let fps = parseInt(document.getElementById("fps").value);
    if (hossz > 0 && fps > 0) {
        let frames = szamolFrame(hossz, fps);
        document.getElementById("frames").innerText = "az animacio " + frames + " kepkockabol all.";
    } 
    else {
        document.getElementById("frames").innerText = "kinyirlak fr!";
    }
}
//build checker
function buildCheck() {
    let platform = document.getElementById("platform").value.toLowerCase();
    if (platform === "mobil") {
        document.getElementById("build").innerText = "Mobil build: Alacsonyabb minőség ajánlott.";
    } 
    else if (platform === "pc") {
        document.getElementById("build").innerText = "PC build: magas minoseg tamogatott.";
    } 
    else if (paltform === "playstation" || platform === "xbox") {
        document.getElementById("build").innerText = "Konzol build: optimalizalt beallitasok javasoltak.";
    }
    else if (platform === "vr") {
        document.getElementById("build").innerText = "VR build: Nagy teljesitmeny szukseges.";
    }
    else if (platform === "nintendo") {
        document.getElementById("build").innerText = "Nintendo build: Mid korlatozas.";
    }
    else {
        document.getElementById("build").innerText = "Ismeretlen platform!";
    }
}