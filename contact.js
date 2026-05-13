let name = document.getElementById('name')
let message = document.getElementById('message')
let button = document.getElementById('btn-sub')

button.addEventListener('click',()=>{
    if (name.value == "" || message.value == "")
    {
        alert("Please enter both name and message ")
    }else if(name.value && message.value){
        alert(name.value + ", I don't give a shit about your message")
    }
})