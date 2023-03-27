/**
 * Created by stefan.kr
 */

var JSONstring =document.getElementById("JsonData").textContent;
var data=JSON.parse(JSONstring);


var template=document.getElementById("mtemplate").innerHTML;

document.getElementById("data").textContent=JSONstring;
document.getElementById("template").textContent=template;
document.getElementById("HtmlResult").innerHTML=Mustache.render(template,data);
