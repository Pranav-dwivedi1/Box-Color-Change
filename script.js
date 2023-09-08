const box = document.querySelector(".box");

box.addEventListener("mousemove", function (details) {
  var rectanglelocation = box.getBoundingClientRect();
  var insideReacangle = details.clientX - rectanglelocation.left;
  console.log(insideReacangle);

  //details = details provide the current location of mouse
  //getBoundingClientRect() = This method provide the box location

  if (insideReacangle< rectanglelocation.width / 2) {
    var redValule = gsap.utils.mapRange(
      0,
      rectanglelocation.width / 2,
      255,
      0,
      insideReacangle
    );
    gsap.to(box, {
      backgroundColor: `rgb(${redValule},0,0)`,
      ease: Power4,
    });
  } 
  

// mapRange(inMin, inMax, outMin, outMax, valueToMap)
// inMin : Number - The lower bound of the initial range to map from
// inMax : Number - The upper bound of the initial range to map from
// outMin : Number - The lower bound of the range to map to
// outMax : Number - The upper bound of the range to map to
// valueToMap : Number - The value that should be mapped (typically it's between inMin and inMax).
// Returns: the mapped number

// Example
 //maps 0 in the -10 to 10 range to the same position in the 100 to 200 range
// gsap.utils.mapRange(-10, 10, 100, 200, 0); // 150

  
  else {
    var blueValue = gsap.utils.mapRange(
      rectanglelocation.width / 2,
      rectanglelocation.width,
      0,
      255,
      insideReacangle
    );
    gsap.to(box, {
      backgroundColor: `rgb(0,0,${blueValue})`,
      ease: Power4,
    });
  }
});


//box.style.backgroundColor = "white";  // This is not working because gsap is override this for white color we have to use gsap.to()
box.addEventListener("mouseleave", function () {
  gsap.to(box , {
    backgroundColor: "white",
  });
}); 