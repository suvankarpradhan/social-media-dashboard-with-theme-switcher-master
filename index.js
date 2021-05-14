let mode = document.getElementById('mode');
mode.onclick=()=>{
    if(mode.checked ==true){
        $('.light-card').attr('class','dark-card');
        $('body').css('background-color','hsl(230, 17%, 14%)');
        $('.bg-pattern').css('background-color','hsl(232, 19%, 15%)');
        $('.header h2').css('color','hsl(0, 0%, 100%)');
        $('.heading p').css('color','hsl(228, 34%, 66%)');
        $('.cont2-title').css('color','hsl(0, 0%, 100%)');
    }else{
        $('.dark-card').attr('class','light-card');
        $('body').css('background-color','hsl(0, 0%, 100%)');
        $('.bg-pattern').css('background-color','hsl(225, 100%, 98%)');
        $('.header h2').css('color','hsl(230, 17%, 14%)');
        $('.heading p').css('color','hsl(228, 12%, 44%)');
        $('.cont2-title').css('color','hsl(228, 12%, 44%)');
    }
}
