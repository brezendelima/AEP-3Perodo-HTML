let listaDeUsuarios = []
let login

function deslogarUsuario() {

    localStorage.setItem('login', JSON.stringify({logado: false}))
    return window.location.href = 'index.html'
}

function recarregarUsuarios() {

    const usuariosLocalStorage = localStorage.getItem('usuarios')
    const logadoLocalStorafe = localStorage.getItem('login')

    if (usuariosLocalStorage) {
        listaDeUsuarios = JSON.parse(usuariosLocalStorage)
    }
    
    if (logadoLocalStorafe) {
        login = JSON.parse(logadoLocalStorafe)
    }
}

recarregarUsuarios()
if (window.location.href.indexOf('area-logada.html.html') !== -1) {
    if (!login.logado) {
        window.location.href = 'login.html'
    }
}