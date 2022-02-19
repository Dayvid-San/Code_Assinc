
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

            var deuErro = true;

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

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve([
                {name: "Dayvid", lang: "JS"},
                {name: "Derek", lang: "C#"},
                {name: "Daniel", lang: "Java"}
    
            ])
        }, 10000);
    })
}



async function principal() {
    var usuarios = await pegarUsuarios();
    console.log(usuarios);

}

// principal();

async function especial() {
    var id = await pegarID();
    var email = await buscarEmailBanco(id);

    
    try{
        await enviarEmail("Olá! Como vai?", email);
        console.log("Email enviado com sucesso!")

    }
    catch(err){
        console.log("Ocorreu um erro => " + err)

    }

}

especial();