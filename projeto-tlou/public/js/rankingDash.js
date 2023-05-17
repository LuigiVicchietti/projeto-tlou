document.addEventListener('DOMContentLoaded', () => {
    fetch('/usuarios/exibirRankDash', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then((jsonRankDash) => {
                position = 1;
                jsonRankDash.forEach(row => {
                    document.getElementById('tbody_content').innerHTML += `
                    <tr>
                        <td>${position}°</td>
                        <td>${row.NomeUser}</td>
                        <td>${row.Pontuacao}</td>
                    </tr>
                    `
                    position++
                });
            })
        } else {
            console.log('Erro no .THEN');
        }
    })
})