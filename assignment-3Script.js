//Question1
const containerId=document.getElementById("container");
console.log(containerId);

//Question2
const containerSelect=document.querySelector("#container");
console.log(containerSelect);

//Question3
const secondClass=document.querySelectorAll(".second");
secondClass.forEach(element =>console.log(element));

//Question4 
const thirdOlClass=document.querySelector("ol .third");
console.log(thirdOlClass);

//Question5
containerSelect.innerHTML +="Hello";

//Question6
const footer=document.querySelector(".footer");
console.log(footer);
footer.classList.add("main");

//Question7
footer.classList.remove("main");

//Question8
const newLi=document.createElement('li');

//Question9
newLi.innerText="four";
console.log(newLi);

//Question10
document.querySelector("ul").append(newLi);

//Question12
const olItems=document.querySelectorAll('ol');
olItems.forEach(item => {
    item.style.background="green";
})

//Question 13
footer.remove();

//Test to see if Footer was removed
const tempFooter=document.querySelector(".footer");
console.log(tempFooter);
