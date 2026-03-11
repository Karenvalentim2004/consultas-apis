process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function fnPoke() {

    const poke = "bulbasaur" 

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)

    if (resposta.status !== 200) {
        console.log("================================")
        console.log("POKÉMON NÃO ENCONTRADO!")
        console.log("================================")
        return
    }

    const data = await resposta.json()

    const id = data.id
    const nome = data.name
    const tipos = data.types.map(t => t.type.name)
    const habilidades = data.abilities.map(a => a.ability.name)
    const jogos = data.game_indices.map(g => g.version.name)

    const speciesRes = await fetch(data.species.url)
    const speciesData = await speciesRes.json()

    const evoRes = await fetch(speciesData.evolution_chain.url)
    const evoData = await evoRes.json()

    const evolucoes = []

    let evo = evoData.chain

    do {
        evolucoes.push(evo.species.name)
        evo = evo.evolves_to[0]
    } while (evo)

    console.log("================================")
    console.log("ID:", id)
    console.log("Nome:", nome)
    console.log("Tipo:", tipos)
    console.log("Habilidades:", habilidades)
    console.log("Jogos que aparece:", jogos)
    console.log("Evoluções:", evolucoes)
    console.log("================================")
}

fnPoke()