/* código aleatório que fiz anteriormente pois é só testar a compressão vai gulp   */


const from = document.getElementById('form_verificar');
const mensagemSucesso = document.querySelector('.mensagem_sucesso');
const mensagemErro = document.querySelector('.mensagem_erro');

from.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroA = parseFloat(document.getElementById('numero_a').value);
    const numeroB = parseFloat(document.getElementById('numero_b').value);
    const textoSucesso = `O valo <b>B</b> é maior que o valor <b>A</b>`;
    const textoErro = `ERRO! O valor <b>B</b> é menor que <b>A</b>`;

    if(numeroA < numeroB){
        mensagemSucesso.innerHTML = textoSucesso;
        mensagemSucesso.style.display= 'block';

    }else{
        mensagemErro.innerHTML = textoErro;
        mensagemErro.style.display= 'block';
    }

    
})

console.log(from);
