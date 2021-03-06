function getMnem(letters, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'scripts/getMnem.php?m=' + letters, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function scissors() {
	var string = document.getElementById('input').value.replace("  ", " ").split(" ");
	var composed = "";

	for (var i = 0; i < string.length; i++) {
    composed += " ";
		composed += string[i].charAt(0);
	}

	document.getElementById('output').value = composed.substring(1);
  
  getMnem(composed, function(response) {
    document.getElementById('generate').value = response.replace(/["|\.]/g, '');
  });
}
