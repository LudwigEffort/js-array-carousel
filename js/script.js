const arrImages = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

// Assegno la const all'oggetto slider, viene fatto fuori dal ciclo per non ripere l'operazione
const eleSlider = document.querySelector('.slider-container')

// Con questo ciclio inietto gli elementi dell'array dentro l'HTML
for (let i = 0; i < arrImages.length; i++) {
    const eleImg = document.createElement('img');
    eleImg.src = arrImages[i];  //aggiungiamo il percorso all'elemento eleImg (in questo caso un'immagine)
    eleImg.classList.add('slider-img'); //aggiungiamo la classe all'elemento eleImg
    eleSlider.append(eleImg); //con append inseriamo l'img dentro lo slider
};

document.querySelector('.slider-img').classList.add('active');

//