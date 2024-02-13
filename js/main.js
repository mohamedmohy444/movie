var bar = document.getElementById('menu');

function shownav() {
    bar.innerHTML = `<i onclick="hidenav()" class="fa-solid fa-xmark fa-2x"></i>`;
    linksDown();
    document.querySelector('nav').classList.add("start-0");

}

function hidenav() {
    bar.innerHTML = `<i onclick="shownav()" class="fa-solid fa-bars fa-2x"></i>`;
    linksUp();
    document.querySelector('nav').classList.remove("start-0");
}

function linksDown() {
    $('.link1').slideDown(700);
    $('.link2').slideDown(800);
    $('.link3').slideDown(900);
    $('.link4').slideDown(100);
    $('.link5').slideDown(1100);
    $('.link6').slideDown(1200);
}

function linksUp() {
    $('.link1').slideUp(700);
    $('.link2').slideUp(800);
    $('.link3').slideUp(900);
    $('.link4').slideUp(100);
    $('.link5').slideUp(1100);
    $('.link6').slideUp(1200);
}


var data = [];
nowPlayingfilms();
async function nowPlayingfilms() {
    var trend = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var res = await trend.json();

    data = res.results;
    showMovies();
}

function showMovies() {
    var cartona = "";

    for (var i = 0; i < data.length; i++) {
        cartona += `
        <div class="col-lg-4 col-md-6 pt-5 px-5 ">
                    <div class="item overflow-hidden position-relative">
                        <figure>
                            <img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt="film photo" class="w-100">
                        </figure>
                        <div class="overlay bg-black bg-opacity-75 position-absolute start-0 end-0 top-0 bottom-0 text-white p-4">
                            <h2 class="text-center">${getname(i)}</h2>
                            <p>${data[i].overview}</p>
                            <h4>release date: <span class="date">${getdate(i)}</span></h4>
                            <div class="stars">
                                stars
                            </div>
                            <h5 style="width: 40px; height: 40px;" class="border border-success rounded-circle d-flex justify-content-center align-items-center">${data[i].vote_average}</h5>
                        </div>
                    </div>
                </div>
        `
    }

    document.querySelector('.row').innerHTML = cartona;
}

function getname(i) {
    if (data[i].name != undefined) {
        return data[i].name;
    }
    else {
        return data[i].title;
    }
}
function getdate(i) {
    if (data[i].first_air_date != undefined) {
        return data[i].first_air_date;
    }
    else {
        return data[i].release_date;
    }
}


async function popularMovies() {
    var popular = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var popuResult = await popular.json();


    data = popuResult.results;
    showMovies();
}

async function topRatedMovies() {
    var topRated = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var topRatedResult = await topRated.json();


    data = topRatedResult.results;
    showMovies();
}

async function trendingMovies() {
    var trending = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var trendingResult = await trending.json();


    data = trendingResult.results;
    showMovies();
}

async function upCamingMovies() {
    var upCaming = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var upCamingResult = await upCaming.json();


    data = upCamingResult.results;
    showMovies();
}


var valueOfSearch = document.getElementById('search');
function search() {

    var cartona = "";

    for (var i = 0; i < data.length; i++) {
        if (getname(i).toLowerCase().includes(valueOfSearch.value.toLowerCase())) {
            cartona += `
                <div class="col-4 pt-5 px-5 ">
                <div class="item overflow-hidden position-relative">
                    <figure>
                        <img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt="film photo" class="w-100">
                    </figure>
                    <div class="overlay bg-black bg-opacity-75 position-absolute start-0 end-0 top-0 bottom-0 text-white p-4">
                        <h2 class="text-center">${getname(i)}</h2>
                        <p>${data[i].overview}</p>
                        <h4>release date: <span class="date">${getdate(i)}</span></h4>
                        <div class="stars">
                            stars
                        </div>
                        <h5 style="width: 40px; height: 40px;" class="border border-success rounded-circle d-flex justify-content-center align-items-center">${data[i].vote_average}</h5>
                    </div>
                </div>
            </div>       
                
                `
        }

    }
    document.querySelector('.row').innerHTML = cartona;

}

valueOfSearch.addEventListener('keyup', search);


$(window).scroll(function () {

    if ($(window).scrollTop() > $('.content').offset().top) {
        $('.buttontotop').fadeIn(1000).css('display', 'flex');
    } else {
        $('.buttontotop').fadeOut(500);
    }

})

$('.buttontotop').click(function(){
    $(window).scrollTop(0);
})


var visible_nav = $('.visible-nav');
var logo = $('nav>ul .logo');
var icons = $('nav>ul .icons');
var menu = $('nav>ul #menu');

window.onload = function () {

    if (window.innerWidth < 993) {
        visible_nav.css('background-color', 'transparent').css('justify-content', 'center')
        logo.css('display', 'none');
        icons.css('display', 'none');
        menu.css('color', 'white');
    }

}


window.onresize = function () {

    if (window.innerWidth < 993) {
        visible_nav.css('background-color', 'transparent').css('justify-content', 'center')
        logo.fadeOut(500);
        icons.fadeOut(500);
        menu.css('color', 'white');
    } else {
        visible_nav.css('background-color', 'white').css('justify-content', 'space-between')
        logo.fadeIn(500);
        icons.fadeIn(500);
        menu.css('color', 'black');
    }


}


//!=================contact===================
//!===========================================
//!===========================================


var regixName = /^[A-Z][a-zA-Z0-9 ]{4,12}[a-zA-Z0-9]$/i;
var regiMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
var regixPhone = /^(?:\+?20)?(?:0)?1[0-9]{9}$/i;
var regixAge = /^(1[89]|[2-5][0-9])$/i;
var regixPasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


var nameInputV = document.getElementById('name');
var mailInputV = document.getElementById('mail');
var phoneInputV = document.getElementById('phone');
var ageInputV = document.getElementById('age');
var passInputV = document.getElementById('pass');
var repassInputV = document.getElementById('re-pass');



nameInputV.addEventListener("blur", function () {

    if (regixName.test(nameInputV.value) == false) {
        document.querySelector('.name-masege').innerHTML = "Name Must Be between 6 and 14 characters And Frist char Upper";
        changeButton();
    }
    else if (nameInputV.value == "") {
        document.querySelector(".name-masege").innerHTML = "";
    }
    else if (regixName.test(nameInputV.value) == true) {
        document.querySelector(".name-masege").innerHTML = "";
        rebutton();
    }
})

ageInputV.addEventListener("blur", function () {

    if (regixAge.test(ageInputV.value) == false) {
        document.querySelector('.age-masege').innerHTML = "Age Must be more than 18 and less than 60";
        changeButton();
    }
    else if (ageInputV.value == "") {
        document.querySelector(".age-masege").innerHTML = "";
    }
    else if (regixAge.test(ageInputV.value) == true) {
        document.querySelector(".age-masege").innerHTML = "";
        rebutton();
    }
})


mailInputV.addEventListener("blur", function () {

    if (regiMail.test(mailInputV.value) == false) {
        document.querySelector('.mail-masege').innerHTML = "NOt Valid Mail Must Be as (Examble@domain.com)";
        changeButton();
    }
    else if (mailInputV.value == "") {
        document.querySelector(".mail-masege").innerHTML = "";
    }
    else if (regiMail.test(mailInputV.value) == true) {
        document.querySelector(".mail-masege").innerHTML = "";
        rebutton();
    }
})

phoneInputV.addEventListener("blur", function () {

    if (regixPhone.test(phoneInputV.value) == false) {
        document.querySelector('.phone-masege').innerHTML = "NOt Vaild Phone Number Must Be As (01234567891,201234567890,+201234567890 )";
        changeButton();
    }
    else if (nameInputV.value == "") {
        document.querySelector(".phone-masege").innerHTML = "";
    }
    else if (regixPhone.test(phoneInputV.value) == true) {
        document.querySelector(".phone-masege").innerHTML = "";
        rebutton();
    }
})

passInputV.addEventListener("blur", function () {

    if (regixPasswd.test(passInputV.value) == false) {
        document.querySelector('.pass-masege').innerHTML = "Password Must more than 8 char and atleast one uppercase, lowercase";
        changeButton();
    }
    else if (passInputV.value == "") {
        document.querySelector(".pass-masege").innerHTML = "";
    }
    else if (regixPasswd.test(passInputV.value) == true) {
        document.querySelector(".pass-masege").innerHTML = "";
        rebutton();
    }
})

repassInputV.addEventListener("blur", function () {

    if (repassInputV.value != passInputV.value) {
        document.querySelector('.repass-masege').innerHTML = "password Not Match";
        changeButton();
    }
    else if (repassInputV.value == "") {
        document.querySelector(".repass-masege").innerHTML = "PLease Enter Data";
    }
    else if (repassInputV.value == passInputV.value) {
        document.querySelector(".repass-masege").innerHTML = "";
        rebutton();

    }
})


function changeButton() {
    document.querySelector('.mainbutton').classList.remove("d-none")
    document.querySelector('.alternativebutton').classList.add('d-none');


    document.querySelector('.mainbutton').classList.add('bg-danger');
    document.querySelector('.mainbutton').addEventListener('mousemove', function () {

        document.querySelector('.mainbutton').classList.toggle('buttonmargin');

    })
}


function rebutton() {

    document.querySelector('.mainbutton').classList.add("d-none")
    
    document.querySelector('.alternativebutton').classList.remove('d-none');

}


valueOfSearch.addEventListener('blur', function () {

    showMovies();

})