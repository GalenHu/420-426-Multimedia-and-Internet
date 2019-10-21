let balloon = document.getElementById("balloon");
let font = 18;
document.addEventListener('keydown', function(event){
    if(event.code == 'ArrowUp')
    {
        font = font+10;
        balloon.style.fontSize = font;
    }
    if(event.code == 'ArrowDown')
    {
        font = font-10;
        balloon.style.fontSize = font;
    }
    if(font > 120)
    {
        
    }
});