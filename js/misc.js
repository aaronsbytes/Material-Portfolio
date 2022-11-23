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
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
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
    var blobscene = document.getElementById('blobscene');
    var scene1 = document.getElementById('bgscene1');
    var scene2 = document.getElementById('bgscene2');
    var scene3 = document.getElementById('bgscene3');
    var scene4 = document.getElementById('bgscene4');
    var parallaxInstance = new Parallax(blobscene);
    var parallaxInstance = new Parallax(scene1);
    var parallaxInstance = new Parallax(scene2);
    var parallaxInstance = new Parallax(scene3);
    var parallaxInstance = new Parallax(scene4);
    backgroundText();
    loadProjects();
}

function toggleMenu(){
    var menu = document.getElementById('smartphone-menu');
    if (menu.style.display === 'flex'){
        menu.style.display = 'none'
        document.getElementById('menu-icon__checkbox').checked = false;
    }else{
        menu.style.display = 'flex';
        document.getElementById('menu-icon__checkbox').checked = true;
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

function loadProjects(){
    var section = document.getElementById('projects');
    var container = document.createElement('div'); section.appendChild(container); container.className = "container";
    for (let i = 0; i < 5; i++) {
        fetch('https://api.github.com/users/9cqes/repos', { method: 'GET' }) .then((response) => response.json()) .then((result) => {
            try {
                var item = document.createElement('div'); item.className = "project";
                var title = document.createElement('a'); title.innerHTML = result[i]['name'] + ' '; title.setAttribute('href', result[i]['html_url']); item.appendChild(title);
                var desc = document.createElement('p'); desc.innerHTML = result[i]['description']; item.appendChild(desc);  
                var icon = document.createElement('i'); icon.className = 'bx bx-link-external'; title.appendChild(icon);     
                container.appendChild(item);
            } catch (error) {}
        })
    }
}
