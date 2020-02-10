<!DOCTYPE html>
<html>
<head>
<title>lower case</title>

</head>

<body>

<script>
var cityToCheck = prompt("Enter a city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"]
var flag = false;
for (var i = 0; i < cleanestCities.length; i++ ) {
	if (cityToCheck === cleanestCities[i]) {
	flag = true;
	alert("It's one of the cleanest cities");
	}
	break;
}

if (flag === false) {
	
	alert("It's NOT one of the cleanest cities");

}
</script>

</body>
</html>