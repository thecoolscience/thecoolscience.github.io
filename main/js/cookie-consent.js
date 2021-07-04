//Cookie consent script

const cookieBox = document.querySelector(".cookieoverlay"),
acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = ()=>{
//setting cookie for 1 month, after one month it'll be expired automatically
document.cookie = "DataCookie=cookie.DataBase_Savedata_thecoolscience; max-age="+60*60*24*30;
if(document.cookie){ //if cookie is set
cookieBox.classList.add("hide"); //hide cookie box
}else{ //if cookie not set then alert an error
//alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
cookieBox.classList.add("hide"); 
}
}
let checkCookie = document.cookie.indexOf("DataCookie=cookie.DataBase_Savedata_thecoolscience"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");