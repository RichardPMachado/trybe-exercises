const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const authorBornIn1947 = () => books.find((elemento) => elemento.author.birthYear === 1947).author.name

console.log(authorBornIn1947())

// ==============================================================================================================
const smallerName = () => {
  let nameBook = books[0].name
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName())

// ==============================================================================================================

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}

console.log(getNamedBook());
// ==============================================================================================================

const achargenero = () => {
 return books.filter((elemento) => {
    return elemento.genre === 'Terror';
  }).map((elemento) => elemento.name );
};
console.log(achargenero());

// ==============================================================================================================

const booksOrderedByReleaseYearDesc = () => {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc())
// ==============================================================================================================

const autor = () => books.find((elemento) => elemento.author.name === 'Stephen King');

console.log(autor());

// ==============================================================================================================

