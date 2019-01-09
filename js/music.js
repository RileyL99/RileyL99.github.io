$(document).ready(function(){
	console.log("ready");
	$("#one").click(function(event) {
		event.preventDefault();
		console.log("Default stopped");
		var node = document.getElementById("concrete");
		if(node.style.display == "none"){
			node.style.display = "block";
			document.getElementById("spot1").display = "block";
		}
		else {
			node.style.display = "none";
			document.getElementById("spot1").display = "none";
		}
	})
});