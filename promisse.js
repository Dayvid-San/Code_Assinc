function pegarID(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(5)

        }, 1500)

    })
}

function buscarEmailBanco(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // Aqui tu poderias, talvez, colocar a lógica do banco lógica de busca no banco
            resolve("dayvidsantana@email.com.br")

        }, 2000)

    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const time = new Date()

            var deuErro = false;

            if(!deuErro){
                resolve({
                    time: time,
                    to: 'Derek'
                }) // Promessa Ok

            }
            else{
                reject('Fila cheia')

            }

        }, 4000)
    })
}



// PROMISSES ALINHADAS
pegarID()
.then((id)=>{

    buscarEmailBanco(id)
    .then((email)=>{

        enviarEmail("Olá! Como vai?", email)
        .then(()=>
        {
            console.log("Email enviado para o usuário com id: " + id)
            
        })
        .catch((err)=>
        {
            console.log("Houve um erro! =>" + err)

        })

    })

})









/*

const mensagem = 'Olá mundo!'
const email = 'derek@email.com'

enviarEmail(mensagem, email)
.then( ({time, to})=>{
    // dados está recebendo o json em resolve
    console.log('Aí sim! prometido e feito! E-mail enviado')
    console.log(`
    Time: ${time}
    to : ${to}
    `)

})
.catch((err)=>{
    console.log("Não enviou. Foi mal! Deu um erro => "+ err)

})

*/