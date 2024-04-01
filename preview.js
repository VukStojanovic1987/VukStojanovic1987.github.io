var printLink;

function load() {
	printLink = document.getElementById("print");
}

function events() {
	printLink.addEventListener("click", printing);
}

function printing() {
	window.print();
}

addEventListener("load", load);
addEventListener("load", events);