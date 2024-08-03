document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    let campoA = parseFloat(document.getElementById('campoA').value);
    let campoB = parseFloat(document.getElementById('campoB').value);
    if (campoB > campoA) {
        document.getElementById('mensagem').textContent = 'O formulário é válido!';
        document.getElementById('mensagem').className = 'message valid';
    } else {
        document.getElementById('mensagem').textContent = 'O número B deve ser maior que o número A.';
        document.getElementById('mensagem').className = 'message invalid';
    }
});