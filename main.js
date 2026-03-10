async function fnConsultarCep() {

    const cep = '' // Informe o CEP aqui, por exemplo: 01001000

    const resposta = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
    console.log(resposta)

    if (resposta.status !== 200) {
    const data = await resposta.json()
    

    console.log(`================================`)
    console.log(`CEP: ${data.cep}`)
    console.log(`Rua: ${data.logradouro}`)
    console.log(`Bairro: ${data.bairro}`)
    console.log(`Cidade: ${data.localidade}`)
    console.log(`UF: ${data.uf}`)
    console.log(`================================`)
    }else {
        console.log(`================================`)
        console.log(`ENDEREÇO NÃO ENCONTRADO!`)
        console.log(`================================`)
    }
}

fnConsultarCep()