var canvas = document.getElementById("MyCanvas")
var ctx = canvas.getContext("2d")
var cor = "black"
var largura = 1
var eventoMouse = 'vazio'
var ultimoX;
var ultimoY;
var width = screen.width
var novawidth = screen.width - 70
var novaheight = screen.width - 300

if(width < 922){
    canvas.width = novawidth
    canvas.height = novaheight
    document.body.style.overflow = "hidden"
}

function meuTouchStart(e){
cor = document.getElementById("cor").value
largura = document.getElementById("largura").value
ultimoX = e.touches[0].clientX - canvas.offsetLeft
ultimoY = e.touches[0].clientY - canvas.offsetTop
}

function touchMove(e){
var X = e.touches[0].clientX - canvas.offsetLeft
var Y = e.touches[0].clientY - canvas.offsetTop
        ctx.beginPath()
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.moveTo(ultimoX,ultimoY)
        ctx.lineTo(X,Y)
        ctx.stroke()
    ultimoX = X
    ultimoY = Y
}

function limpar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
canvas.addEventListener("touchmove",touchMove)
canvas.addEventListener("touchstart",meuTouchStart)

function meuMouseDown(e){
    cor = document.getElementById("cor").value
    largura = document.getElementById("largura").value
    eventoMouse = "mouseDown"
    }
    
    function meuMouseUp(e){
    eventoMouse = "mouseUp"
    }
    
    function meuMouseLeave(e){
    eventoMouse = "mouseLeave"
    }
    
    function mouse(e){
    var mouseX = e.clientX - canvas.offsetLeft
    var mouseY = e.clientY - canvas.offsetTop
        if (eventoMouse == "mouseDown"){
            ctx.beginPath()
            ctx.strokeStyle = cor;
            ctx.lineWidth = largura;
            ctx.moveTo(ultimoX,ultimoY)
            ctx.lineTo(mouseX,mouseY)
            ctx.stroke()
        }
        ultimoX = mouseX
        ultimoY = mouseY
    }
    
    function limpar(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    canvas.addEventListener("mousemove",mouse)
    canvas.addEventListener("mousedown",meuMouseDown)
    canvas.addEventListener("mouseup",meuMouseUp)
    canvas.addEventListener("mouseleave",meuMouseLeave)