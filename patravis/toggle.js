function toggleHidden(elem) {
	var element = document.getElementById(elem);
	if (element) {
		if (element.style.display == "none") {
			element.style.display = "inline";
			imgborder.style.borderStyle = "inset";
		} else {
			element.style.display = "none";
			imgborder.style.borderStyle = "outset";
		}
	}
}
