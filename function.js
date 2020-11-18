var myBirthtime = new Date(1982,11,17,12,30);
function updateParagraph() {
	var now = new Date();
	var seconds = (now.getTime() - myBirthtime.getTime()) / 1000;
	document.getElementById('birth-time').innerText =
	'生まれてから' + seconds + '秒経過。';
}
//setInterval(updateParagraph,50);

function calc_of_area(r) {
	var area = r * r * 3.14;
	return area;
}
console.log(calc_of_area(5));
