function moveCursor(e) {
    $('#cursor').css({"top": e.pageY, "left": e.pageX});
}
$(window).on('mousemove', moveCursor);

function upscaleCursor(icon){
    let cursor = document.getElementById('cursor');
    cursor.style.transform = 'scale(2.0)'; cursor.style.backgroundColor = '#cdd6f4';
    cursor.style.mixBlendMode = 'normal';
    cursor.style.border = 'none';
    cursor.style.animation = 'none';
    document.getElementById('cursor-icon').className = icon;
    document.getElementById('cursor-icon').style.opacity = '1';
}

function downscaleCursor(){
    let cursor = document.getElementById('cursor');
    cursor.style.transform = 'scale(1.0)'; cursor.style.backgroundColor = 'transparent'; cursor.style.mixBlendMode = 'difference';
    document.getElementById('cursor-icon').style.opacity = '0';
    cursor.style.border = '1px dashed #cdd6f4';
    cursor.style.animation = 'spin 4s linear infinite';
}

function resCursor(){
    //RES-LINK
    for (let elem of document.getElementsByClassName('res-link')){ elem.addEventListener('mouseover', function(){
            upscaleCursor('bx bx-link-external');
            elem.style.cursor = 'none';
        })
    }
    for (let elem of document.getElementsByClassName('res-link')){ elem.addEventListener('mouseleave', function(){
            downscaleCursor();
            elem.style.cursor = 'default';
        })
    }
    //RES-DOWN
    for (let elem of document.getElementsByClassName('res-down')){ elem.addEventListener('mouseover', function(){
        upscaleCursor('bx bx-down-arrow-alt');
        elem.style.cursor = 'none';
        })
    }
    for (let elem of document.getElementsByClassName('res-down')){ elem.addEventListener('mouseleave', function(){
            downscaleCursor();
            elem.style.cursor = 'default';
        })
    }
}