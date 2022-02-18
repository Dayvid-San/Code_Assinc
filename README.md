# Programação Assíncrona

Enquanto que na programa programação **síncrona** o script lê linha por linha, ou seja, o que está abaixo apenas será execultado depois que a linha acima finalizar, dessa forma **bloqueando** o fluxo, com a programação **assíncrona** todo o script é execultado ao **mesmo tempo**, independente da ordem.

Evolução:<br>
Callbacks => Promise => async/await <br>
Dá para dizer que uma é o aperfeiçoamento da outra.<br>

## Callbacks
Função ligada o um metodo assícrono. Quando o metodo assícrono é concluído, a função Callback é chamada. <br>
Também é possível adicionar parametros a função callback.