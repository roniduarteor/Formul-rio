function validarFormulario(){
    const nome = document.getElementById('nome').value
    const email = document.querySelector('#email').value
    const senha = document.getElementById('senha').value

    //Validação dos campos preenchidos

    if(nome == '' || email == '' || senha == ''){
        alert('Preencha os campos corretamente')
    }

    // validação email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(email)){
        alert("Por favor, insira em email válido")
    }

    // Validação da senha
    if(senha.length > 8){
        alert('Quantidade de caracteres excessiva')
    }
}