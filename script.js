function start () {
	var nwname = document.getElementById("nwname");
	var nwemail= document.getElementById("nwemail")
	var nwpswrd= document.getElementById("nwpswrd")
	var create= document.getElementById("create")
	var usname= document.getElementById("usname")
	var uspswrd= document.getElementById("uspswrd")
	var log_in= document.getElementById("log_in")
}
function events () {
	retVal = confirm("Do you want to continue ?");
	if( retVal == true ){
	alert("User wants to continue!");
	}else{
	alert("User does not want to continue!");
	plat;
	return false;
	}
	
}
window.addEventListner("load", start, false)



