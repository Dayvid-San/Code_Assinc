# Programação Assíncrona

Enquanto que na programa programação **síncrona** o script lê linha por linha, ou seja, o que está abaixo apenas será execultado depois que a linha acima finalizar, dessa forma **bloqueando** o fluxo, com a programação **assíncrona** todo o script é execultado ao **mesmo tempo**, independente da ordem.

Evolução:<br>
Callbacks => Promise => async/await <br>
Dá para dizer que uma é o aperfeiçoamento da outra.<br>

## Callbacks
Função ligada o um metodo assícrono. Quando o metodo assícrono é concluído, a função Callback é chamada. <br>
Também é possível adicionar parametros a função callback.


## Promisse
Duas coisas podem acondecer com uma **Promise** (Promessa), ela pode ser cumprida ou não.<br>
````js
email => Resolvida: "Ok" - Reject: "Falha"

save => Resolve: "Dado salvo" - Reject: "Ocorreu um problema. Foi mal!"

````

Para pegar os dados de uma promisse, deve-se recebe-los através do paramentro do then.<br>

````js
pegarUsuarios().then((usuarios) => {
    console.log(usuarios)
})
````


- Tu podes pôr uma promise dentro da outra
- Você não é obrigado a usar um then
- Evitar usar Promisses alinhadas **Promisse hell**


## Async/Await

Resolve o problema da **Promisse hell**.<br>
É uma forma de escrever codigo assicrono em um estilo sincrono.<br>

O **Await** deve ficar em uma função especial. Exemplo:

````js
async function principal() {
    var usuarios = await pegarUsuarios();
    
}
````

- Um porém: o **await**  bloqueia o fluxo do programa