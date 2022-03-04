const btnSi = document.querySelector('#btnSi');


btnSi.addEventListener('click', function() {

    alert('Nunca dude que dirias que si <3 :V')
});
const btnNO = document.querySelector('#btnNo');
btnNo.addEventListener('mouseover', function() {

    const randomX = parseInt(Math.random() * 90);
    const randomY = parseInt(Math.random() * 85);
    btnNo.style.setProperty('top', randomY + '%');
    btnNo.style.setProperty('left', randomX + '%');
    btnNo.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
});