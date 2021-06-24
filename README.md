# Desafio Warren

## Contexto
O desafio será implementar uma tela de lista de transações apresentando os principais dados relacionado a cada uma delas, ao clicar em uma transação será exibido um modal contendo os detalhes desta transação. O desafio deverá conter as seguintes funcionalidades:

- Lista de transações agrupada por data ✅
- Filtro por título ✅
- Filtro por status ✅
- Modal contendo os detalhes da transação ✅
<br>
 <br>
----

## Como Rodar o projeto localmente?

 - Basta dar git clone no repositório, abrir o console dentro da pasta e primeiramente digitar `yarn` para baixar todas as dependencias utilizadas projeto.

 - Após isso, digite no terminal `yarn start` na qual irá abrir uma janela no seu navegador padrão na porta local 3000.
<br>
 <br>
 ---
 ## Desafios
<br>
 <strong> - Lista de transações agrupadas por data </strong> 
 <br>
 <br>
 Para esta funcionalidade, eu fiz uma função na qual recebe os dados que vem numa prop, e essa função verifica se um estado que está no componente está true ou false, se estiver true ele ordena o array de forma crescente e false descrente. Coloquei chamada dessa função no return para sempre retornar o array e em seguida fiz o map, mostrando os dados na tela.
<br>
<br>
 <strong> - Filtro por título </strong> 
 <br>
 <br>
Nesse caso, coloquei um escutador que fica ouvindo cada digito que entra no input e envia isso para uma função que faz um Rexep e um foreach comparando se o que tiver na variavel regexp for igual ao elemento de titulo dentro do array de objetos, se fim, fará push desse objeto em um novo array e esse novo array é copiado para um estado que está fora da função. Gerando uma cópia do estado original que vai para o componente de tabela como uma prop.

<br>
<br>
 <strong> - Filtro por status </strong> 
 <br>
 <br>
 Bem parecido com o anterior, coloquei um escutador no input de select que recebe a função que verifica qual select que está chegando nela e copia pra um novo array, e esse array de objetos substitui o que está renderizado inicialmente.