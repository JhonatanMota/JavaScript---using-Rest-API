// var btnBuscar = document.querySelector("#buscar-herois");
window.onload =  function(){
    var xhr = new XMLHttpRequest();
    // var url = "http://localhost:8080/herois/All";
    if ("withCredentials" in xhr) {
        xhr.open("GET", "http://13.59.26.95:8080/infra_e_could/herois/All", true);

    }else if(typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open("GET", "http://13.59.26.95:8080/infra_e_could/herois/All");
    }else{
        xhr = null;
    }

    if(xhr != null){
        xhr.addEventListener("load", function () {
            var erroAjax = document.querySelector("#erro-ajax");
            if (xhr.status == 200) {
                erroAjax.classList.add("invisivel");
                var herois = JSON.parse(xhr.responseText);
                console.log(herois);
                herois.forEach(function (heroi) {
                    adicionaHeroiNaTabela(heroi);
                });
            } else {
                erroAjax.classList.remove("invisivel");
            }
        })
        xhr.send();
    }else{
        console.log("FALHA!");
    }
}
//
// btnBuscar.addEventListener("click", function () {
//
// });