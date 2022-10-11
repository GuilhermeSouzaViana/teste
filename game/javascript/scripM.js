const container=document.getElementById("container")
const btnJogar = document.getElementById("play");
const entrada = document.getElementById("entrada");
const impressao = document.getElementById("impressao");
const sn=document.getElementById("sn")
const impressaoErro = document.getElementById("impressaoErro");
const impressaoTempo = document.getElementById("impressaoTempo");
const secret =1+ Math.floor(Math.random() * 200)
const timer = document.getElementById("timer")
const body = document.getElementById("body")
let back=new Audio();
back.src="../audios/medium.mp3"
let gm=new Audio();
gm.src="../audios/demon-go.mp3"
let yw=new Audio()
yw.src="../audios/youwin.mp3"
let clock=new Audio()
clock.src="../audios/clock.ogg"
let set
let time = 45
let tset
let gtime = -2
let erro = 0



function stopWatch() {
  back.play()
  timer.innerHTML = time
  time = time - 1
  gtime = gtime + 1
  if (time < 0) {
    clearInterval(set)
    back.pause()
    clock.pause()
    gm.play()
    container.style.backgroundImage = " url(../imagens/gmrt.jpg)"
    entrada.style.display = "none"
    btnJogar.style.display = "none"
    impressao.style.color = "red"
    impressaoErro.style.color = "red"
    impressao.innerHTML = "Tempo esgotado !"
    impressaoErro.innerHTML = "O numero secreto é: " + secret
  }else if(time<=10){
    clock.play()
    timer.style.color="red"
  }
}


const jogar = function () {
  if (entrada.value > secret) {
    erro += 1
    entrada.value = "";
    impressao.style.color = "red"
    impressao.innerHTML = "Você errou. O número secreto é menor"
    setTimeout(function () {
      impressao.innerHTML = ""
    }, 2000)

  } else if (entrada.value < secret) {
    erro += 1
    entrada.value = "";
    impressao.style.color = "rgb(235, 0, 0)"
    impressao.innerHTML = "Você errou. O número secreto é maior"
    setTimeout(function () {
      impressao.innerHTML = ""
    }, 2000)

  } else if (entrada.value == secret) {
    clearInterval(set)
    back.pause()
    clock.pause()
    yw.play()
    container.style.backgroundImage = " url(../imagens/youw.jpg)"
    impressao.style.color = "rgb(59, 255, 59)"
    impressao.innerHTML = "Parabéns, você acertou o número!"
    impressaoErro.innerHTML = "Você precisou de " + erro + " tentativas"
    impressaoErro.style.color = "rgb(59, 255, 59)"
    impressaoTempo.style.color = "rgb(59, 255, 59)"
    impressaoTempo.innerHTML = "O tempo total gasto foi: " + gtime + " segundos"
    sn.style.display = "none"
    entrada.style.display = "none"
    btnJogar.style.display = "none"
  }
}

btnJogar.addEventListener("click", jogar, set = setInterval(stopWatch, 1000));



