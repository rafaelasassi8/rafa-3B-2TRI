const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está pronto para o desafio?",
        alternativas: [
            {texto: "Sim",
            afirmacao: ""
            },{
            texto: "Lógico",
            afirmacao: ""
            }
        ]
    },
    {
    enunciado: "Como você lida com conflitos?    ",
    alternativas: [
        {texto: "Converso e tento entender todos os lados.",
        afirmacao: "Você valoriza o equilíbrio e tende a ser como Elena Gilbert."
        },{
        texto: "Faço o que for necessário, sem remorso .",
        afirmacao: "Seu brilho e criatividaDecidida e intensa, estilo Klaus Mikaelson. "
        },{
        texto: "Me afasto e deixo que o tempo resolva",
        afirmacao: "Reservada como Stefan Salvatore, que prefere evitar o confronto.. "
        },
        {texto: "Encaro de frente e tomo o controle.",
        afirmacao: "Dominante e estratégica, como Rebekah Mikaelson."
        },
         
    ]
    },
    {
    enunciado: "Qual desses poderes te atrai mais?",
    alternativas: [
        {texto: "Controle mental",
        afirmacao: "Você gosta de liderar e convencer, como Damon."
        },{
        texto: "Imortalidade e força extrema",
        afirmacao: "Busca poder sem limites, como Klaus."
        },{
        texto: "Cura acelerada",
        afirmacao: "Valoriza a resiliência, como Caroline Forbes."
        },{
          texto: "Transformar outros seres",
        afirmacao: "Gosta de influenciar destinos, como Elijah."
        },
   
    ]
    },
    {
        enunciado: "Como você descreveria seu estilo?",
        alternativas: [
            {texto: "Clássico e elegante",
            afirmacao: "Sofisticada como Elijah Mikaelson. "
            },{
            texto: "Misterioso e ousado",
            afirmacao: "Enigmática como Katherine Pierce."
            },
           {texto: "Despojado e moderno",
            afirmacao: "Livre como Jeremy Gilbert. "
            },{
            texto: "Vintage e dramático",
            afirmacao: "Intensa como Damon Salvatore."
            },
    ]
    },
    {
        enunciado: "O que é mais importante para você?",
        alternativas: [
            {texto: "Amor verdadeiro",
            afirmacao: "Romântica como Elena."
            },{
            texto: "Poder e respeito",
            afirmacao: "Ambiciosa como Klaus."
            },{
            texto: " Liberdade e independência",
            afirmacao: "Autêntica como Caroline. "
            },
            {texto: "Lealdade da família",
            afirmacao: "Fiel como Rebekah. "
            },
    ]
    },
    {
        enunciado: "Qual seria sua maior fraqueza como vampiro?",
        alternativas: [
            {texto: "Sentimentos humanos",
            afirmacao: "Sensível como Stefan. "
            },{
            texto: "Impulsividade",
            afirmacao: "Intensa como Damon."
            },{
            texto: "Vontade de se sacrificar pelos outros",
            afirmacao: "Altruísta como Bonnie."
            },{
            texto: "Orgulho",
            afirmacao: "Arrogante mas firme, como Klaus "
            }
    ]
    },
    {
        enunciado: "Com quem você se parece mais emocionalmente?",
        alternativas: [
            {texto: "Elena Gilbert ",
            afirmacao: "sensível e corajosa"
            },{
            texto: "Klaus Mikaelson",
            afirmacao: "intenso e complexo"
            },{
            texto: "Damon Salvatore",
            afirmacao: "apaixonado e irônico"
            },{
                texto: "Rebekah Mikaelson",
                afirmacao: "sonhadora e decidida"
               },
           ]
       
       },
       ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta(){
        if(atual >= perguntas.length){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntas[atual].enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
        }
    
    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcaoSelecionada){
        const afirmacao = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacao + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado(){
        caixaPerguntas.textContent = "Sobre sua personalidade...";
        caixaPerguntas.style.color = "#db1313";
        textoResultado.textContent = historiaFinal;
        textoResultado.style.color = "#ffffff";
        caixaAlternativas.textContent = "";
    }

    mostraPergunta();