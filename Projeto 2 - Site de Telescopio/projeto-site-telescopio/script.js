// form
const nome_user = document.getElementById("nome-usuario");
const codigo_card = document.getElementById("numero-cartao");
const date_card = document.getElementById("date-card")
const codigo_card_user = document.getElementById("codigo");

// botao
const btn_comprar = document.getElementById("btn_comprar");

// span cartao
const spn_nome = document.getElementById("spn_nome");
const spn_numero = document.getElementById("spn_numero");
const spn_data = document.getElementById("spn_data");
const spn_codigo_verific = document.getElementById("spn_codigo-segura");

// form
const form_dados = document.getElementById("form-dados");

form_dados.addEventListener("change", function(){
    spn_nome.innerHTML =  nome_user.value
    spn_numero.innerHTML = codigo_card.value
    spn_data.innerHTML = date_card.value
    spn_codigo_verific.innerHTML = codigo_card_user.value
})

btn_comprar.addEventListener("click", function(){
    alert("Compra Realizada com Sucesso");
})