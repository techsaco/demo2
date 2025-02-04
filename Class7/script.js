// Get all navigation links
const navLinks = document.querySelectorAll("nav ul li a");


// Loop through each link
/*navLinks.forEach(link => {
  // Check if the current link's href matches the current URL
  if (link.href === window.location.href) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});*/

const homeLink = document.querySelector("nav ul li a[href='index.html']");
if (window.location.href.includes("index.html")) {
  homeLink.classList.add("active");
}

let hi = "hi";
for(let i = 0; i<hi.length; i++){
    console.log("test");
}