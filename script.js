document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const dropdown = document.querySelector(".dropdown");

    function toggleDropdown() {
        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
            dropdown.style.display = "none";
        } else {
            dropdown.classList.add("show");
            dropdown.style.display = "block";
        }
    }

    function toggleMenuIcon() {
        if (menuIcon.classList.contains("active")) {
            menuIcon.classList.remove("active"); 
        } else {
            menuIcon.classList.add("active");
        }
    }

    menuIcon.addEventListener("click", function() {
        toggleDropdown();
        toggleMenuIcon();
    });

    document.addEventListener("click", function(event) {
        if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
            dropdown.style.display = "none";
            menuIcon.classList.remove("active");
        }
    });
});
