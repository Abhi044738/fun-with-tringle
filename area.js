const dimensions= document.querySelectorAll(".sides-input");
const areaBtn= document.querySelector("#area-btn");
const outputE1 =document.querySelector("#output");

function calculate(a,b){
    const area=(a*b)/2;
    console.log([dimensions.values])
    return area;
}

function calculateArea(){
    const area=calculate(Number(dimensions[0].value),Number(dimensions[1].value))
    outputE1.innerText="The Area of tringle is "+area
}
areaBtn.addEventListener("click",calculateArea);

