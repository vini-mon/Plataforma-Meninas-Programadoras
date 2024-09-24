fetch('/api/check-login')
    .then(response => {
        console.log('Response headers:', response); // Verifica o conteúdo da resposta
        return response.json(); // Tenta converter a resposta em JSON
    })
    .then(data => {
        if (data.loggedIn) {
            document.getElementById('navbar').innerHTML = `
                <nav>
                    <ul>
                        <li><a href="index.html">Início</a></li>
                        <li><a href="labirinto.html">Labirintos</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="/api/logout">Sair</a></li>
                    </ul>
                </nav>
            `;
        } else {
            document.getElementById('navbar').innerHTML = `
                <nav>
                    <ul>
                        <li><a href="index.html">Início</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="login.html">Login</a></li>
                    </ul>
                </nav>
            `;
        }
    })
    .catch(error => console.error('Erro ao buscar login:', error)); // Adiciona tratamento de erros
