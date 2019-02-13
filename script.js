const languagebtn = document.getElementsByClassName("btn")[0];

languagebtn.addEventListener("click",function(){
	const language = document.getElementsByClassName("language")[0];
	language.classList.toggle("display");
});


var slides = document.getElementsByClassName("slide");
var imgAddr= ["url('2.jpg')","url('1.jpg')","url('3.jpg')","url('4.jpg')"];

const mainsliderfunc = ()=>{
	let a = imgAddr.length;
	var c = 0;
	setInterval(function(){  		
		if(c<=a-1)
		{	
			slides[0].style.opacity=".5";
			slides[0].style.backgroundImage = imgAddr[c];
			slides[0].style.opacity=".8";
			slides[0].style.opacity="1";
			c++;
		}
		else
			c=0;

	}, 4500);
			
}
let aa = 0;
// const r = setInterval(function(){
mainsliderfunc();
// },2000);
 