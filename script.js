const mulher = `
    <div class="box">
      <img src="images/image-tanya.jpg" alt="foto de perfil de uma mulher" class="avatar">
      <div class="buttons">
        <img src="./images/icon-prev.svg" class="prev">
        <img src="./images/icon-next.svg" class="next">
      </div>
    </div>
    <div class="text">
      <h3>
        “ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”
      </h3>
      <h2>
        Tanya Sinclair
      </h2>
      <p>
        UX Engineer
      </p>
    </div>
`
const homem = `
    <div class="box">
      <img src="images/image-john.jpg" alt="foto de perfil de um homem" class="avatar">
      <div class="buttons">
        <img src="./images/icon-prev.svg" class="prev">
        <img src="./images/icon-next.svg" class="next">
      </div>
    </div>
    <div class="text">
      <h3>
        “ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”
      </h3>
      <h2>
        John Tarkpor
      </h2>
      <p>
        Junior Front-end Developer
      </p>
    </div>
`

let contador = 0
function aumentar() {
  contador++
  console.log(contador)
}

let div = document.querySelector('.slide')

div.innerHTML = mulher

let click_prev = document.querySelector('.prev')
let click_next = document.querySelector('.next')
let booleano = false

click_prev.addEventListener('click', function () {
  let count = 0
  div.innerHTML = ''
  if(booleano === false) {
    div.innerHTML += homem
    booleano = true
  } else if(booleano === true) {
    div.innerHTML += mulher
    booleano = false
  }
  count++
  console.log(count)
})

click_next.addEventListener('click', function () {
  div.innerHTML = ''
  if(booleano === false) {
    div.innerHTML += homem
    booleano = true
  } else if(booleano === true) {
    div.innerHTML += mulher
    booleano = false
  }
})

