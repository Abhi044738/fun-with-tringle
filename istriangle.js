const inputs = document.querySelectorAll(".angle-input");
//console.log(inputs);
const isTringleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  //console.log(sumOfAngles);
  return sumOfAngles;
}

function isTringle() {
  //console.log("gggg");
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    //console.log("the angle form a triangle");
    outputE1.innerText = "The angles form a Tringle.";
  } else {
    //console.log("the angle noy form a triangle");
    outputE1.innerText = "The angles does not form Tringle.";
  }
}

isTringleBtn.addEventListener("click", isTringle);
