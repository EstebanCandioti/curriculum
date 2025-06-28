
document.addEventListener("DOMContentLoaded", function(event) {

    //----------------------------------------------------------objeto persona con informacion personal------------------------------------------------------------------------
    let persona={
        nombre:"Esteba Orfeo Candioti",
        celular:"3425693808",
        email:"Estebancandio@gmail.com",
        ciudad:"Santa Fe Ciudad",
        direccion:"Maipu 1661",
        fotoPerfil:"",
        sobre_mi:"Estudiante de desarrollo desoftware con interes en aprender y ganar experiencia en el area IT. Enfocado y con gusto por el Front-End",
        aptitudes:["Adaptable", "Coperador", "Activo"],
        habilidadesInformaticas:["CSS","HTML","JavaScript","React","Angular","Java","SpringBoot","Sql"],
        certificados:["Ingles - B2", "Programador Web Full Stack Jr.", "Front End G4"],
    }

    //----------------------------------------------------------ASIGNACION DE ETIQUETAS HTML A UNA VARIABLE-------------------------------------------------------------------

    var whatsapp = document.getElementById("whatsapp");
    var email= document.getElementById("email");
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

