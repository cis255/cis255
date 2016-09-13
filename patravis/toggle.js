function toggleHidden(elem) {
	var element = document.getElementById(elem);
	if (element) {
		if (element.style.display == "none") {
			element.style.display = "inline";
		} else {
			element.style.display = "none";
		}
	}
}
