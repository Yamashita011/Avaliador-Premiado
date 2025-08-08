let initialBalance = 20
const linkCheckout = {
    checkout: `https://mpago.la/1G84Rmo`,
    newWindow: false,
}

const videoInfo = {
    vid: "vid_65414caa1718ed000986ad43",
    src: "scr_65414caa1718ed000986ad43",
    script: "https://scripts.converteai.net/c05e5411-7f59-4fd9-9698-40c2c74d532b/players/65414caa1718ed000986ad43/player.js"
}


const option1 = [
    {
        img: "./src/assets/products/shoes-option1.png",
        mainQuestion: "De 0 a 5, que nota você dá para o design do novo Tênis Nike Invincible 3?",
        firstQuestion: "Em um tênis, você prefere conforto ou baixo-custo?",
        firstOptions: ["Conforto", "Baixo custo"],
        secondQuestion: "Você investiria R$1500 neste tênis?",
        secondOptions: ["Sim", "Não"]
    },

    {
        img: "./src/assets/products/shoes-option2.png",
        mainQuestion: "De 0 a 5, que nota você dá para o design do novo Tênis Adidas Future Pool?",
        firstQuestion: "Em um tênis, você prefere conforto ou baixo-custo?",
        firstOptions: ["Conforto", "Baixo custo"],
        secondQuestion: "Você investiria R$700 neste tênis?",
        secondOptions: ["Sim", "Não"]
    },
]

const option2 = [
    {
        img: "./src/assets/products/techs-option1.png",
        mainQuestion: "De 0 a 5, o que você achou do design do Novo Iphone 14?",
        firstQuestion: "Você possui ou já possuiu algum produto Apple?",
        firstOptions: ["Sim", "Não"],
        secondQuestion: "Você tem ou gostaria de ter o Novo Iphone",
        secondOptions: ["Gostaria", "Não gostaria"]
    },

    {
        img: "./src/assets/products/techs-option2.png",
        mainQuestion: "De 0 a 5, que nota você dá para o design do novo S23 Ultra?",
        firstQuestion: "Você possui ou já possuiu algum produto Samsung?",
        firstOptions: ["Sim", "Não"],
        secondQuestion: "Você tem ou gostaria de ter o Novo S23 Ultra?",
        secondOptions: ["Gostaria", "Não gostaria"]
    },
]

export default { initialBalance, option1, option2, linkCheckout, videoInfo }
