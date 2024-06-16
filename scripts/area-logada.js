const descricao = document.querySelector('#descricao')
const valor = document.querySelector('#valor')
const data = document.querySelector('#data')
const divCampanhas = document.querySelector('#div-campanhas')

let listaDeUsuarios = []
let login

recarregarUsuarios()

const usuario = listaDeUsuarios[login.index]

recarregarCampanhas()

function criarCampanha() {
    if (descricao.value == '') {
        return alert('Digite uma descrição...')
    }

    if (valor.value == '') {
        return alert('Digite um valor...')
    }

    if (data.value == '') {
        return alert('Digite uma data...')
    }

    const [ano, mes, dia] = data.value.split('-');
    const dataFormatada = `${dia}/${mes}/${ano}`
    const valorFormatado = parseFloat(valor.value).toFixed(2)

    usuario.campanhas.push({
        descricao: descricao.value,
        valor: valorFormatado,
        data: dataFormatada
    })

    descricao.value = ''
    valor.value = ''
    data.value = ''

    alert('Campanha cadastrada com sucesso!')
    recarregarCampanhas()
}

function recarregarCampanhas() {
    while (divCampanhas.firstChild) {
        divCampanhas.removeChild(divCampanhas.firstChild)
    }

    usuario.campanhas.forEach((item, index ) => {
        const divGradient = document.createElement('div')
        const divFlex = document.createElement('div')
        const divInfo = document.createElement('div')
        const divBtns = document.createElement('div')
        const titulo = document.createElement('h4')
        const pValor = document.createElement('p')
        const pData = document.createElement('p')
        const btnAlterar = document.createElement('button')
        const btnDeletar = document.createElement('button')

        divGradient.setAttribute('class', 'bg-gradient-to-r from-customBlue to-slate-50 font-medium rounded-xl space-y-12 p-8 shadow-2xl w-1/3')
        divFlex.setAttribute('class', 'flex justify-between')
        divInfo.setAttribute('class', 'space-y-1')
        divBtns.setAttribute('class', 'flex flex-col gap-1')
        titulo.setAttribute('class', 'text-xl')
        pData.setAttribute('class', 'text-customButton')
        btnAlterar.setAttribute('class', 'bg-black text-white rounded-lg hover:text-black hover:bg-slate-200 transition-colors duration-150 ease-in-out py-0.5 px-2')
        btnDeletar.setAttribute('class', 'button-edit-del py-0.5 px-2')

        btnAlterar.setAttribute('onclick', `alterarCampanha(${index})`)
        btnDeletar.setAttribute('onclick', `deletarCampanha(${index})`)

        titulo.innerText = item.descricao
        pValor.innerText = item.valor
        pData.innerText = item.data
        btnAlterar.innerText = 'Alterar' 
        btnDeletar.innerText = 'Deletar'

        divGradient.appendChild(titulo)
        divGradient.appendChild(divFlex)
        divFlex.appendChild(divInfo)
        divFlex.appendChild(divBtns)
        divInfo.appendChild(pValor)
        divInfo.appendChild(pData)
        divBtns.appendChild(btnAlterar)
        divBtns.appendChild(btnDeletar)

        divCampanhas.appendChild(divGradient)
    });

    localStorage.setItem('usuarios', JSON.stringify(listaDeUsuarios))

}

function alterarCampanha(index) {
    const campanha = usuario.campanhas[index]
    const novaDescricao = prompt('Descrição', campanha.descricao)
    const novoValor = prompt('Descrição', campanha.valor)
    const novaData = prompt('Descrição', campanha.data)

    if (novaDescricao == '' || novoValor == '' || novaData == '') {
        alert('Nenhum campo pode estar em branco.') 
        return alterarCampanha(index)
    }
    
    campanha.descricao = novaDescricao
    campanha.valor = novoValor
    campanha.data = novaData
    recarregarCampanhas()
}

function deletarCampanha(index) {
    usuario.campanhas.splice(index, 1)
    recarregarCampanhas()
}


function deslogarUsuario() {
    localStorage.setItem('login', JSON.stringify({logado: false}))
    return window.location.href = 'index.html'
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

if (window.location.href.indexOf('area-logada.html') !== -1) {
    if (!login.logado) {
        window.location.href = 'login.html'
    }
}