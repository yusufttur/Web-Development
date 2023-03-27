// index.html -------------------------------------------------------

// pTags = document.getElementsByTagName('p'); // HTMLCollection(2) [p, p]

// headline = document.getElementById('headline'); // <h1 id="headline">My First Bootstrap Page</h1>

// text1 = document.getElementsByClassName('text1'); // HTMLCollection(2) [p.text1, p.text1]

// console.log(text1);

// text2 = document.querySelectorAll('.text2');
// console.log(text2); // NodeList(2) [p.text2, p.text2]

// text2_1 = document.querySelector('.text2');
// console.log(text2_1); // <p class="text2">This is second text</p>

// p_header_2 = document.querySelectorAll('#secondSection p');
// console.log(p_header_2); // NodeList(2) [p.text1, p.text2]

//headline.innerText = 'New Headline ' + new Date().getFullYear();

codeIcon = document.querySelector('#icon');
codeIcon.style.width = '100px';
codeIcon.setAttribute('src', 'pumpkin2.png');
codeIcon.setAttribute('src', 'pumpkin.png');
codeIcon.style.borderRadius = '10px';
