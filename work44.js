function toggle(button) {
	var innerDiv=button.target.nextElementSibling;

	if (innerDiv.style.height==="0px" || innerDiv.style.height ===""){
		innerDiv.style.height= innerDiv.scrollHeight+"px";
	}
	else {
		innerDiv.style.height=0;
	}
}

var buttons=document.querySelectorAll(".accordion button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', toggle);
}