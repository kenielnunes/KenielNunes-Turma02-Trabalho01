const Biblioteca = require('../src/Trabalho01Turma02');

describe('Testes da classe Biblioteca', () => {
    let library;

    // Executa antes de cada teste para garantir que a biblioteca esteja limpa e pronta
    beforeEach(() => {
        library = new Biblioteca();
    });

    test('Deve adicionar um livro à lista de livros', () => {
        // Define um livro para adicionar
        const book = { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle' };
    
        // Adiciona o livro à biblioteca
        library.adicionarLivro(book);
    
        // Verifica se o livro foi adicionado corretamente
        expect(library.livros).toContainEqual(book);
    });

    test('Deve remover um livro da lista de livros', () => {
        // Define um livro para adicionar
        const book = { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle' };

        // Adiciona o livro à biblioteca
        library.adicionarLivro(book);
        
        // Remove o livro pelo ID
        library.removerLivro(1);
       
        // Verifica se o livro foi removido da lista
        expect(library.livros).not.toContainEqual(book);
    });

    test('Deve buscar um livro pelo ID', () => {
        // Define um livro para adicionar
        const book = { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle' };

        // Adiciona o livro à biblioteca
        library.adicionarLivro(book);

        // Busca o livro pelo ID
        const foundBook = library.buscarLivroPorId(1);

        // Verifica se o livro encontrado é o esperado
        expect(foundBook).toEqual(book);
    });

    test('Deve buscar um livro pelo título', () => {
        // Define um livro para adicionar
        const book = { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle' };

        // Adiciona o livro à biblioteca
        library.adicionarLivro(book);

        // Busca o livro pelo título
        const foundBooks = library.buscarLivroPorTitulo('Sherlock Holmes');

        // Verifica se a lista de livros encontrados contém o livro esperado
        expect(foundBooks).toContainEqual(book);
    });

    test('Deve listar todos os livros', () => {
        // Define um livro para adicionar
        const book = { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle' };

        // Adiciona o livro à biblioteca
        library.adicionarLivro(book);

        // Obtém a lista de todos os livros na biblioteca
        const booksList = library.listarLivros();

        // Verifica se a lista de livros contém o livro adicionado
        expect(booksList).toContainEqual(book);
    });


    // Membros

    test('Deve adicionar um membro', () => {
        // Define um membro para adicionar
        const member = { id: 1, nome: 'Keniel'};
    
        // Adiciona o membro à biblioteca
        library.adicionarMembro(member);
    
        // Verifica se o membro foi adicionado corretamente
        expect(library.membros).toContainEqual(member);
    })

    test('Deve remover um membro da lista de membros', () => {
        // Define um membro para adicionar
        const member = { id: 1, nome: 'Keniel'};

        // Adiciona o membro à biblioteca
        library.adicionarMembro(member);
        
        // Remove o membro pelo ID
        library.removerMembro(1);
       
        // Verifica se o membro foi removido da lista
        expect(library.membros).not.toContainEqual(member);
    });

    test('Deve buscar um membro pelo ID', () => {
        // Define um membro para adicionar
        const member = { id: 1, nome: 'Keniel'};

         // Adiciona o membro à biblioteca
         library.adicionarMembro(member);

        // Busca o membro pelo ID
        const foundMember = library.buscarMembroPorId(1);

        // Verifica se o membro encontrado é o esperado
        expect(foundMember).toEqual(member);
    });

    test('Deve listar todos os membros da lista', () => {
        // Define um membro para adicionar
        const member = { id: 1, nome: 'Keniel'};

        // Adiciona o membro à biblioteca
        library.adicionarMembro(member);
  
        // Obtém a lista de todos os membros na biblioteca
        const memberList = library.listarMembros();
  
        // Verifica se a lista de membros contém o membro adicionado
        expect(memberList).toContainEqual(member);
    })

    test('Deve emprestar um livro', () => {
        // Define um membro para adicionar
        const member = { id: 1, nome: 'Keniel' };

        // Define um livro para adicionar
        const book = { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: false };

        // Adiciona o membro à biblioteca
        library.adicionarMembro(member);

        // Adiciona o livro à biblioteca
        library.adicionarLivro(book);

        // Verifica se o livro foi emprestado (deve retornar true)
        expect(library.emprestarLivro(book.id, member.id)).toBeTruthy()

        // Verifica se o livro existe (passando id incorreto, deve reotrnar false)
        expect(library.emprestarLivro(2, member.id)).toBeFalsy()

        // Verifica se o membro existe (passando id incorreto, deve reotrnar false)
        expect(library.emprestarLivro(book.id, 2)).toBeFalsy()

        // Verifica se o livro já foi emprestado (deve retornar false)
        expect(library.emprestarLivro(book.id, member.id)).toBeFalsy()
    })

    test('Deve devolver um Livro', () => {
       // Define um membro para adicionar
       const member = { id: 1, nome: 'Keniel' };

       // Define um livro para adicionar
       const book = { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: false };

       // Adiciona o membro à biblioteca
       library.adicionarMembro(member);

       // Adiciona o livro à biblioteca
       library.adicionarLivro(book);

       // Verifica se o livro foi emprestado (deve retornar true)
       library.emprestarLivro(book.id, member.id)

       // Verifica se o livro foi emprestado
       expect(library.devolverLivro(book.id)).toBeTruthy()
    })

    test('Deve Listar Livros Emprestados', () => {
        // Define uma lista de livros para adicionar
        const books = [
            { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: true }, 
            { id: 2, titulo: 'Harry Potter', autor: 'Árthur Conan Doyle', emprestado: false }
        ]

        // Adiciona os livros à biblioteca
        for(const book of books) {
            library.adicionarLivro(book);
        }

        // Verifica se o livro que retorna na listagem é o primeiro do array (emprestado)
        expect(library.listarLivrosEmprestados()).toStrictEqual([books[0]])
    })

    test('Deve Listar Livros Disponíveis', () => {
        // Define uma lista de livros para adicionar
        const books = [
            { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: true }, 
            { id: 2, titulo: 'Harry Potter', autor: 'Desconhecido', emprestado: false }
        ]

        // Adiciona os livros à biblioteca
        for(const book of books) {
            library.adicionarLivro(book);
        }

        // Verifica se o livro que retorna na listagem é o segundo do array (disponível)
        expect(library.listarLivrosDisponiveis()).toStrictEqual([books[1]])
    })

    test('Deve contar os livros', () => {
        // Define uma lista de livros para adicionar
        const books = [
            { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: true }, 
            { id: 2, titulo: 'Harry Potter', autor: 'Árthur Conan Doyle', emprestado: false }
        ]

        // Adiciona os livros à biblioteca
        for(const book of books) {
            library.adicionarLivro(book);
        }

        // Verifica se a quantidade é igual a quantidade adicionada
        expect(library.contarLivros()).toBe(2)
    })

    test('Deve contar os membros', () => {
        // Define um membro para adicionar
        const member = { id: 1, nome: 'Keniel'};

        // Adiciona o membro à biblioteca
        library.adicionarMembro(member);

        // Verifica se o número de membros é igual a quantidade adicionada
        expect(library.contarMembros()).toBe(1)
    })

    test('Deve listar os livros por autor', () => {
        // Define uma lista de livros para adicionar
        const books = [
            { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: true }, 
            { id: 2, titulo: 'Harry Potter', autor: 'Desconhecido', emprestado: false }
        ]

        // Adiciona os livros à biblioteca
        for(const book of books) {
            library.adicionarLivro(book);
        }

        // Verifica se o item que foi criado como emprestado retorna
        expect(library.listarLivrosPorAutor('Árthur Conan Doyle')).toStrictEqual([books[0]])
    })

    test('Deve listar os livros por genero', () => {
        // Define uma lista de livros para adicionar
        const books = [
            { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: true, genero: 'Drama' }, 
            { id: 2, titulo: 'Harry Potter', autor: 'Desconhecido', emprestado: false, genero: 'Fantasia' }
        ]

        // Adiciona os livros à biblioteca
        for(const book of books) {
            library.adicionarLivro(book);
        }

        // Verifica se o livro com o genero Drama retorna
        expect(library.listarLivrosPorGenero('Drama')).toStrictEqual([books[0]])
    })

    test('Deve atualizar uma informação de um livro', () => {
        // Define um livro para adicionar
       const book = { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: false };

       // Adiciona o livro à biblioteca
       library.adicionarLivro(book);

       // Atualiza o id do livro
       library.atualizarInformacaoLivro(book.id, {id:3})

       // Busca o livro com os dados atualizados
       const updatedBook = library.buscarLivroPorId(3)

        // Verifica se os dados do livro foram atualizados
       expect(updatedBook).toStrictEqual({ id: 3, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: false })
    })

    test('Deve listar os livros por ano', () => {
         // Define um livro para adicionar
       const book = { id: 1, titulo: 'Sherlock Holmes', autor: 'Árthur Conan Doyle', emprestado: false, ano: 1968 };

       // Adiciona o livro à biblioteca
       library.adicionarLivro(book);

       // Verifica se os livros com o ano retornam
       expect(library.listarLivrosPorAno(1968)).toStrictEqual([book])
    })
});
