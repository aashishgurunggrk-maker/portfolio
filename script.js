let button = document.getElementById('btn')
let user = document.querySelector('#user-image')

button.addEventListener('click', () => {
    user.style.borderRadius = "0%"
    setTimeout(revertImage, 3000)
})



function revertImage() {
    user.style.borderRadius = "50%"
}





