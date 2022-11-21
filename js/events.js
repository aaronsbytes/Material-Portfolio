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
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){ hideMenu(); },
		afterLoad: function(anchorLink, index){ },
		afterRender: function(){},
	});
});
