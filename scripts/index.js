window.addEventListener("scroll", function(){
    const navBar = document.getElementById("navBar");
    navBar.classList.toggle("navBarBottom", window.scrollY>0);
    
})