
document.addEventListener("DOMContentLoaded", function(event) {

    //----------------------------------------------------------objeto persona con informacion personal------------------------------------------------------------------------
    let persona={
        nombre:"Esteba Orfeo Candioti",
        celular:"1135657044",
        email:"Estebancandio@gmail.com",
        ciudad:"Santa Fe Ciudad",
        direccion:"Maipu 1661",
        fotoPerfil:"",
        instagram:"esteban_candioti",
        linkedin:"esteban-candioti",
        sobre_mi:"Estudiante de desarrollo web con interes en aprender y ganar experiencia en el area IT. Enfocado y con gusto por el Front-End",
        aptitudes:["organizado", "coperador", "activo"],
        habilidadesInformaticas:["CSS","HTML","JavaScript","React","SpringBoot (basico)","MySql (basico)"],
        certificados:["Ingles - B1", "Programador Web Full Stack Jr.", "Front End G4"],
    }

    //----------------------------------------------------------ASIGNACION DE ETIQUETAS HTML A UNA VARIABLE-------------------------------------------------------------------

    var whatsapp = document.getElementById("whatsapp");
    var email= document.getElementById("email");
    var instagram= document.getElementById("instagram");
    var linkedin= document.getElementById("linkedin");
    var direccion= document.getElementById("direccion");
    var correo_electronico= document.getElementById("correo_electronico");
    var celular= document.getElementById("celular");
    var sobre_mi=document.getElementById("sobreMi");
    var aptitudes=document.getElementById("aptitudes");
    var habilidadesInformaticas=document.getElementById("habilidadesInformaticas");
    var certificados=document.getElementById("certificados");

    //------------------------------------------------------------LLAMADO A VARIABLES CUANDO SE CLICKEA EL ELEMENTO-----------------------------------------------------------

    whatsapp.onclick= function() {ponerWhatsapp()};
    email.onclick= function() {ponerEmail()};
    instagram.onclick= function(){ponerInstagram()};
    linkedin.onclick = function(){ponerLinkedin()};

    //---------------------------------------------VARIABLES MOSTRADAS EN CONSOLA PARA ASEGURAR QUE ESTEN SIENDO CAPTURADAS-----------------------------------------------------

    console.log(whatsapp);
    console.log(email);
    console.log(instagram);
    console.log(linkedin);
    console.log(direccion);
    console.log(email);
    console.log(celular);
    console.log(sobre_mi);

    //-----------------------------------------------------------------------------------FUNCIONES--------------------------------------------------------------------------------

    function ponerWhatsapp(){
        console.log("mi numero " + persona.celular);
        whatsapp.href="https://wa.me/+5491135657044";
        whatsapp.target="_blank";
    }

    function ponerEmail(){
        console.log("mi correo electronico " + persona.email);
        email.href="mailto:" + persona.email;
    }

    function ponerInstagram(){
        console.log("mi instagram " + persona.instagram);
        instagram.href="https://instagram.com/"+persona.instagram;
        instagram.target="_blank";
    }
    
    function ponerFacebook(){
        console.log("mi facebook " + persona.facebook);
        facebook.href="https://facebook.com/"+persona.facebook;
        facebook.target="_blank";
    }

    function ponerLinkedin(){
        console.log("mi linkedin " + persona.linkedin);
        linkedin.href="https://www.linkedin.com/in/"+persona.linkedin;
        linkedin.target="_blank";
    }

    function ponerTwitter(){
        console.log("mi twitter"+ persona.twitter);
        twitter.href="https://twitter.com/"+persona.twitter;
        twitter.target="_blank"
    }

    //---------------------------------------------USAR INNER HTML PARA RELLENAR EL PORTFOLIO CON INFORMACION PERSONAL--------------------------------------------------------
    direccion.innerHTML="direccion: "+persona.direccion;
    correo_electronico.innerHTML="email: "+persona.email;
    celular.innerHTML="celular: "+persona.celular;
    sobre_mi.innerHTML=persona.sobre_mi;
    
    
    //-------------------------------------------------------------------------LISTAS-----------------------------------------------------------------------------------------
    persona.aptitudes.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText= item;
        aptitudes.appendChild(li)
    })

    persona.habilidadesInformaticas.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText=item;
        habilidadesInformaticas.appendChild(li);
    });

    persona.certificados.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText=item;
        certificados.appendChild(li);
    });

});

