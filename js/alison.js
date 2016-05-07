    function readxml()
    {
        xmlHttp = new window.XMLHttpRequest();
        xmlHttp.open("GET","clothes.xml",false);
        xmlHttp.send(null);
        xmlDoc = xmlHttp.responseXML.documentElement;
    }
/*function loadClothesXML() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			formTable(xmlhttp);
		}
	};
	xmlhttp.open("GET", "clothes.xml", true);
	xmlhttp.send();
}

function formTable(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table = "<tr><th>SKU</th><th><th>Item</th><th>Description</th><th>Image</th><th>Price</th>";
	var x = xmlDoc.getElementsByTagName("item");
	for (i = 0; i <x.length; i++) {
		table += "<tr><td>" +
		x[i].getElementsByTagName("sku")[0].childNodes[0].nodeValue + "</td><td>" +
		x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
		x[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue + "</td><td>" +
		x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue + "</td><td>" +
		x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td><td>";
	}
	document.getElementById("demo").innerHTML = table;
} 
*/