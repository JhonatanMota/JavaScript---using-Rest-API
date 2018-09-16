var inputFilter = document.querySelector("#inputFilter");

inputFilter.addEventListener("input", function () {
    console.log(this.value);
    var herois = document.querySelectorAll(".heroi");

    if (this.value.length > 0) {
        for (var i = 0; i < herois.length; i++) {
            var heroi = herois[i];
            var tdNomeHeroi = heroi.querySelector(".info-nome");
            var nomeHeroi = tdNomeHeroi.textContent;
            var expression = new RegExp(this.value, "i");
            if (!expression.test(nomeHeroi)) {
                heroi.classList.add("invisivel");
            } else {
                heroi.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < herois.length; i++) {
            var heroi = herois[i];
            heroi.classList.remove("invisivel");
        }
    }
});