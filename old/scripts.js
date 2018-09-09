let profile = document.getElementById('profile');
let skills = document.getElementById('skills');
let projects = document.getElementById('projects');

let profileContent = document.getElementById('profileContent');
let skillsContent = document.getElementById('skillsContent');
let projectsContent = document.getElementById('projectsContent');

/*
    1: profile
    2: skills
    3: projects
*/
var actualActive = 1;

function changeActual(old, new_) {
    switch (old) {
        case 1:
            profileContent.style.display = 'none';
            break;
        case 2:
            skillsContent.style.display = 'none';
            break;  
        case 3:
            projectsContent.style.display = 'none';
            break;
    }

    switch (new_) {
        case 1:
            profileContent.style.display = 'block'
            break;
        case 2:
            skillsContent.style.display = 'block';
            break;  
        case 3:
            projectsContent.style.display = 'block';
            break;
    }

    actualActive = new_;
}

profile.addEventListener('click', () => {
    changeActual(actualActive,  1);
});

skills.addEventListener('click', () => {
    changeActual(actualActive,  2);
});

projects.addEventListener('click', () => {
    changeActual(actualActive,  3);
});
