const btn = document.getElementsByTagName("button")
const span = document.getElementsByTagName("span")
let number = Number(0) 

btn[0].onclick = () => {
    number = number - 1
    span[0].innerText = number 
}
btn[1].onclick = () => {
    number = number + 1
    span[0].innerText = number 
}




btn[2].onclick = () => {
    let random =  Math.floor(Math.random() * 100) + 1
    let rando = alert(random);
    if (random  >= 30 && random <= 50){
let b = alert("Вы угадали")
span[0].style.color = ("red")
    }
}