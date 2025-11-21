const dados = {
    livros: {
        "Nicolau Maquiavel": [
            { titulo: "O Príncipe", ano: "1532", imagem: "https://m.media-amazon.com/images/I/81h4CdNxdgL.jpg" },
            { titulo: "A Arte da Guerra", ano: "1521", imagem: "https://m.media-amazon.com/images/I/517di2B4v9L._SL500_.jpg" },
            { titulo: "Discursos sobre a Primeira Década", ano: "1531", imagem: "https://m.media-amazon.com/images/I/81ZJVQH7iDL._AC_UF1000,1000_QL80_.jpg" },
            { titulo: "História de Florença", ano: "1532", imagem: "https://m.media-amazon.com/images/I/51U57x6WbWL._AC_UF1000,1000_QL80_.jpg" },
            { titulo: "Belfador, o Arquidiabo", ano: "1549", imagem: "https://m.media-amazon.com/images/I/71Oldqor7vL._UF1000,1000_QL80_.jpg" }
        ],
        "Clarice Lispector": [
            { titulo: "A Hora da Estrela", ano: "1977", imagem: "https://rocco.com.br/wp-content/uploads/2022/12/9786555320350_vi_03-1.png" },
            { titulo: "Água Viva", ano: "1973", imagem: "https://m.media-amazon.com/images/I/71FT8rYeZaL.jpg" },
            { titulo: "Perto do Coração Selvagem", ano: "1943", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2YhuNf2wYEV1LuELxRIh9Q0MjTBF_lXNqZHfJpoSvaiVo_RWX488ph9EVOUBZN56lnlXvk-wnM-v5mbP-18WSyxsubEEQ7nONwyx4xE&s" },
            { titulo: "Felicidade Clandestina", ano: "1971", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgpAfsP3_kgT1Q9zd6MTjSkSS0QLzpRF_Aw&s" }
        ],
        "Platão": [
            { titulo: "A República", ano: "", imagem: "https://m.media-amazon.com/images/I/61iW5sHVzdL._AC_UF1000,1000_QL80_.jpg" },
            { titulo: "O Banquete", ano: "", imagem: "https://static.cedet.com.br/produtos_imagem_principal_large/30677-525x791.jpg?v=1750276143" }
        ],
        "Aristóteles": [
        ],
        "Sócrates": [
        ],
        "Pitágoras": [
        ],
    },

    canetas: [
        { nome: "Canetas Esferográficas", imagem: "https://m.media-amazon.com/images/I/71QjGgokTAL._AC_UF894,1000_QL80_.jpg" },
        { nome: "Canetas em Gel", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRot98MCOwNpr8h2S1qnvP7YHGUk1hDzHl1CA&s" },
        { nome: "Canetas Rollerball", imagem: "https://www.armarinhosaojose.com.br/octopus/design/images/94/products/b/caneta-vision-eleite-ub-200-0-8mm-azul-escuro.jpg" },
        { nome: "Canetas-Tinteiro", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSj2S6_L_jlZyCyFEmctcRWSuN984X4tUFQ&s" }
    ],

    pastas: [
        { nome: "Pasta Catálogo DAC 100 Envelopes", imagem: "https://www.computeclondrina.com.br/img/products/pasta-plastica-catalogo-com-100-envelopes-dac_1_1200.jpg" }
    ],

    sketchbooks: [
        { nome: "Sketchbook A5 320 páginas", imagem: "https://m.media-amazon.com/images/I/71uOT3pzwSL._AC_UF894,1000_QL80_.jpg" }
    ],

    acessorios: [
        { nome: "Estojo de Juta – X15303", imagem: "https://papelariacriativa.com.br/wp-content/uploads/estojo-box-seanite-feminino-glitter-sortidos-es15303-2.jpg" },
        { nome: "Estojo Holográfico X08069", imagem: "https://images.tcdn.com.br/img/img_prod/638637/estojo_100_pens_holografico_rebecca_bonbon_rb2483_772_1_527cb799aeb1657cc9816ecc51aba009.png" }
    ]
};
function mostrar(tipo) {
    const area = document.getElementById("resultado");
    area.innerHTML = ""; 

    
    if (tipo === "livros") {
        area.innerHTML = "<h3>Escolha um escritor:</h3>";

        const escritores = Object.keys(dados.livros);

        escritores.forEach(nome => {
            const botao = document.createElement("button");
            botao.textContent = nome;
            botao.style.margin = "5px";
            botao.onclick = () => mostrarLivros(nome);
            area.appendChild(botao);
        });

        return;
    }

    const lista = dados[tipo];

    let html = `<h3>Resultados:</h3>`;

    lista.forEach(item => {
        html += `
            <div style="border: 1px solid #000; padding: 10px; margin: 10px;">
                <p><strong>Nome:</strong> ${item.nome}</p>
                <img src="${item.imagem}" width="120">
            </div>
        `;
    });

    area.innerHTML = html;
}

function mostrarLivros(nomeEscritor) {
    const area = document.getElementById("resultado");
    const livros = dados.livros[nomeEscritor];

    let html = `<h3>Livros de ${nomeEscritor}:</h3>`;

    livros.forEach(livro => {
        html += `
            <div style="border: 1px solid #000; padding: 10px; margin: 10px;">
                <p><strong>Título:</strong> ${livro.titulo}</p>
                <p><strong>Ano:</strong> ${livro.ano}</p>
                <img src="${livro.imagem}" width="120">
            </div>
        `;
    });

    area.innerHTML = html;
}

const formulario = document.getElementById("form_inscricao")
const mensagem = document.getElementById("mensagem_ok")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault()

    mensagem.textContent = "Usuário cadastrado com sucesso!"
    formulario.reset()

    setTimeout(() => {
        mensagem.textContent = ""
    }, 3000)
})
const estilo = document.createElement("style");

estilo.innerHTML = `
    #resultado {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    #resultados {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        width: 90%;
        max-width: 1100px;
    }

    .card {
        background: #01241c;
        border-radius: 10px;
        padding: 15px;
        text-align: center;
        box-shadow: 0px 4px 15px rgba(23, 82, 59, 0.1);
        transition: 0.3s;
    }

    .card:hover {
        transform: scale(1.04);
        box-shadow: 0px 6px 20px rgba(0,0,0,0.15);
    }

    .card img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 10px;
    }

    .card h4 {
        font-size: 18px;
        margin-bottom: 4px;
    }

    .card p {
        font-size: 14px;
        color: #444;
    }

    #resultado button {
        background:#3d857b ;
        border: 2px solid black;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 15px;
        margin: 4px;
        transition: 0.3s;
    }

    #resultado button:hover {
        background:#01241c;
        color: white;
        font-size: 20px;
    }
`;
document.head.appendChild(estilo);
