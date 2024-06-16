const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const cpf = document.querySelector('#cpf')
const cnpj = document.querySelector('#cnpj')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')

let listaDeUsuarios = []
let login

recarregarUsuarios()

const usuario = listaDeUsuarios[login.index]

nome.value = usuario.nome
sobrenome.value = usuario.sobrenome
cpf.value = usuario.cpf
cnpj.value = usuario.cnpj
email.value = usuario.email
senha.value = usuario.senha

function alterarUsuario() {

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

    usuario.nome = nome.value
    usuario.sobrenome = sobrenome.value
    usuario.cpf = cpf.value
    usuario.cnpj = cnpj.value
    usuario.email = email.value
    usuario.senha = senha.value

    localStorage.setItem('usuarios', JSON.stringify(listaDeUsuarios))
    alert('Alteração bem-sucedido!')
    location.reload()
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

if (window.location.href.indexOf('dados-pessoais.html') !== -1) {
    if (!login.logado) {
        window.location.href = 'login.html'
    }
}