var btnAdicionar = document.querySelector("#adicionar-heroi");

/**
 * O evento método addEventListener é responsável por escutar um evento em um elemento do DOM.
 * 
 * function podem ser anonimas ou nomeadas;
 */
btnAdicionar.addEventListener("click", function (event) {
    /**
     * o evento preventDefault é para evitar/previnir 
     */
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var heroi = getHeroiDoFormulario(form);

    var erros = validaHeroi(heroi);

    if (erros.length > 0) {
        exibeMensagemDeErros(erros);
        return;
    }
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://13.59.26.95:8080/infra_e_could/herois/save", true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var herois = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(herois);
        } else {
            console.error(herois);
        }
    }
    console.log(heroi.name);
    var json = JSON.stringify(heroi);
    console.log(json);
    xhr.send(json);

    // adicionaHeroiNaTabela(hje);
	location.reload(true);
    form.reset();

});

function adicionaHeroiNaTabela(heroi) {
    var heroiTr = montarTr(heroi);
    document.querySelector("table").appendChild(heroiTr);
}

function getHeroiDoFormulario(form) {
    var heroi = {
        name: form.nome.value
    }

    return heroi;
}

function montarTr(heroi) {
    var heroiTr = document.createElement("tr");
    heroiTr.classList.add("heroi");

    heroiTr.appendChild(montarTd(heroi.id, "info-id"));
    heroiTr.appendChild(montarTd(heroi.name, "info-nome"));

    return heroiTr;
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaHeroi(heroi) {
    var erros = [];
    if (!heroi.name != null && heroi.name.length < 2) {
        erros.push("Nome do herói é inválido.");
    }

    return erros;
}

function exibeMensagemDeErros(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}