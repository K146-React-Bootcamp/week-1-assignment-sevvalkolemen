//Cookie:
const Btn = document.querySelector("#btn");
const result = document.querySelector("#result");
let date = new Date();

// ekran yeniden yüklendiğinde random color'ın seçili olarak gelmesi için
window.onload = function () {
    if(document.cookie.length > 0){
        let smash = document.cookie.split("=");
        let color = smash[1];
        result.style.backgroundColor = color;
    }
}

Btn.addEventListener("click", function(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    result.style.backgroundColor= bgColor;

    //cookie oluşturma 1. alternatif
    document.cookie = "renk="+bgColor+";expires="+date+"";
    console.log(document.cookie);
});

//setCookie ve getcookie kullanarak Cookie oluşturma ve okuma:
// function setCookie(cname, cvalue, exdays) {
// 	var d = new Date();
// 	d.setTime(d.getTime() + (exdays*24*60*60*1000));
// 	var expires = "expires="+ d.toUTCString();
// 	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
// 	let name = cname + "=";
// 	let decodedCookie = decodeURIComponent(document.cookie);
// 	let ca = decodedCookie.split(';');
// 	for(var i = 0; i <ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return "";
//  }


//cookie oluşturma 2. alternatif
//setCookie("renk", bgColor, 3);

//Cookie okuma:
//var CookieOne = getCookie("renk");
//console.log(CookieOne)



//Session Storage:
const obj = {name: "sevval", age: 22};
const obj2 = {name: "ayaz", age: 9};

//setItem ile sessionStorage oluşturuldu.
sessionStorage.setItem("person", JSON.stringify(obj));

//getItem ile sessionStorage bilgileri console yazdırıldı.
console.log(JSON.parse(sessionStorage.getItem("person")));

//setItem'ın value değerini değiştirerek güncelleme yaptık.
sessionStorage.setItem("person",JSON.stringify(obj2));
console.log(JSON.parse(sessionStorage.getItem("person")));

//removeItem ile sessionStorage değerimizi sildik.
sessionStorage.removeItem("person");
console.log(JSON.parse(sessionStorage.getItem("person")));

//clear ile sessionStorage'daki tüm verileri sildik.
sessionStorage.clear();




