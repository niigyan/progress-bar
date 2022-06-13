var progress = document.querySelector('.progress');
var percent = document.querySelector('.percent');
var loadText = document.querySelector('.loading-text');

var count = 0;
var per  = 0;

var loading = setInterval(animate,80);
var loadingText =setInterval(load,600);

function load() {
    if (loadText.textContent == 'Loading...') {
        loadText.textContent = 'Loading.';
    }
    else if (loadText.textContent == 'Loading.') {
        loadText.textContent = 'Loading..';
    }

    else if (loadText.textContent == 'Loading..') {
        loadText.textContent = 'Loading...';
    }
}

function animate() {
    if (count==100 && per ==100) {
        clearInterval(loading);
        clearInterval(load)
        loadText.textContent = 'Completed!';
        loadText.classList.add('text-blink');

    } else{
   count = count + 1;
   per  = per + 1;
  progress.style.width = per + '%';
  percent.textContent = count + '%';
    }
}