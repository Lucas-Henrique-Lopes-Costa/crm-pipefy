const fetch = require('node-fetch');

let url = 'https://api.pipefy.com/graphql';
  
// GET DATA
const optionsR = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxOTk5MjMsImVtYWlsIjoiZHJtYXJjb3R1bGlvQGhvdG1haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDIzMDE3Mn19.OOY7pe78F3T4rQ4jzOmxmMowXSJTy1COii0EimH_9gCOM9D3iXKb1tKD3Se7q-8DHea30NTSqnNmgWp87QS72w'
  },
  body: JSON.stringify({
    query:
      `
      {
        cards(pipe_id: 302989282) {
          edges {
            node {
              id
              current_phase {
                name
                id
              }
              fields {
                value
              }
              child_relations {
                cards {
                  title
                  current_phase {
                    name
                  }
                }
              }
            }
          }
        }
      }
      `
  })
};

fetch(url, optionsR)
  .then(res => res.json())
  .then(data => {
    // Contato WhatsApp com o responsável
    for (let index = 0; index < data.data.cards.edges.length; index++) {
      const phase = data.data.cards.edges[index].node.current_phase.name;
      const name = data.data.cards.edges[index].node.fields[0].value.split(" ")[0];
      const number = "55" + data.data.cards.edges[index].node.fields[2].value.slice(4,6) + data.data.cards.edges[index].node.fields[2].value.slice(8).replace("-", "");
      let dataNumber = number.includes('@c.us') ? number : `${number}@c.us`;    

      if(phase == "Contato em WhatsApp"){
        let dataMessage = `Oi, ${name}, tudo bem?`;

        console.log("Enviando para: " + dataNumber)
        console.log("Mensagem: " + dataMessage)
        console.log("\n")

        // setTimeout(function() {
        //   client.sendMessage(dataNumber, dataMessage);
        // },1000 + Math.floor(Math.random() * 1000));
        
        // CHANGE
        const id = data.data.cards.edges[index].node.id;
        
        const optionsPhase = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxOTk5MjMsImVtYWlsIjoiZHJtYXJjb3R1bGlvQGhvdG1haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDIzMDE3Mn19.OOY7pe78F3T4rQ4jzOmxmMowXSJTy1COii0EimH_9gCOM9D3iXKb1tKD3Se7q-8DHea30NTSqnNmgWp87QS72w'
          },
          body: JSON.stringify({
            query:
              `
              mutation {
                moveCardToPhase(input: { card_id: "${id}", destination_phase_id: "318591630"}){
                  card{
                    id
                  }
                }
              }
              `
          })
        };

        fetch(url, optionsPhase)
        .then(res => res.json())
        .then(data => { console.log("Fase mudada") })
        .catch(err => console.error('error:' + err));
      }

      if(phase == "Marcados"){
        let dataMessage = `Oi, ${name}, confirmamos seu agradecemos! Agradecemos pela atenção, vamos entrar em contato em breve para te lembrar :)`;

        console.log("Enviando para: " + dataNumber)
        console.log("Mensagem: " + dataMessage)
        console.log("\n")

        // setTimeout(function() {
        //   client.sendMessage(dataNumber, dataMessage);
        // },1000 + Math.floor(Math.random() * 1000));
        
        // CHANGE
        const id = data.data.cards.edges[index].node.id;
        
        const optionsPhase = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxOTk5MjMsImVtYWlsIjoiZHJtYXJjb3R1bGlvQGhvdG1haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDIzMDE3Mn19.OOY7pe78F3T4rQ4jzOmxmMowXSJTy1COii0EimH_9gCOM9D3iXKb1tKD3Se7q-8DHea30NTSqnNmgWp87QS72w'
          },
          body: JSON.stringify({
            query:
              `
              mutation {
                moveCardToPhase(input: { card_id: "${id}", destination_phase_id: "318591631"}){
                  card{
                    id
                  }
                }
              }
              `
          })
        };

        fetch(url, optionsPhase)
        .then(res => res.json())
        .then(data => { console.log("Fase mudada") })
        .catch(err => console.error('error:' + err));
      }

      if(phase == "Agradecimento"){
        let dataMessage = `Olá!, ${name}! Agradecemos sua consulta hoje! Queremos saber o que você achou!! Avalie nosso atendimento: https://drmarcotulio.github.io/avaliacao/`;

        console.log("Enviando para: " + dataNumber)
        console.log("Mensagem: " + dataMessage)
        console.log("\n")

        // setTimeout(function() {
        //   client.sendMessage(dataNumber, dataMessage);
        // },1000 + Math.floor(Math.random() * 1000));
        
        // CHANGE
        const id = data.data.cards.edges[index].node.id;
        
        const optionsPhase = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxOTk5MjMsImVtYWlsIjoiZHJtYXJjb3R1bGlvQGhvdG1haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDIzMDE3Mn19.OOY7pe78F3T4rQ4jzOmxmMowXSJTy1COii0EimH_9gCOM9D3iXKb1tKD3Se7q-8DHea30NTSqnNmgWp87QS72w'
          },
          body: JSON.stringify({
            query:
              `
              mutation {
                moveCardToPhase(input: { card_id: "${id}", destination_phase_id: "318615548"}){
                  card{
                    id
                  }
                }
              }
              `
          })
        };

        fetch(url, optionsPhase)
        .then(res => res.json())
        .then(data => { console.log("Fase mudada") })
        .catch(err => console.error('error:' + err));
      }
    }
    
    // Lembrete do paciente
    const optionsP = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxOTk5MjMsImVtYWlsIjoiZHJtYXJjb3R1bGlvQGhvdG1haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDIzMDE3Mn19.OOY7pe78F3T4rQ4jzOmxmMowXSJTy1COii0EimH_9gCOM9D3iXKb1tKD3Se7q-8DHea30NTSqnNmgWp87QS72w'
      },
      body: JSON.stringify({
        query:
          `
          {
            cards(pipe_id: "302989283") {
              edges {
                node {
                  id
                  title
                  current_phase {
                    name
                  }
                  parent_relations {
                    cards {
                      title
                      fields {
                        value
                      }
                    }
                  }
                }
              }
            }
          }      
          `
      })
    };

    fetch(url, optionsP)
      .then(res => res.json())
      .then(data => {
        for (let index = 0; index < data.data.cards.edges.length; index++) {
          const phase = data.data.cards.edges[index].node.current_phase.name;
          const nameR = data.data.cards.edges[index].node.parent_relations[0].cards[0].title.split(" ")[0];
          const nameP = data.data.cards.edges[index].node.title.split(" ")[0];
          const number = 55 + data.data.cards.edges[index].node.parent_relations[0].cards[0].fields[2].value.slice(4,6) + data.data.cards.edges[0].node.parent_relations[0].cards[0].fields[2].value.slice(8).replace("-", "");
          let dataNumber = number.includes('@c.us') ? number : `${number}@c.us`;    

          console.log(phase)
          console.log(nameR)
          console.log(nameP)
          console.log(number)
          console.log("\n")

          switch (phase) {
            case "Lembrete":
              let dataMessage = `Oi, ${nameR}, tudo bem? Venho confirmar a consulta do ${nameP} hoje, está tudo ok?`;
            
              console.log("Enviando para: " + dataNumber)
              console.log("Mensagem: " + dataMessage)
              console.log("\n")
      
              // setTimeout(function() {
              //   client.sendMessage(dataNumber, dataMessage);
              // },1000 + Math.floor(Math.random() * 1000));

              // CHANGE
              const id = data.data.cards.edges[index].node.id;
              
              const optionsPhase = {
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  'content-type': 'application/json',
                  authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxOTk5MjMsImVtYWlsIjoiZHJtYXJjb3R1bGlvQGhvdG1haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDIzMDE3Mn19.OOY7pe78F3T4rQ4jzOmxmMowXSJTy1COii0EimH_9gCOM9D3iXKb1tKD3Se7q-8DHea30NTSqnNmgWp87QS72w'
                },
                body: JSON.stringify({
                  query:
                    `
                    mutation {
                      moveCardToPhase(input: { card_id: "${id}", destination_phase_id: "318594860"}){
                        card{
                          id
                        }
                      }
                    }
                    `
                })
              };

              fetch(url, optionsPhase)
              .then(res => res.json())
              .then(data => { console.log("Fase mudada") })
              .catch(err => console.error('error:' + err));
              break;
          
            default:
              break;
          }
        }
      })
      .catch(err => console.error('error:' + err));
  })
  .catch(err => console.error('error:' + err));