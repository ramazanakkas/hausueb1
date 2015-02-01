$(document).ready(function() {
	$("#dragme").draggable();
});


	var valid=function(id){
		var search=document.getElementById("search").value;
		if(search.length===0||search.length>=50||nurLeerzeichen(search)){
			$(document).ready(function(){
				alert("Keine gültige Eingabe!");
			});
		}
		else{
			if(id===0){
				var i=document.getElementById("wikiform");
				i.action="http://de.wikipedia.org/wiki/Spezial:Suche?fulltext="+search;
				i.submit();
			}
			else {
				var i=document.getElementById("wikiform");
				i.action="http://de.wikipedia.org/wiki/Spezial:Suche?"+search;
				i.submit();
			}
		}
	}
	var nurLeerzeichen=function(j){
		for (var i=0;i<j.length;i++){
			if(!(j[i]===" "))return false;
		}
		return true;
	}

