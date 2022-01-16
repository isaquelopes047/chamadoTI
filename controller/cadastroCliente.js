

import { clienteService } from "../service/cadastroDados.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const Setor = evento.target.querySelector('[data-Setor]').value
    const data = evento.target.querySelector('[data-Data]').value
    const motivo = evento.target.querySelector('[data-motivo]').value
    

    clienteService.criaCliente(nome, Setor, data, motivo)
    .then(()=> {
        window.location.href = '../concluido.html'
    })
})