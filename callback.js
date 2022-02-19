// Simulação de envio de email
function enviarEmail(corpoEmail, destinatario, callback){

    setTimeout(()=>{

        // Corpo da mensagem
        console.log(`
        De: Dayvid Santana
        Para: ${destinatario}
        --------------------------
        ${corpoEmail}
        --------------------------
        `)

        const deuErro = false
        
        if(deuErro){
            callback('O envio do e-mail falhou')

        }
        else{
            callback()

        }

    },5000)

}



class Destino{
    constructor()
    {
        this.nome
        this.email
    }
}
const destino = new Destino
destino.nome = 'Derek'
destino.email = 'derek@email.com'

const mensagem = `Opa! fala aí, ${destino.nome}! Como você está?`





console.log('Inicio de envio de e-mail')
enviarEmail(mensagem, destino.email, (erro)=>{

    if(erro == undefined){
        
        newcallback = (status, amount, tempo)=>
        {
            console.log('Seu e-mail foi enviado, Deve chegar em minutos'),
            console.log(`
                Status: ${status}
                Contatos: ${amount}
                Tempo: ${tempo}
            `)

        }
        return newcallback('Tudo pronto', 8, 5+'s')

    }
    else{
        console.log('Ocorreu um erro: ' + erro)

    }
    
})
