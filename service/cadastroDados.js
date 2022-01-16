

const criaCliente = (nome , Setor, data, motivo) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            Setor: Setor,
            motivo: motivo,
            data: data
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possivel criar um os cliente')
    })
}

export const clienteService = {
    criaCliente,
}
