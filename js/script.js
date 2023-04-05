 
  const greenBox = document.querySelector("#green");
  const doorBox = document.querySelector("#door");
  
  greenBox.addEventListener("click", function() {
    doorBox.setAttribute("visible", false);
  })