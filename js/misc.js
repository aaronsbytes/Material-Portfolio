

function toggleMenu(){
    var menu = document.getElementById('smartphone-menu');
    if (menu.style.display === 'flex'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'flex';
    }
}

function hideMenu(){
    document.getElementById('smartphone-menu').style.display = 'none';
    document.getElementById('menu-icon__checkbox').checked = false;
}