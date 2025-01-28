// scroll to Anime & Manga //
const toAnimeButton = document.querySelectorAll('.scroll-to-Anime');

toAnimeButton.forEach(button => {
    button.addEventListener('click', function(){
        document.getElementById("scroll-anime").scrollIntoView({behavior:"smooth"});
    });
});

//scroll to top
const toTopButton = document.querySelectorAll('.scroll-to-top');

toTopButton.forEach(button => {
    button.addEventListener('click', function(){
        document.getElementById("scrolltop").scrollIntoView({behavior:"smooth"});
    });
});

//Scroll to Pets//
const toPetsButton = document.querySelectorAll('.scroll-to-pets');

toPetsButton.forEach(button => {
    button.addEventListener('click', function(){
        document.getElementById("scroll-pets").scrollIntoView({behavior:"smooth"});
    });
});


//Scroll to Video Games//

/* 

const toPetsButton = document.querySelectorAll('.scroll-to-pets');

toPetsButton.forEach(button => {
    button.addEventListener('click', function(){
        document.getElementById("scroll-pets").scrollIntoView({behavior:"smooth"});
    });
});


*/
