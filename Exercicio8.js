const booksByCategory = [
    {
        category: "Romance",
        books: [
            {
                title: "O Sol Também é Uma Estrela",
                author: "Nicola Yoon",
            },
            {
                title: "O Noivo da Minha Melhor Amiga",
                author: "Emily Giffin",
            },
            {
                title: "Orgulho e Preconceito",
                author: "Jane Austen",
            },
        ],
    },
    {
        category: "Fantasia",
        books: [
            {
                title: "Harry Potter e a Pedra Filosofal",
                author: "J.K. Rowling",
            }, {
                title: "O Hobbit",
                author: "J.R.R. Tolkien",
            },
            {
                title: "Eragon",
                author: "Christopher Paolini",
            },
            {
                title: "O Nome do Vento",
                author: "Patrick Rothfuss",
            },
        ],
    },
    {
        category: "Suspense",
        books: [
            {
                title: "A Garota no Trem",
                author: "Paula Hawkins",
            },
            {
                title: "O Silêncio dos Inocentes",
                author: "Thomas Harris",
            },
        ],
    },
    {
        category: "Ficção Científica",
        books: [
            {
                title: "Duna",
                author: "Frank Herbert",
            },
            {
                title: "Neuromancer",
                author: "William Gibson",
            },
            {
                title: "Fundação",
                author: "Isaac Asimov",
            },
            {
                title: "1984",
                author: "George Orwell",
            },
            {
                title: "O Fim da Infância",
                author: "Arthur C. Clarke",
            },
        ],
    },
]

function countBooksInCategory(categoria){
    let objeto = {};
    objeto[categoria[0].category] = categoria[0].books.length;
    return objeto;
}

while(true){
    let categoriaEscolhida = prompt("Escolha uma categoria dentre " + booksByCategory.map(b => b.category).join(", ") + ".");
    if(!(booksByCategory.map(b => b.category).includes(categoriaEscolhida))){
        alert("Escolha uma categoria válida");
        continue;
    }
    let categoria = booksByCategory.filter((books) => books.category == categoriaEscolhida);
    let objeto = countBooksInCategory(categoria);
    console.log(objeto);
    
    let continuar = confirm("(Objeto no console)\nEscolher outra categoria?");
    if(!continuar){
        break;
    }
}

