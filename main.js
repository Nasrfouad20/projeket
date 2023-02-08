let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let fouad = document.querySelector('.fouad');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.top = value  + 'px';
    boat.style.left = value *3  + 'px';
    fouad.style.fontSize = value   + 'px';
    if(scrollY >= 67){
        fouad.style.fontSize = value =  67  + 'px';
        fouad.style.position = 'fixed';
        if(scrollY >= 437 ){
            fouad.style.display = 'none';
        }
        else{
            fouad.style.display = 'block';

        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#347085,#10001f)'
        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'

        }
    }
}
