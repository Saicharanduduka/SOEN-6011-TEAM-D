/**
 * Navbar while user is scrolling down a page and wish to go back to the table of contents or home page.
 * When the user scrolls down 20px from the top of the document, slide down the navbar
 * When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
 */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar_pa").style.top = "0";
  } else {
    document.getElementById("navbar_pa").style.top = "-100px";
  }
}

/**
scroll to-top
**/
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
