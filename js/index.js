const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible-expanded");
  })
);

// show the Tabs page expanded

const tab = document.getElementById("tabs");


tab.addEventListener("click", function() {
  if ( tab.classList.contains("collapsible-expanded") ) {
    document.getElementById("tabs-expand").style.display = "block";
  } else {
    document.getElementById("tabs-expand").style.display = "none";
  }

})


// Show the Shared Tabs page 

const share = document.getElementById("shared");

share.addEventListener("click", function() {
  if ( share.classList.contains("collapsible-expanded") ) {
    document.getElementById("shared-expand").style.display = "block";
  } else {
    document.getElementById("shared-expand").style.display = "none";
  }

})