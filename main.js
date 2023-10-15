import { create_about_card, create_project_card, create_skill_card } from "./helper.js";

function showLoader() {
    const loader = document.createElement('img');
    loader.setAttribute("id", "loader");
    loader.src = "./gifs/loader_b.gif";
    document.querySelector("body").style.display = "none";
    document.querySelector("html").appendChild(loader)

}
function hideLoader() {
    const loader = document.querySelector('#loader');
    document.querySelector("html").removeChild(loader);
    document.querySelector("body").style.display = "block";
}

async function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5000)
        }, 5000);
    })
}

async function populate() {
    showLoader();
    const res = await fetch("./data.json");
    // const res = await fetch("/api/fetchjson");
    const data = await res.json();

    // console.log('delay: ', await delay());

    hideLoader();

    populateNav(data);
    populateHero(data);
    populateAbout(data);
    populateExperience(data);
    populateProject(data);
    populateContact(data);
    populateCopyRight(data.user.name);
}

function populateNav(data) {
    const logo = document.querySelector("#nav .wrapper .nav-heading");

    logo.textContent = data.user.name
}

function populateHero(data) {
    const Hero = document.querySelector("#hero");
    const profile_img = document.querySelector("#hero .wrapper .left img");
    const heroSuperHeading = document.querySelector("#hero .wrapper .right #super-heading");
    const heroSubtitle = document.querySelector("#hero .wrapper .right #subtitle");

    const linkedin = document.querySelector("#hero .wrapper .right .logos #linkedin");
    const github = document.querySelector("#hero .wrapper .right .logos #github");
    const instagram = document.querySelector("#hero .wrapper .right .logos #instagram");

    const user = data.user;

    profile_img.src = user.profile_image_url ? user.profile_image_url : "./images/sample-profile-pic.png";

    heroSuperHeading.textContent = user.name;
    heroSubtitle.textContent = user.role;

    if (user.linkedin) linkedin.href = user.linkedin;
    if (user.github) github.href = user.github;
    if (user.instagram) instagram.href = user.instagram;

    if (user.resume_link) {
        document.querySelector("#hero .wrapper .right .buttons #resume").href = user.resume_link;
    }
}

function populateAbout(data) {
    const about_img = document.querySelector("#about .wrapper .left img");

    const about_card_box = document.querySelector('#about .wrapper .right .boxes');

    const about_desc = document.querySelector("#about .right .desc");



    const user = data.user;
    const about = data.about;

    about_img.src = about.about_image ? about.about_image : "./images/sample-profile-pic.png";

    about.about_cards.forEach(card => {
        about_card_box.appendChild(create_about_card(card));
    });

    about_desc.innerHTML = about.desc;
}

function populateExperience(data) {
    const wrapper = document.querySelector("#experience .wrapper");

    data.experience.forEach(card => {
        wrapper.appendChild(create_skill_card(card));
    })
}

function populateProject(data) {
    const wrapper = document.querySelector("#projects .wrapper");

    data.projects.forEach(project => {
        wrapper.appendChild(create_project_card(project));
    })

}

function populateContact(data) {
    const user = data.user;

    if (user.email) {
        document.querySelector("#contact .wrapper .tile #email").textContent = user.email;

        document.querySelector("#contact .wrapper #email").href = "mailto:" + user.email;

    }

    if (user.linkedin) {
        document.querySelector("#contact .wrapper .tile #linkedin").textContent = user.linkedin;
        document.querySelector("#contact .wrapper #linkedin").href = user.linkedin.startsWith('https://') ? user.linkedin : ("https://" + user.linkedin);

    }
    if (user.mob) {
        document.querySelector("#contact .wrapper .tile #mobile").textContent = user.mob;
        document.querySelector("#contact .wrapper #mob").href = "tel:" + user.mob;

    }
}

function populateCopyRight(username) {
    document.querySelector("#footer .container .copyright-text").textContent = `Copyright © 2023 ${username}. All Rights Reserved`;
}

populate();