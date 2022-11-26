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
            'tooltips': []
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: false,
        sectionSelector: '.section',
        animateAnchor: false,
		onLeave: function(index, nextIndex, direction){ hideMenu(); reCallAnimation(nextIndex); },
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
        while (i < 20){ i = i + 1; div.appendChild(title.cloneNode(true)); }
        i = 0;
    }
}

function loadProjects(){
    var section = document.getElementById('projects');
    var container = document.createElement('div'); section.appendChild(container); container.className = "container";
    fetch('https://api.github.com/users/9cqes/repos', { method: 'GET' }) .then((response) => response.json()) .then((result) => {
        for(let i = result.length; i > 0; i--){
            try {
                let item = document.createElement('div'); item.className = "project SlideUp";
                let itemHeader = document.createElement('div'); itemHeader.className = 'header'; item.appendChild(itemHeader);
                let titleContainer = document.createElement('div'); titleContainer.className = 'titleContainer'; itemHeader.appendChild(titleContainer);
                let avatar = document.createElement('img'); avatar.src = result[i]['owner']['avatar_url']; avatar.setAttribute('href', result[i]['owner']['html_url']); titleContainer.appendChild(avatar);
                let title = document.createElement('a'); title.innerHTML = result[i]['name'] + ' '; title.setAttribute('href', result[i]['html_url']); titleContainer.appendChild(title);
                let desc = document.createElement('p'); desc.innerHTML = result[i]['description']; item.appendChild(desc);  
                let icon = document.createElement('a'); icon.className = 'bx bx-link-external res-link'; icon.setAttribute('href', result[i]['html_url']); itemHeader.appendChild(icon);
                let flexContainer = document.createElement('div'); flexContainer.className = 'flexContainer'; item.appendChild(flexContainer);
                //Stars
                let stars = document.createElement('div'); stars.className = 'item';
                let starIcon = document.createElement('i'); starIcon.className = 'bx bxs-star'; stars.appendChild(starIcon);
                let starCount = document.createElement('p'); starCount.innerHTML = ' ' + result[i]['stargazers_count']; stars.appendChild(starCount);
                flexContainer.appendChild(stars);
                //Open Issues
                let issues = document.createElement('div'); issues.className = 'item';
                let issuesIcon = document.createElement('i'); issuesIcon.className = 'bx bxs-bug-alt'; issues.appendChild(issuesIcon);
                let issuesCount = document.createElement('p'); issuesCount.innerHTML = ' ' + result[i]['open_issues_count']; issues.appendChild(issuesCount);
                flexContainer.appendChild(issues);
                //Watchers
                let watchers = document.createElement('div'); watchers.className = 'item';
                let watchersIcon = document.createElement('i'); watchersIcon.className = 'bx bx-show'; watchers.appendChild(watchersIcon);
                let watchersCount = document.createElement('p'); watchersCount.innerHTML = ' ' + result[i]['watchers_count']; watchers.appendChild(watchersCount);
                flexContainer.appendChild(watchers);
                //License
                if (result[i]['license'] !== null){
                    let license = document.createElement('div'); license.className = 'item';
                    let licenseIcon = document.createElement('i'); licenseIcon.className = 'bx bx-book'; license.appendChild(licenseIcon);
                    let licenseText = document.createElement('p'); licenseText.innerHTML = ' ' + result[i]['license']['name']; license.appendChild(licenseText);
                    flexContainer.appendChild(license);
                }
                container.appendChild(item);
            } catch (error) {}
        }
    })
}


function reCallAnimation(index){
    if(index === 1){
        document.title = 'NexaDev | Home';
        for (var elem of document.getElementById('home').getElementsByClassName('SlideUp')){
            elem.style.opacity = '0';
            elem.classList.remove('SlideUp');
            elem.offsetWidth;
            elem.classList.add('SlideUp');
        }
    }else if(index === 2){
        document.title = 'NexaDev | Projects';
        for (var elem of document.getElementById('projects').getElementsByClassName('SlideUp')){
            elem.style.opacity = '0';
            elem.classList.remove('SlideUp');
            elem.offsetWidth;
            elem.classList.add('SlideUp');
        }
    }else if (index === 3){
        document.title = 'NexaDev | About';
        for (var elem of document.getElementById('about').getElementsByClassName('SlideUp')){
            elem.style.opacity = '0';
            elem.classList.remove('SlideUp');
            elem.offsetWidth;
            elem.classList.add('SlideUp');
        }
    }
}

function animate() {
    for (var elem of document.getElementsByClassName('SlideUp')){
        elem.classList.remove('SlideUp');
        elem.offsetWidth;
        elem.classList.add('SlideUp');
    }       
}