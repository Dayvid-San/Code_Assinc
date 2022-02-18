// Simulação de envio de email
function enviarEmail(corpoEmail, destinatario, callback){
    setTimeout(()=>{
        console.log(`
        De: Dayvid Santana
        Para: ${destinatario}
        --------------------------
        ${corpoEmail}
        --------------------------
        `)
        callback()
    },5000)
}

class Destino{
    constructor(){
        this.nome
        this.email
    }
}
const destino = new Destino
destino.nome = 'Derek'
destino.email = 'derek@email.com'

const mensagem = `Opa! fala aí, ${destino.nome}! Como você está?`





console.log('Inicio de envio de e-mail')
enviarEmail(mensagem, destino.email, ()=>{
    console.log('Seu e-mail foi enviado, Deve chegar em minutos'),
    console.log('Tudo OK!!')
})
