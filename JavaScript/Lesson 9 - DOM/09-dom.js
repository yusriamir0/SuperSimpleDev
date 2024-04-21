// built in object provided by javascriptkk
//* dot notation to access property
//* letak defer supaya bila kita letak script di html di akan run kemudian
document.title = "Object Model";
document.title = "Bertukar";
console.log(document.title);
console.log(typeof document.body);
console.log(document.body.innerHTML);
document.body.innerHTML = "<button>Salam Sejahtera</button>";
document.body.innerHTML = "<button class = 'js-button'>Hello World</button>";

//* Method ialah function yang disimpan dalam object
// querySelector akan cari element, class, id atau etc untuk 'model'kan dia supaya berubah
console.log(document.querySelector("button").innerHTML);

//* cari element - button
document.querySelector("button").innerHTML = "Hi there";

//* cari class attribute - js-button
console.log((document.querySelector(".js-button").innerHTML = "Javascript")); 
