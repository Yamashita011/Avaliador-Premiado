import config from './config.js';


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("first_vote") !== "true") {
        localStorage.setItem("balance", `${config.initialBalance}`);
        const balanceHeader = document.getElementById('balance');
        balanceHeader.textContent = `${config.initialBalance.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}`;

        function getRandomNumber() {
            return Math.floor(Math.random() * 8) + 1;
        }

        const randomNumber = getRandomNumber();

        let option1ImgSrc, option2ImgSrc, optionType;

        if (randomNumber % 2 === 0) {
            option1ImgSrc = "./src/assets/brands/techs-option1.png";
            option2ImgSrc = "./src/assets/brands/techs-option2.png";
            optionType = "techs";
        } else {
            option1ImgSrc = "./src/assets/brands/shoes-option1.png";
            option2ImgSrc = "./src/assets/brands/shoes-option2.png";
            optionType = "shoes";
        }

        const main = document.createElement("main");
        main.className = "primary__main";

        const section = document.createElement("section");
        section.className = "primary__pool";

        const container = document.createElement("div");
        container.className = "primary__pool__container";

        const title = document.createElement("h3");
        title.className = "primary__pool__title";
        title.textContent = "Qual você prefere?";

        const voteDiv = document.createElement("div");
        voteDiv.className = "primary__pool__vote";

        const option1Img = document.createElement("img");
        option1Img.className = "primary__pool__option";
        option1Img.src = option1ImgSrc;
        option1Img.alt = "Opção 1";

        const versus = document.createElement("p");
        versus.className = "versus";
        versus.textContent = "x";

        const option2Img = document.createElement("img");
        option2Img.className = "primary__pool__option";
        option2Img.src = option2ImgSrc;
        option2Img.alt = "Opção 2";

        const description = document.createElement("p");
        description.className = "primary__pool__description";
        description.textContent =
            "Escolha qual você prefere e ganhe dinheiro respondendo a pesquisa da marca!";

        const buttonDiv = document.createElement("div");
        buttonDiv.className = "primary__pool__button";

        const buttonP = document.createElement("p");
        buttonP.textContent = `Aproveite, você já ganhou ${config.initialBalance.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })} para começar!`;

        voteDiv.appendChild(option1Img);
        voteDiv.appendChild(versus);
        voteDiv.appendChild(option2Img);

        container.appendChild(title);
        container.appendChild(voteDiv);
        container.appendChild(description);

        buttonDiv.appendChild(buttonP);

        section.appendChild(container);
        section.appendChild(buttonDiv);

        main.appendChild(section);

        document.body.appendChild(main);

        const options = document.querySelectorAll('.primary__pool__option');
        options.forEach((option, index) => {
            option.addEventListener("click", () => {
                toSecondPool(optionType, index);
            });
        });
    } else {
        toThirdPool()
    }
});



const toSecondPool = (optionType, imageIndex) => {
    const main = document.querySelector("main");
    main.remove();

    const optionData = optionType === "shoes" ? config.option1[imageIndex] : config.option2[imageIndex];

    const secondaryMain = document.createElement("main");
    secondaryMain.className = "secondary__main";

    const section = document.createElement("section");
    section.className = "secondary__pool";

    const imageDiv = document.createElement("div");
    imageDiv.className = "secondary__pool__image";

    const image = document.createElement("img");
    image.src = optionData.img;
    image.alt = "Imagem da opção";

    imageDiv.appendChild(image);
    section.appendChild(imageDiv);

    const mainQuestion = document.createElement("p");
    mainQuestion.className = "secondary__pool__mainQuestion";
    mainQuestion.textContent = optionData.mainQuestion;

    section.appendChild(mainQuestion);

    const mainAnswerDiv = document.createElement("div");
    mainAnswerDiv.className = "secondary__pool__mainAnswer";

    const label1 = document.createElement("label");
    label1.className = "material-icon-radio red";
    const input1 = document.createElement("input");
    input1.type = "radio";
    input1.name = "satisfaction";
    input1.value = "very_dissatisfied";
    const span1 = document.createElement("span");
    span1.className = "material-symbols-outlined";
    span1.textContent = "sentiment_very_dissatisfied";
    label1.appendChild(input1);
    label1.appendChild(span1);
    mainAnswerDiv.appendChild(label1);

    const label2 = document.createElement("label");
    label2.className = "material-icon-radio orange";
    const input2 = document.createElement("input");
    input2.type = "radio";
    input2.name = "satisfaction";
    input2.value = "dissatisfied";
    const span2 = document.createElement("span");
    span2.className = "material-symbols-outlined";
    span2.textContent = "sentiment_dissatisfied";
    label2.appendChild(input2);
    label2.appendChild(span2);
    mainAnswerDiv.appendChild(label2);

    const label3 = document.createElement("label");
    label3.className = "material-icon-radio yellow";
    const input3 = document.createElement("input");
    input3.type = "radio";
    input3.name = "satisfaction";
    input3.value = "neutral";
    const span3 = document.createElement("span");
    span3.className = "material-symbols-outlined";
    span3.textContent = "sentiment_neutral";
    label3.appendChild(input3);
    label3.appendChild(span3);
    mainAnswerDiv.appendChild(label3);

    const label4 = document.createElement("label");
    label4.className = "material-icon-radio green";
    const input4 = document.createElement("input");
    input4.type = "radio";
    input4.name = "satisfaction";
    input4.value = "satisfied";
    const span4 = document.createElement("span");
    span4.className = "material-symbols-outlined";
    span4.textContent = "sentiment_satisfied";
    label4.appendChild(input4);
    label4.appendChild(span4);
    mainAnswerDiv.appendChild(label4);

    const label5 = document.createElement("label");
    label5.className = "material-icon-radio blue";
    const input5 = document.createElement("input");
    input5.type = "radio";
    input5.name = "satisfaction";
    input5.value = "very_satisfied";
    const span5 = document.createElement("span");
    span5.className = "material-symbols-outlined";
    span5.textContent = "sentiment_very_satisfied";
    label5.appendChild(input5);
    label5.appendChild(span5);
    mainAnswerDiv.appendChild(label5);

    section.appendChild(mainAnswerDiv);

    const firstQuestion = document.createElement("p");
    firstQuestion.className = "secondary__pool__firstQuestion";
    firstQuestion.textContent = optionData.firstQuestion;

    section.appendChild(firstQuestion);

    const firstOptionsDiv = document.createElement("div");
    firstOptionsDiv.className = "secondary__pool__firstOptions";

    const firstOptionLabel = document.createElement("label");
    firstOptionLabel.innerHTML = `
  <input type="radio" name="firstQuestionRadio" value="first">
  <p class="option-text">${optionData.firstOptions[0]}</p>
`;
    firstOptionsDiv.appendChild(firstOptionLabel);

    const secondOptionLabel = document.createElement("label");
    secondOptionLabel.innerHTML = `
  <input type="radio" name="firstQuestionRadio" value="second">
  <p class="option-text">${optionData.firstOptions[1]}</p>
`;
    firstOptionsDiv.appendChild(secondOptionLabel);

    section.appendChild(firstOptionsDiv);

    const secondQuestion = document.createElement("p");
    secondQuestion.className = "secondary__pool__secondQuestion";
    secondQuestion.textContent = optionData.secondQuestion;

    section.appendChild(secondQuestion);

    const secondOptionsDiv = document.createElement("div");
    secondOptionsDiv.className = "secondary__pool__secondOptions";

    const thirdOptionLabel = document.createElement("label");
    thirdOptionLabel.innerHTML = `
  <input type="radio" name="secondQuestionRadio" value="first">
  <p class="option-text">${optionData.secondOptions[0]}</p>
`;
    secondOptionsDiv.appendChild(thirdOptionLabel);

    const fourthOptionLabel = document.createElement("label");
    fourthOptionLabel.innerHTML = `
  <input type="radio" name="secondQuestionRadio" value="second">
  <p class="option-text">${optionData.secondOptions[1]}</p>
`;
    secondOptionsDiv.appendChild(fourthOptionLabel);

    section.appendChild(secondOptionsDiv);


    const submitDiv = document.createElement("div");
    submitDiv.className = "submit__pool";

    const submitIcon = document.createElement("span");
    submitIcon.className = "material-symbols-outlined";
    submitIcon.textContent = "send";

    const submitText = document.createElement("p");
    submitText.textContent = "Enviar Respostas";

    submitDiv.appendChild(submitIcon);
    submitDiv.appendChild(submitText);
    section.appendChild(submitDiv);


    function areAllRadioInputsChecked() {
        const satisfactionInputs = document.querySelectorAll('input[name="satisfaction"]');
        const firstQuestionRadioInputs = document.querySelectorAll('input[name="firstQuestionRadio"]');
        const secondQuestionRadioInputs = document.querySelectorAll('input[name="secondQuestionRadio"]');

        return (
            Array.from(satisfactionInputs).some(input => input.checked) &&
            Array.from(firstQuestionRadioInputs).some(input => input.checked) &&
            Array.from(secondQuestionRadioInputs).some(input => input.checked)
        );
    }

    submitDiv.addEventListener("click", () => {
        if (areAllRadioInputsChecked()) {
            submitModal();
        }
    });

    secondaryMain.appendChild(section);
    document.body.appendChild(secondaryMain);
};

const submitVote = () => {
    localStorage.setItem("balance", "39.72")
    localStorage.setItem("first_vote", "true")

    toVideoPage()
}


const submitModal = () => {
    const balance = document.getElementById("balance")
    const newValue = `39.72`
    balance.innerText = `${Number(newValue).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`

    localStorage.setItem("balance", "39.72")
    localStorage.setItem("first_vote", "true")

    const dialog = document.createElement('dialog');
    dialog.setAttribute('open', 'true');

    const img = document.createElement('img');
    img.setAttribute('class', 'third__pool__verified');
    img.setAttribute('src', './src/assets/verified.gif');
    img.setAttribute('alt', 'Selo de verificado animado com brilhos');

    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'third__pool__congratulations');
    h3.textContent = 'Parabéns!';

    const p1 = document.createElement('p');
    p1.setAttribute('class', 'third__pool__description');
    p1.textContent = 'Você acaba de ganhar R$19,72 do Avaliador Premiado por ter respondido a pesquisa';

    const p2 = document.createElement('p');
    p2.setAttribute('class', 'third__pool__description');
    p2.textContent = 'Para liberar o saldo assista o vídeo com as instruções clicando no botão abaixo';

    const div = document.createElement('div');
    div.setAttribute('class', 'modal__button toVideo');

    const img2 = document.createElement('img');
    img2.setAttribute('src', './src/assets/svg/pix.svg');

    const p3 = document.createElement('p');
    p3.textContent = 'ASSISTIR VÍDEO';

    div.appendChild(img2);
    div.appendChild(p3);

    dialog.appendChild(img);
    dialog.appendChild(h3);
    dialog.appendChild(p1);
    dialog.appendChild(p2);
    dialog.appendChild(div);

    document.body.appendChild(dialog);

    const buttonVote = document.querySelector(".modal__button")
    buttonVote.addEventListener("click", () => {
        dialog.remove()
        document.querySelector("main").remove()

        submitVote()
    })


}


const toThirdPool = () => {

    const balanceData = localStorage.getItem("balance")
    const balance = document.getElementById("balance")
    balance.innerHTML = `${Number(balanceData).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`



    const thirdMain = document.createElement("main");
    thirdMain.className = "third__main";

    const thirdSection = document.createElement("section");
    thirdSection.className = "third__pool";

    const verifiedImage = document.createElement("img");
    verifiedImage.className = "third__pool__verified";
    verifiedImage.src = "./src/assets/verified.gif";

    const congratulationsTitle = document.createElement("h3");
    congratulationsTitle.className = "third__pool__congratulations";
    congratulationsTitle.textContent = "Parabéns!";

    const description = document.createElement("p");
    description.className = "third__pool__description";
    description.textContent = "Para liberar o app assista ao vídeo com as instruções clicando no botão abaixo";

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "third__pool__button toVideo";

    const pixImage = document.createElement("img");
    pixImage.src = "./src/assets/svg/pix.svg";

    const buttonText = document.createElement("p");
    buttonText.textContent = "ASSISTIR VÍDEO";

    buttonDiv.appendChild(pixImage);
    buttonDiv.appendChild(buttonText);

    thirdSection.appendChild(verifiedImage);
    thirdSection.appendChild(congratulationsTitle);
    thirdSection.appendChild(description);
    thirdSection.appendChild(buttonDiv);

    thirdMain.appendChild(thirdSection);
    document.body.appendChild(thirdMain);

    buttonDiv.addEventListener("click", () => {
        thirdMain.remove()
        toVideoPage()
    })
};

const toVideoPage = () => {

    const balance = document.getElementById('balance')
    const value = localStorage.getItem('balance')
    balance.innerText = `${parseFloat(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`


    const main = document.createElement('main');
    main.setAttribute('class', 'video__page');

    const section = document.createElement('section');
    section.setAttribute('class', 'video__page__container');

    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'video__page__title');
    h3.innerHTML = 'Ganhe de <span>3 a 5 salários por mês</span> avaliando produtos com esse <span>novo aplicativo</span>';

    const videoDiv = document.createElement('div');
    videoDiv.setAttribute('class', 'video__page__video');

    const videoContainer = document.createElement('div');
    videoContainer.setAttribute('id', `${config.videoInfo.vid}`);
    videoContainer.setAttribute('style', 'width:100%;max-width:1280px;border-radius: 0.7rem;');

    const videoScript = document.createElement('script');
    videoScript.setAttribute('type', 'text/javascript');
    videoScript.setAttribute('id', `${config.videoInfo.src}`);
    videoScript.textContent = `var s = document.createElement("script"); s.src = "${config.videoInfo.script}"; s.async = true; document.head.appendChild(s);`;

    const videoDescriptionDiv = document.createElement('div');
    videoDescriptionDiv.setAttribute('class', 'video__page__description');
    const descriptionIcon = document.createElement('span');
    descriptionIcon.setAttribute('class', 'material-symbols-outlined');
    descriptionIcon.textContent = 'headphones';
    const descriptionText = document.createElement('p');
    descriptionText.textContent = 'Assista esse breve vídeo com atenção.';
    videoDescriptionDiv.appendChild(descriptionIcon);
    videoDescriptionDiv.appendChild(descriptionText);

    const buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'button__checkout');
    const buttonText = document.createElement('p');
    buttonText.textContent = 'QUERO ACESSAR AO AVALIADOR PREMIADO';
    buttonDiv.appendChild(buttonText);

    const securityText = document.createElement('p');
    securityText.setAttribute('class', 'video__page__security');
    const securityIcon = document.createElement('span');
    securityIcon.setAttribute('style', 'font-weight: 800;');
    securityIcon.setAttribute('class', 'material-symbols-outlined');
    securityIcon.textContent = 'lock';
    securityText.appendChild(securityIcon);
    securityText.textContent = 'Você será enviado para um ambiente totalmente seguro.';

    videoDiv.appendChild(videoContainer);
    videoDiv.appendChild(videoScript);

    section.appendChild(h3);
    section.appendChild(videoDiv);
    section.appendChild(videoDescriptionDiv);
    section.appendChild(buttonDiv);
    section.appendChild(securityText);

    main.appendChild(section);

    document.body.appendChild(main);

    buttonDiv.addEventListener("click", () => {
        if (config.linkCheckout.checkout) {
            if (config.linkCheckout.newWindow) {
                window.open(config.linkCheckout.checkout, '_blank');
            } else {
                window.location.href = config.linkCheckout.checkout;
            }
        }
    })
}




