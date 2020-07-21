let img = document.querySelector('#img');
let topText = document.querySelector('#top');
let bottomText = document.querySelector('#bottom');
let form = document.querySelector('#addMeme');
let memeList = document.querySelector('#generated-memes');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let imageUrl = img.value;
    const newMeme = document.createElement('div');
    const upperText = document.createElement('h2');
    const lowerText = document.createElement('h2');

    lowerText.setAttribute('class', 'bottom-text');
    newMeme.style.backgroundImage = "url(" + imageUrl + ")";
    console.log(newMeme.style.backgroundImage);
    upperText.innerText = topText.value;
    lowerText.innerText = bottomText.value;

    newMeme.append(upperText);
    newMeme.append(lowerText);
    memeList.append(newMeme);

    img.value = '';
    topText.value = '';
    bottomText.value = '';
})


memeList.addEventListener('dblclick', function(e) {
    console.log(e.target);
    if(e.target.tagName === 'DIV'){
        e.target.remove();
    }
    if(e.target.tagName === 'H2') {
        e.target.parentElement.remove();
    }
});

