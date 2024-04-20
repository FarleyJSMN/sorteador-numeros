document.getElementById('btn-sortear').addEventListener('click', sortear);
document.getElementById('btn-reiniciar').addEventListener('click', reiniciar);

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if ((quantidade == ate && de) && (de == quantidade && ate) && (ate == quantidade && de)) {
        alert('Campos não pode ter o mesmo valor. Verifique!');
        return;
    }

    if (de < ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade < (ate - de)) {
        alert('Campo "Quantidade de números" é inferior ao intervalo de números entre os campos “Do número” e “Até o número”. Verifique!');
        return;
    }

    if (quantidade >= ate) {
        alert('Campo "Quantidade de números" não deve ser superior ou igual ao campo "Até o número". Verifique!');
        return;
    }

    else {

        let sorteados = [];

        for (let i = 0; i < quantidade; i++) {
            let numeros = numeroAleatorio(de, ate);

            while (sorteados.includes(numeros)) {
                numeros = numeroAleatorio(de, ate);
            }
            sorteados.push(numeros);

        }

        document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
        document.getElementById('btn-reiniciar').className = 'container__botao';
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    document.getElementById('btn-reiniciar').className = 'container__botao-desabilitado';
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}