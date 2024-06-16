// Inputs cadastro
const inputNome = document.getElementById('nome')
const inputSobrenome = document.getElementById('sobrenome')
const inputCPF = document.getElementById('cpf')
const inputCNPJ = document.getElementById('cnpj')
const inputEmailCadastro = document.getElementById('email-cadastro')
const inputSenhaCadastro = document.getElementById('senha-cadastro')

// Inputs login
const inputEmailLogin = document.getElementById('email-login')
const inputSenhaLogin = document.getElementById('senha-login')

let listaDeUsuarios = []
let login


function cadastrarUsuario() {

    const nome = inputNome.value
    const sobrenome = inputSobrenome.value
    const cpf = inputCPF.value
    const cnpj = inputCNPJ.value
    const email = inputEmailCadastro.value
    const senha = inputSenhaCadastro.value

    if (nome == '') {
        return alert('Digite um nome...')
    }

    if (sobrenome == '') {
        return alert('Digite um sobrenome...')
    }

    if (cpf == '') {
        return alert('Digite um cpf...')
    }

    if (email == '') {
        return alert('Digite um E-mail...')
    }

    if (senha == '') {
        return alert('Digite uma senha...')
    }

    listaDeUsuarios.push({
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        cnpj: cnpj,
        email: email,
        senha: senha,
        campanhas: [],
    })

    localStorage.setItem('usuarios', JSON.stringify(listaDeUsuarios))
    limparCampos()
    alert('Cadastro bem-sucedido!')
}


function logarUsuario() {
    
    const email = inputEmailLogin.value
    const senha = inputSenhaLogin.value

    if (email == '') {
        return alert('Digite um E-mail...')
    }

    if (senha == '') {
        return alert('Digite uma senha...')
    }

    listaDeUsuarios.forEach((usuario, index) => {

        if (usuario.email == email && usuario.senha == senha) {
            localStorage.setItem('login', JSON.stringify({logado: true, index: index}))
            login = JSON.parse(localStorage.getItem('login'))
            return
        }
    })

    if (login.logado) {
        return window.location.href = 'area-logada.html'
    }

    return alert('E-mail ou senha inválidas')
}


function limparCampos() {

    inputNome.value = ''
    inputSobrenome.value = ''
    inputCPF.value = ''
    inputCNPJ.value = ''
    inputEmailCadastro.value = ''
    inputSenhaCadastro.value = ''
    inputEmailLogin.value = ''
    inputSenhaLogin.value = ''
}


function recarregarUsuarios() {

    const usuariosLocalStorage = localStorage.getItem('usuarios')
    const logadoLocalStorage = localStorage.getItem('login')

    if (usuariosLocalStorage) {
        listaDeUsuarios = JSON.parse(usuariosLocalStorage)
    }
    
    if (logadoLocalStorage) {
        login = JSON.parse(logadoLocalStorage)
    }
}

recarregarUsuarios()
if (window.location.href.indexOf('login.html') !== -1) {
    if (login.logado) {
        window.location.href = 'area-logada.html'
    }
}
