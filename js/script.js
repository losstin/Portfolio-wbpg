let btn = document.querySelector('#button')

btn.onclick = function follow() {
    btn.classList.toggle('subscribed')

    if(btn.innerHTML === 'Subscribe'){
        btn.innerHTML = 'Subscribed'
    }
    else {
        btn.innerHTML = 'Subscribe'
    }
}