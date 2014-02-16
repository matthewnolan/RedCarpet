var DEMO1 = DEMO1 || {};

$(document).ready(function() {
	prettyPrint() //For formatting the code on the demo.
});

DEMO1.source = $("#entry-template").html();
DEMO1.template = Handlebars.compile(DEMO1.source);

Handlebars.registerHelper("math", function(index) {
	if (index == 0) return "<div class=\"item\">";
	else if (index % 2 == 0) return "<\/div><div class=\"item\">";
});

DEMO1.context = { items: [
	{img: "http://placekitten.com/220/186", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",},
	{img: "http://placekitten.com/220/185", desc: "accusantium doloremque laudantium, totam rem  inventore veritatis et quasi architecto beatae vitae",},
	{img: "http://placekitten.com/g/220/187", desc: "iste natus error sit",},
	{img: "http://placekitten.com/220/189", desc: "iste natus error sit",},
	{img: "http://placekitten.com/220/190", desc: "doloremque laudantium",},
	{img: "http://placekitten.com/g/220/185", desc: "omnis iste natus error sit",},
	{img: "http://placekitten.com/220/186", desc: "doloremque laudantium",},
	{img: "http://placekitten.com/220/187", desc: "iste natus error sit",},
	{img: "http://placekitten.com/220/188", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",},
	{img: "http://placekitten.com/220/189", desc: "accusantium doloremque laudantium, totam rem  inventore veritatis et quasi",},      
	{img: "http://placekitten.com/220/186", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",},
	{img: "http://placekitten.com/220/185", desc: "accusantium doloremque laudantium, totam rem  inventore veritatis et quasi architecto beatae vitae",},
	{img: "http://placekitten.com/g/220/187", desc: "iste natus error sit",},
	{img: "http://placekitten.com/220/189", desc: "iste natus error sit",},
	{img: "http://placekitten.com/220/190", desc: "doloremque laudantium",},
	{img: "http://placekitten.com/g/220/185", desc: "omnis iste natus error sit",},
	{img: "http://placekitten.com/220/186", desc: "doloremque laudantium",},
	{img: "http://placekitten.com/220/187", desc: "iste natus error sit",},
	{img: "http://placekitten.com/220/188", desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",},
	{img: "http://placekitten.com/220/189", desc: "accusantium doloremque laudantium, totam rem  inventore veritatis et quasi",},
]};

var red = $("#red-demo").redCarpet({
	items: 6, //10 items above 1000px browser width
	itemsDesktop: [1000, 4], //5 items between 1000px and 901px
	itemsDesktopSmall: [900, 4], // betweem 900px and 601px
	itemsTablet: [600, 2], //2 items between 600 and 0
	itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option

	navigation: false,
	itemsScaleUp: true,
	singleItem: false,
	addClassActive: true,

	touchDrag: true,
	mouseDrag: true,
	slideSpeed: 300,

	responsive: true,

	expand: true,
	expandWidth: 2, // number of slides to expand
	expandElement: ".imgbtn", // What element acts as a button to expand
	expandClose: ".closebtn", //an element to close the expand

	beforeMove: function() {
		red.trigger('red.expandClose');
	},
	beforeInit: function() {
		$("#red-demo").html(DEMO1.template(DEMO1.context)); // Kick off handlebars templating 
	}
});