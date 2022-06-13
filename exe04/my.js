function result(box, num_max, campo, bot){
    var char_cont = box.length;
    if(char_cont != 0){
        document.getElementById(campo).innerHTML = char_cont;
        document.getElementById(bot).removeAttribute('disabled')
        console.log(char_cont)
    }if(num_max - char_cont > 40){
        document.getElementById(campo).style.color = 'black'
    }if(num_max - char_cont <= 40){
        document.getElementById(campo).style.color = 'rgb(255, 200, 0)'
    }if(char_cont >= num_max){
        document.getElementById(campo).innerHTML = '-' + char_cont;
        document.getElementById(campo).style.color = 'rgb(255, 0, 0)';
        document.getElementById(bot).setAttribute('disabled', 'disabled')
    } if(char_cont == 0){
        document.getElementById(campo).innerHTML = '';
        document.getElementById(bot).setAttribute('disabled', 'disabled')
    }
}