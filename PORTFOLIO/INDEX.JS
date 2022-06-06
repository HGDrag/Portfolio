const about = document.querySelector(".about-note");
const skills = document.querySelector(".skills-note");
const projects = document.querySelector(".projects-note");
const contacts = document.querySelector(".contacts-note");
const menu = document.querySelector(".hamburger-menu");
const video = document.querySelector(".bg-video");
const now = new Date();

video.playbackRate = 0.8;



function date(dateObject) {
    const months = [
        "January","February", "March", "April","May", "June",
        "July","August","September","October","November","December"  
    ];
    
    const date = dateObject.getDate();
    const month = months[dateObject.getMonth()];
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    
    return `${month} ${date}, ${year} at ${hour}:${minutes}`;
}

const noteDate = document.querySelector("#date").innerText = date(now);

const hiddingMenu = () => {
    const showMenu = document.querySelector(".l-wrapper");
    
    if (showMenu.style.right != '50px')
        showMenu.style.right = '50px';
    else
        showMenu.style.right = '-1500px';
    
}

const hidePreview = (notePreview, prevNote) => {
    prevNote.style.display = 'none';
    if(notePreview.style.display != 'flex'){
        notePreview.style.display = 'flex';
        prevNote.style.display = 'none';
    }
    else
        notePreview.style.display = 'none';
}

const notePreview = () => {
    
    const aboutPreview = document.querySelector('.about-active');
    const skillsPreview = document.querySelector('.skills-active');
    const projectsPreview = document.querySelector('.projects-active');
    const contactsPreview = document.querySelector('.contacts-active');
    
    about.addEventListener('click', () => {  
        hidePreview(aboutPreview, skillsPreview);
        hidePreview(aboutPreview, projectsPreview);
        hidePreview(aboutPreview, contactsPreview);
    });
    
    skills.addEventListener('click', () => {
        hidePreview(skillsPreview, aboutPreview);
        hidePreview(skillsPreview, projectsPreview);
        hidePreview(skillsPreview, contactsPreview);
        
    });
    
    projects.addEventListener('click', () => {
        hidePreview(projectsPreview, aboutPreview);
        hidePreview(projectsPreview, skillsPreview);
        hidePreview(projectsPreview, contactsPreview);
        
    });
    
    contacts.addEventListener('click', () => {
        hidePreview(contactsPreview, aboutPreview);
        hidePreview(contactsPreview, skillsPreview);
        hidePreview(contactsPreview, projectsPreview);
        
    });
}

notePreview();

menu.addEventListener('click', () => {
    hiddingMenu();

});