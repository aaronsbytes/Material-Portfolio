$(document).ready(function() {
	$('#pagepiling').pagepiling({
        direction: 'vertical',
        verticalCentered: false,
        sectionsColor: [],
        anchors: ['1', '2', '3'],
        scrollingSpeed: 400,
        easing: 'swing',
        loopBottom: true,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#cdd6f4',
            'bulletsColor': '#cdd6f4',
            'position': 'left',
            'tooltips': ['Home', 'About', 'Projects']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 0,
        touchSensitivity: 0,
        keyboardScrolling: false,
        sectionSelector: '.section',
        animateAnchor: false,
		onLeave: function(index, nextIndex, direction){ hideMenu(); },
		afterLoad: function(anchorLink, index){ },
		afterRender: function(){},
	});
});

$( document ).ready(function() {
    document.getElementById('preloader').remove();
});

function startup(){
    document.addEventListener('contextmenu', event => event.preventDefault());
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
    backgroundText();
}

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

function backgroundText(){
    var i = 0;
    for (var div of document.getElementsByClassName('background-text')){
        var title = document.createElement('h1'); title.innerHTML = div.getAttribute('text');
        while (i < 15){ i = i + 1; div.appendChild(title.cloneNode(true)); }
        i = 0;
    }
}