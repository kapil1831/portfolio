const menuBtn = document.querySelector("#nav .wrapper .hamburger-nav-list");

const navContent = document.querySelector("#hamburger-menu-content");

menuBtn.addEventListener('click', (event) => {
    navContent.classList.add("show");
    document.body.style.overflow = "hidden";
});

const closeBtn = document.querySelector("#hamburger-menu-content .close-btn");

closeBtn.addEventListener('click', (event) => {
    navContent.classList.remove('show');
    document.body.style.overflow = "initial";
});

const navlinks = document.querySelectorAll("#hamburger-menu-content .wrapper");


navlinks.forEach(link => {
    link.addEventListener('click', (event) => {
        navContent.classList.remove('show');
        document.body.style.overflow = "initial";
    });
});