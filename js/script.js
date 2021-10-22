$( document ).ready(function() {

    $("#carrossel img:eq(0)").addClass("banner-ativo").show()

    setInterval(slide, 3000)

    function slide() {
        if( $(".banner-ativo").next().length ) {
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        } else {
            $(".banner-ativo").removeClass().hide()
            $("#carrossel img:eq(0)").addClass("banner-ativo").show()
        }
    }
    
    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")
        
        // if($("#menu").hasClass("menu-ativo")) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }
    })

})


let email = document.getElementById("campo-email");

let menu = document.getElementById("menu");

function mostrarMenu() {
    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none"

    } else {
        menu.style.display = "flex"
    }
}

function mostrarPopup() {
    window.alert("Hello World")
}

// DOM - Document Object Model
// RegEx - Expressões Regulares

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

function renderizarNoticias() {
    let espaco = document.getElementById("espaco-noticias");

    let listaNoticias = [
        {
            imagem: "img/cardnews.jpg",
            titulo: "Brasil leva 1 gol no início do jogo",
            descricao: "Houve uma falha na defesa brasileira, que deixou o atacante adversário cara a cara com o goleiro."
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "O dólar está alto",
            descricao: "O dolar está em alta há muito tempo."
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Brasil leva 1 gol no início do jogo",
            descricao: "Houve uma falha na defesa brasileira, que deixou o atacante adversário cara a cara com o goleiro."
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "O dólar está alto",
            descricao: "O dolar está em alta há muito tempo."
        },
        {
            imagem: "img/cardnews.jpg",
            titulo: "Brasil leva 1 gol no início do jogo",
            descricao: "Houve uma falha na defesa brasileira, que deixou o atacante adversário cara a cara com o goleiro."
        },
        {
            imagem: "img/fifa.png",
            titulo: "O dólar está alto",
            descricao: "O dolar está em alta há muito tempo."
        }
    ]

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];

        console.log("Noticia")

        template += `<div class="cardnews">
            <img src="${noticia.imagem}" alt="Foto da jogadora profissional">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descricao}</p>
        </div>`
    }

    // console.log(espaco.i nnerHTML)

    espaco.innerHTML = template;

}