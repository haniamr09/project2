let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let hani = document.querySelector('.hani');
let section = document.querySelector('.scrolly-2');
let spans = document.querySelectorAll('.progress span');
let nums = document.querySelectorAll('.nums .num');
let section1 = document.querySelector('.scrolly-2');
let started = false;





window.onscroll = function(){
    let value = scrollY
    stars.style.left = value + 'px'
    moon.style.top = value*2 + 'px'
    mountains3.style.top = value*2 + 'px'
    mountains4.style.top = value*1.5 + 'px'
    river5.style.top = value + 'px'
    boat6.style.top = value + 'px'
    boat6.style.left = value * 3 + 'px'
    hani.style.fontSize = value + 'px'
    if (window.scrollY >= section.offsetTop + -100) {
        console.log('hello')
        spans.forEach((span) => {
        span.style.width = span.dataset.width;
        });
    };
    if(scrollY >= 70) {
        hani.style.fontSize = 100 + 'px'
        hani.style.position = 'fixed'
        if(scrollY >= 423) {
            hani.style.display = 'none'
        }else {
            hani.style.display = 'block'
            if(scrollY >= 241) {
                document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)'
            }else {
                document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
            }
        }
    }
};

////////////////////////
///////////////////////////////
// num tag
////////////////////////////////
///////////////////////


// function startCount(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(()  => {
//      el.textContent++;
//      if (el.textContent == goal) {
//     clearInterval(count)
//      }
//     },2000 / goal)
// }


// window.onscroll = function() {
//     if (window.scrollY >= section.offsetTop - 200) {
//         if (!started) {
//             nums.forEach((num) => startCount(num));
//         }
//         started = true;
//     }
// }
////////////////////////////
///////////////////////////
///////////////////////////