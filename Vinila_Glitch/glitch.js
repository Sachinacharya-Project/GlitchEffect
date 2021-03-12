let bg = document.getElementById('container')
let count = 30

for (let i=0;i<count;i++){
    let glitchBox = document.createElement('div')
    glitchBox.className = 'box'
    bg.appendChild(glitchBox)
}

let boxes = document.getElementsByClassName('box')
interval = setInterval(()=>{
    for (let i = 0;i<boxes.length;i++){
        boxes[i].style.left = Math.floor(Math.random()*100)+'vw'
        boxes[i].style.top = Math.floor(Math.random()*100)+'vh'
        boxes[i].style.width = Math.floor(Math.random()*400)+'px'
        boxes[i].style.height = Math.floor(Math.random()*100)+'px'
        boxes[i].style.backgroundPosition = Math.floor(Math.random()*50)+'px'
    }
    setTimeout(()=>{
        // console.log('Hello');
    }, 1000)
}, 2000)

laps = 0
bg.addEventListener('click', (e)=>{
    if (laps == 0){
        const check = document.createElement('a')
        check.textContent = 'View Image'
        check.href = '../imgs/spidy.jpg'
        check.target = '_blank'
        check.className = 'btn'
        check.style.position = 'absolute'
        check.style.left = e.clientX+'px'
        check.style.top = e.clientY+'px'
        bg.append(check)
        laps = 1
    }else{
        const btn = document.getElementsByClassName('btn')[0]
        bg.removeChild(btn)
        laps = 0
    }
})
