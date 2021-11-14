function cicle(){
setTimeout(()=>{
	$('#text').animate({opacity:0},1);
	$('#text').animate({opacity:1},1000);
    $('#text').animate({opacity:1},1000);
	$('#text').animate({opacity:1},1000);
	$('#text').animate({opacity:0},2000);
});
setTimeout(()=>{
	$('#bd').animate({opacity:0.5},2000);
	$('#bd').animate({opacity:0.5},1000);
    $('#bd').animate({opacity:1},2000);

});
}
setInterval(cicle);
setInterval(timer,1000);

let second1 = 0, second2 = 0;
let minute1 = 0, minute2 = 0;
let hour1 = 0, hour2 = 0;

function timer(){
document.querySelector("#time").innerHTML = "" + hour2 + hour1 + ":" + minute2+minute1 + ":"+second2+second1;
	second1++;
	if (second1 == 10){
		second1 = 0;
		second2++;
	}
		if (second2 == 5 && second1== 9) {
		second1 = 0;
		second2 = 0;
		minute1 ++;
	}
	if (minute1 == 10){
		minute1 = 0;
		minute2++;
	}
	if (minute2 == 5 && minute1 == 9) {
		minute1 = 0;
		minute2 = 0;
		hour1 ++;
	}
	if (hour1 == 10) {
		hour1 = 0;
		hour2++;
	}
}
//setInterval(cicle,5000);
//setTimeout(());



/*function animt(){
	$('#text').animate({opacity:0},1);
}
setInterval(animt,1);
function animb() {
	$('#bd').animate({opacity:0.5},1000);
}
	
let start = setInterval(animb,1);
    setTimeout(function(){
		clearInterval(animt);
	},1000);


/*function animt2(){
$('#text').animate({opacity:1},1000);
setInterval(animt2,1000);
*/
