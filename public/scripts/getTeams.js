async function buscarTimes(){
    const url = 'https://api.baserow.io/api/database/rows/table/617416/?user_field_names=true'
    const token = '2y7lVz5XeO4M0TllXMdxUcjlUditP5IA'
    
    const json = await fetch(url, {
        headers: {
            Authorization: "Token " + token
        }
    })
    
    const data = await json.json();
    const equipes = await data.results.filter(el => el.Nome);
    
    const ordenadas = [...equipes].sort((a, b) => b.Pontos - a.Pontos);

  let ultimoPonto = null;
  let rank = 1;

  return ordenadas.map((equipe, index) => {
    if (equipe.Pontos !== ultimoPonto) {
      rank = rank; // mantém o atual
    }
    // empates mantêm o rank anterior

    const equipeRankeada = { ...equipe, rank };
    ultimoPonto = equipe.Pontos;

    // mas sempre incrementa pro próximo
    if (
      index + 1 < ordenadas.length &&
      ordenadas[index + 1].Pontos !== equipe.Pontos
    ) {
      rank++;
    } else if (index + 1 < ordenadas.length && ordenadas[index + 1].Pontos === equipe.Pontos) {
      // não incrementa se o próximo também está empatado
    } else {
      rank++;
    }

    return equipeRankeada;
  });
}

async function buscarTime(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const url = `https://api.baserow.io/api/database/rows/table/617416/${id}/?user_field_names=true`
    const token = '2y7lVz5XeO4M0TllXMdxUcjlUditP5IA'
    const result = await fetch(url, {
        headers: {
            Authorization: "Token " + token
        }
    })
    const data = await result.json();
    
    return data
}