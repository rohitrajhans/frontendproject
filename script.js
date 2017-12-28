function highlight() {
	var element = document.getElementsByName("listItem1")[0];
	var mainBody = document.body;
	element.style.backgroundColor = "red";
	console.log("you clicked");
} 


function formDisplay() {
	var element = document.getElementById("form");
	if (element.style.display == "none") {
		element.style.display = "block";
		document.body.style.background = "rgba(17, 17, 17, 0.65)";
		document.getElementsByClassName("header")[0].style.background = "rgba(17, 17, 17, 0.65)";
	}
	else {
		element.style.display = "none";
		document.getElementsByClassName("header")[0].style.background = "-moz-linear-gradient(to bottom, #3c2ecc 0%, #7db9e8 99%)"; /* FF3.6-15 */
		document.getElementsByClassName("header")[0].style.background = "-webkit-linear-gradient(to bottom, #3c2ecc 0%,#7db9e8 99%)"; /* Chrome10-25,Safari5.1-6 */
		document.getElementsByClassName("header")[0].style.background = "linear-gradient(to bottom, #3c2ecc 0%,#7db9e8 99%)"; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		document.body.style.background = "white";
	}


}