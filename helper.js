export function create_about_card(card) {

    const cardBox = document.createElement("div");

    //logo
    const cardLogo = document.createElement("div");
    cardLogo.classList.add('logo');

    const logoImg = document.createElement('img');
    logoImg.src = './svg/award.png'
    // cardLogo.textContent = "O";
    cardLogo.appendChild(logoImg);

    //heading
    const cardHeading = document.createElement("div");
    cardHeading.classList.add('heading');
    cardHeading.textContent = card.card_name;

    //const cardContent = document.createElement("div");

    cardBox.appendChild(cardLogo);
    cardBox.appendChild(cardHeading);

    //card content
    card.content.split(" ").forEach(word => {
        const p = document.createElement("p");
        p.textContent = word;
        cardBox.appendChild(p);
    });

    return cardBox;
}

export function create_skill_card(card) {
    const cardBox = document.createElement("div");
    cardBox.classList.add('boxes');

    //heading
    const cardHeading = document.createElement("div");
    cardHeading.classList.add('heading');
    cardHeading.textContent = card.title;

    cardBox.appendChild(cardHeading);

    //skills
    const skills = document.createElement("div");
    skills.classList.add("skills");

    card.skills.forEach(item => {
        const skill = document.createElement("div");
        skill.classList.add("skill");

        const logo = document.createElement("div");

        const logoImg = document.createElement('img');
        logoImg.src = './svg/patch-check.svg'

        logo.appendChild(logoImg);

        const skill_box = document.createElement("div");
        skill_box.classList.add("skill-box");

        const skill_name = document.createElement("div");
        skill_name.classList.add("skill-name");
        skill_name.textContent = item.skill;

        // const skill_level = document.createElement("div");
        // skill_level.classList.add("skill-level");
        // skill_level.textContent = item.skill_level;

        skill_box.appendChild(skill_name);
        // skill_box.appendChild(skill_level);

        skill.appendChild(logo);
        skill.appendChild(skill_box);

        skills.appendChild(skill);
    });

    cardBox.appendChild(cardHeading);
    cardBox.appendChild(skills);

    return cardBox;
}

export function create_project_card(project) {

    const cardBox = document.createElement("div");
    cardBox.classList.add('project-box');

    //project image element
    const project_img_div = document.createElement("div");
    project_img_div.classList.add('project-img');

    const project_img = document.createElement('img');
    project_img.src = project.image ? project.image : "./images/project_sq.jpg";

    project_img_div.appendChild(project_img);

    //project heading element
    const project_heading = document.createElement("div");
    project_heading.classList.add("heading");
    project_heading.textContent = project.title;

    //project buttons div element
    const buttons = document.createElement("div");
    buttons.classList.add('buttons');

    //project buttons div element's github button
    const githublink = document.createElement("a");
    githublink.setAttribute("id", "githublink");
    githublink.setAttribute("target", "_blank");
    githublink.href = project.github_link;

    const gitbtn = document.createElement("div");
    gitbtn.classList.add("primary-btn");
    gitbtn.textContent = "Github";
    githublink.appendChild(gitbtn);

    //project buttons div element's live button
    const livelink = document.createElement("a");
    livelink.setAttribute("id", "livelink");
    livelink.href = project.link;
    const livebtn = document.createElement("div");
    livebtn.classList.add("primary-btn");
    livebtn.textContent = "Live Demo";
    livelink.appendChild(livebtn);

    buttons.appendChild(githublink);
    buttons.appendChild(livelink);

    const project_desc = document.createElement('p');
    project_desc.classList.add('desc');
    project_desc.textContent = project.short_desc;


    cardBox.appendChild(project_img_div);
    cardBox.appendChild(project_heading);
    cardBox.appendChild(buttons);
    cardBox.appendChild(project_desc);
    return cardBox;
}
