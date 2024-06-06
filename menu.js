function openMenu() {
	document.getElementById("menu").style.width = "100%";
}
function closeMenu() {
	document.getElementById("menu").style.width = "0%";
}
document.getElementById("show-menu").innerHTML =
	'<div id="menu" class="overClass">'
	+ '<a href="javascript:void(0)" style="font-size: 100px;cursor:pointer; padding: 0 26px; " onclick="closeMenu()">&times;</a>'
	+ '<div class="overClass-content">'
	+ '<a href="Home.html">Home</a>'
	+ '<a href="About.html">About me</a>'
	+ '<a href="Experience.html">Experience</a>'
	+ '<a href="Work.html">My work/code</a>'
	+ '</div>'
	+ '</div>'
	+ '<span  style="font-size: 53px;cursor:pointer; padding:23px;color: aliceblue;"  onclick="openMenu()">&#9776; </span>';