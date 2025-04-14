# Um gerador de QR Code e Senhas

Projeto feito com Nodejs que transforma links em QR Code e cria senhas aleatórias, diratamente do terminal.

### Arquitetura

O projeto possui 2 camadas:

- Prompts Schemas
- Services

O controller `index.js` depende de um prompt dado ao usuário, onde entra o `Prompts Schemas`.

O Prompt Schema é responsável por receber as respostas do usário, de forma que, ao selecionar o serviço desejado, ele devolva a resposta.

Os Services, são responsáveis pela lógica da aplicação, onde o QR Code e o gerador de senhas estão funcionando.

![image](https://github.com/user-attachments/assets/f779769a-c681-4e82-9c20-2384024ad29e)

### Lógica

Ao selecionar o serviço de QR Code, o prompt necessita de um link para que o QR Code seja gerado. Ao copiar o link, pode ser gerado tanto em formato de imagem (O que deixa maior), quanto em formato do terminal.

Na opção de Password, no mesmo instante que este serviço é selecionado, o mesmo automáticamente gera uma senha forte, com letras maiúsculas, minúsculas, caracteres especiais e números.
