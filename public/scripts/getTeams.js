async function buscarTimes(){
    const url = 'https://api.baserow.io/api/database/rows/table/617416/?user_field_names=true'
    const token = '2y7lVz5XeO4M0TllXMdxUcjlUditP5IA'

    const result = await fetch(url, {
        headers: {
            Authorization: "Token " + token
        }
    })

    const data = await result.json();
    const times = await data.results.filter(el => el.Nome);
    const ordered = await times.sort((a, b) => a.Pontos - b.Pontos).reverse()
    return ordered
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