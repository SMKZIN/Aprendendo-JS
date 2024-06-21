// Interação com o usuario :

console.log("Olá mundo") // Printa Alguma coisa
window.alert("Minha Primeira Mensagem!") // Faz um alerta no site
window.confirm("Está gostando de JS?")  // Dá a opção de confirmar algo
window.prompt("Qual seu nome?")        // Abre uma caixa para voce digitar algo

// Variáveis :

var n1 = 5 // uma variavel tipo var n1 que recebe o valor 5
let n1 = "Samuel" // uma variavel tipo let n1 que recebe o tipo string

// Strings:

"Olá mundo" // sequencia de letras e caracteres
"SAMUEL" // sequencia de letras e caracteres

// Boolean :

true // Verdadeiro
false //Falso

// comando typeof :

typeof  6.5 // Diz o tipo de dado
typeof  6   // Diz o tipo de dado
typeof  "Google"  // Diz o tipo de dado
  
// tratamento de dados :

var nome = window.prompt("Qual é seu nome?") // atribuindo valor para variavel nome 
window.alert("Prazer em te conhecer , " + nome) // concatenação (+), junta strings
var n1 = window.prompt("Digite um numero:") // atribuindo valor para variavel n1, number
var n2 = window.prompt("Digite outro numero:") // atribuindo valor para variavel n2, number

// converter strings para tipo number :

var S = n1 + n2
Number.parseInt(n) // converte string em um numero inteiro
Number.parseFloat(n) // converte string em um numero Real
Number(n) // converte string em um numero

// converter number para tipo string :

String(n)  // converte string em um numero
n.tostring(n) // converte string em um numero

// Formatando Strings :

var s = "JavaScrip"
"Eu Estou aprendendo s " // Nao faz interpolação
"Eu estou aprendendo" + s // usa concatenação
`Eu estou aprendendo ${s}` // Usa template string
s.length // quantos caracteres a string tem
s.toLocaleUpperCase() // tudo para "MAIÚSCULAS"
s.toLocaleLowerCase() // tudo para "minusculas"

// Formatando numbers :

var n1 = 1543.5
n1.toFixed(2) // Exibe mais casas decimais para o tipo float
n1.toLocaleString("pt-BR", {style:"currency", currency: "BRL"} ) // comando usado para representar numeros tipo salario 