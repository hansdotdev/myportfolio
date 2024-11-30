const portfolioContent = {
    navbar: {
        items: [
            { id: 'home', icon: 'fa-house', label: 'Home' },
            { id: 'about', icon: 'fa-user', label: 'About' },
            { id: 'skills', icon: 'fa-code', label: 'Skills' },
            { id: 'projects', icon: 'fa-folder', label: 'Projects' },
            { id: 'contact', icon: 'fa-envelope', label: 'Contact' }
        ]
    },
    home: {
        intro: {
            img: 'img/profile.jpg',
            name: "Hans",
            description: "I'm a <strong><span class='dynamic-description'></span><span class='cursor'>|</span></strong>.",
            buttonText: "Learn more",
            link: "#about"
        }
    },
    about: {
        heading: "About me",
        content: "Hi, I'm Aubrey Hans Lining, a passionate third-year college student from Marinduque State University pursuing a Bachelor of Science in Information Technology. I specialize in video and photo editing, programming with Python and C#, and have beginner-level experience in HTML, CSS, and JavaScript. I enjoy creating interactive prototypes using tools like Figma and Mockplus, which help visualize ideas and streamline project development. Combining creativity and technical expertise, I strive to bring innovative solutions to life. I'm eager to learn new technologies, take on challenges, and collaborate on projects that make an impact. <span class='highlight'><br>Let's create something amazing together!</span>"
    },
    skills: {
        heading: "My skills",
        skills: [
            { img: 'img/skills/Ai.png', alt: 'AI' },
            { img: 'img/skills/ps.png', alt: 'Ps' },
            { img: 'img/skills/capcut.jpg', alt: 'Capcut' },
            { img: 'img/skills/figma.png', alt: 'Figma' },
            { img: 'img/skills/mockplus.png', alt: 'Mockplus' },
            { img: 'img/skills/css.png', alt: 'CSS' },
            { img: 'img/skills/html.png', alt: 'HTML' },
            { img: 'img/skills/js.png', alt: 'Js' },
            { img: 'img/skills/c-sharp.png', alt: 'C-sharp' },
            { img: 'img/skills/python.png', alt: 'Python' }
        ]
    },
    projects: {
        heading: "My projects",
        projects: [
            { link: 'https://github.com/hansdotdev/BurgerHaus-FOS', img: 'img/project/burgerhaus.png', title: 'BURGERHAUS', description: 'A food ordering system kiosk.', builtWith: 'C# windows form' },
            { link: 'https://github.com/hansdotdev/Food-to-Go', img: 'img/project/foodtogo.png', title: 'Food To Go', description: 'An online food delivery app prototype.', builtWith: 'Mockplus classic' },
            { link: 'https://github.com/hansdotdev/Guess-Grow', img: 'img/project/guessandgrow.jpg', title: 'Guess & Grow', description: 'A guessing game, BMI calculator, and Learning material app.', builtWith: 'Android Studio, Java' },
            { link: 'https://hansdotdev.github.io/Marinduque-Wonders/', img: 'img/project/marinduquewonders.png', title: 'Marinduque Wonders', description: 'A blog about Marinduque and its wonders', builtWith: 'Html, Css, JavaScript' },
            { link: 'https://hansdotdev.github.io/Sales-Monitoring-System/', img: 'img/project/salesmonitoringsystem.png', title: 'Sales Monitoring System', description: 'A static website mockup.', builtWith: 'Html, Css, JavaScript' },
            { link: 'https://drive.google.com/drive/folders/12V6YfX5_BPbcu5vEdHCvJOekITj0jGEa?usp=sharing', img: 'img/project/game.png', title: 'The Worst Maze Game of Hero', description: 'A RPG game.', builtWith: 'Unity, C#' }
        ]
    },
    contact: {
        heading: "Contact Me",
        socialLinks: [
            { href: 'https://facebook.com/hanslining', icon: 'fa-facebook' },
            { href: 'https://m.me/hanslining', icon: 'fa-facebook-messenger' },
            { href: 'https://instagram.com/hanseyooo?igsh=YmhvNGdkamF2cXgz', icon: 'fa-instagram' },
            { href: 'https://github.com/hansdotdev', icon: 'fa-github' },
            { href: 'https://www.upwork.com/freelancers/~012f350ff3f3e4bf7e?mp_source=share', icon: 'fa-upwork' }
        ]
    },
    footer: {
        content: "©Copyright 2024. Made by Aubrey Hans Lining"
    }
};

// Dynamically populate Navbar
const navbar = document.querySelector('.icon-navbar ul');
portfolioContent.navbar.items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${item.id}`;
    a.classList.add('tooltip');
    
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', item.icon);
    a.appendChild(icon);
    
    const tooltipText = document.createElement('span');
    tooltipText.classList.add('tooltip-text');
    tooltipText.textContent = item.label;
    a.appendChild(tooltipText);

    li.appendChild(a);
    navbar.appendChild(li);
});

// Home Section
const homeSection = document.querySelector('#home .intro-wrapper');
homeSection.querySelector('.profile-img').src = portfolioContent.home.intro.img;
homeSection.querySelector('.intro-container h1').innerHTML = `I'm <span class="highlight">${portfolioContent.home.intro.name}</span>`;
homeSection.querySelector('.intro-container p').innerHTML = portfolioContent.home.intro.description;
homeSection.querySelector('.contact-button').textContent = portfolioContent.home.intro.buttonText;
homeSection.querySelector('.contact-button').href = portfolioContent.home.intro.link;

// About Section
document.querySelector('#about h2').textContent = portfolioContent.about.heading;
document.querySelector('#about p').innerHTML = portfolioContent.about.content;



// Skills Section
const skillsContainer = document.querySelector('#skills .skills-container');
const heading = document.createElement('h2');
heading.textContent = portfolioContent.skills.heading;
heading.classList.add('skills-heading'); 
document.querySelector('#skills').insertBefore(heading, skillsContainer);

portfolioContent.skills.skills.forEach(skill => {
    const img = document.createElement('img');
    img.src = skill.img;
    img.alt = skill.alt;
    img.id = skill.alt.toLowerCase(); 
    skillsContainer.appendChild(img);
});

document.querySelectorAll('.skills-container img').forEach(img => {
    img.classList.add('visible'); 
});

// Projects Section
document.querySelector('#projects .section-title').textContent = portfolioContent.projects.heading;
// Render Projects Section
const projectsContainer = document.querySelector('#projects .folder-container');
portfolioContent.projects.projects.forEach(project => {
    const folder = document.createElement('div');
    folder.classList.add('folder');
    
    const a = document.createElement('a');
    a.href = project.link;

    const img = document.createElement('img');
    img.src = project.img;
    img.alt = `Project ${project.title}`;
    img.classList.add('folder-image');
    a.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = project.title;
    a.appendChild(title);

    const description = document.createElement('h3');
    description.textContent = project.description;
    a.appendChild(description);

    const p = document.createElement('p');
    p.innerHTML = `<strong>built with:</strong> ${project.builtWith}`;
    a.appendChild(p);

    folder.appendChild(a);
    projectsContainer.appendChild(folder);
});


// Render Contact Section
const contactHeading = document.querySelector('#contact .section-title');
if (contactHeading) {
    contactHeading.textContent = portfolioContent.contact.heading; // "Contact Me"
}

// Render social icons Contact section
const socialIconsContainer = document.querySelector('.social-icons');
if (socialIconsContainer) {
    portfolioContent.contact.socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = '_blank'; 
        a.rel = 'noopener noreferrer'; // Security best practice

        const icon = document.createElement('i');
        icon.classList.add('fa-brands', link.icon); // FontAwesome icon class

        a.appendChild(icon); // Add icon inside the link
        socialIconsContainer.appendChild(a); // Append the link to the container
    });
}

// Render Footer
document.querySelector('footer p').textContent = portfolioContent.footer.content;

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Enable smooth scrolling
                block: 'start', // Align to the start of the section
            });
        }
    });
});

// Highlight active section icon
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".icon-navbar ul li");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        const anchor = link.querySelector("a");
        const href = anchor.getAttribute("href").replace("#", "");
        if (href === currentSection) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Type effect for text
const descriptions = [
    "beginner-level programmer and web developer",
    "photo and video editor",
    "UI/UX designer"
];

const dynamicText = document.querySelector(".dynamic-description");
const cursor = document.querySelector(".cursor");

let currentIndex = 0; 
let currentCharIndex = 0; 
let isDeleting = false;
let delay = 100; // Typing speed

function typeEffect() {
    const currentText = descriptions[currentIndex];

    // Typing characters
    if (!isDeleting) {
        dynamicText.textContent = currentText.substring(0, currentCharIndex++);
        if (currentCharIndex > currentText.length) {
            // Pause at the end of typing
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Wait 2 seconds before deleting
            return;
        }
    }
    // Deleting characters
    else {
        dynamicText.textContent = currentText.substring(0, currentCharIndex--);
        if (currentCharIndex < 0) {
            // Move to the next text
            isDeleting = false;
            currentIndex = (currentIndex + 1) % descriptions.length;
        }
    }

    // Speed for typing and deleting
    setTimeout(typeEffect, isDeleting ? 50 : delay);
}

// Start the typing effect
typeEffect();

//Cursor blink effect
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "1" ? "0" : "1";
}, 500);

// Transition effects
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const fadeInObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.classList.remove("hidden"); // Ensure fade-out class is removed
                } else {
                    entry.target.classList.add("hidden");
                    entry.target.classList.remove("visible"); // Remove fade-in class when out of view
                }
            });
        },
        { threshold: 0.1 }
    );
    fadeInElements.forEach((el) => fadeInObserver.observe(el));
});


// Social icons animation
const socialIcons = document.querySelector('.social-icons');

const socialIconsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add 'visible' class when in view
            socialIcons.classList.add('visible');
        } else {
            // Remove 'visible' class when out of view
            socialIcons.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });
socialIconsObserver.observe(socialIcons);


//function start
// Function to hide navbar items
function hideNavbarItems(ids) {
    ids.forEach(id => {
        const item = document.querySelector(`a[href="#${id}"]`); // Select <a> with href matching the id
        if (item) {
            item.parentElement.style.display = 'none'; // Hide the parent <li>
        }
    });
}

// Function to show a specific navbar item
function showNavbarItem(id) {
    const item = document.querySelector(`a[href="#${id}"]`);
    if (item) {
        item.parentElement.style.display = 'flex'; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    hideNavbarItems(['about', 'skills', 'projects', 'contact']); 
});

//navbar disableHover
function disableHover() {
    const navbarItems = document.querySelectorAll('.icon-navbar ul li');
    navbarItems.forEach(item => {
        item.style.transform = 'none';
        item.style.backgroundColor = 'transparent';
        
        const icon = item.querySelector('i');
        if (icon) {
            icon.style.color = 'black'; 
        }
    });
}

//restore hover
function restoreHover() {
    const navbarItems = document.querySelectorAll('.icon-navbar ul li');
    navbarItems.forEach(item => {
        item.style.transform = ''; 
        item.style.backgroundColor = '';
        
        const icon = item.querySelector('i');
        if (icon) {
            icon.style.color = ''; 
        }
    });
}

//remove animation
function removeFadeInAnimation() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach(element => {
        element.style.animation = 'none';
        element.style.transition = 'none'; 
    });
}
// restore animation
function restoreFadeInAnimation() {
    
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach(element => {
        
        element.style.animation = '';
        element.style.transition = ''; 
    });
}

//restore hover effect 
function restoreHoverEffect() {
    
    const skillImages = document.querySelectorAll('.skills-container img');
    skillImages.forEach(image => {
        image.style.transform = '';  
        image.style.filter = ''; 
    });

    const elements = ['#ai', '#ps', '#capcut', '#figma', '#mockplus', '#css', '#html', '#js', '#c-sharp', '#python'];
    elements.forEach(id => {
        const element = document.querySelector(id);
        if (element) {
            element.style.boxShadow = ''; 
        }
    });
    const hoverButton = document.querySelector('#hover');
    if (hoverButton) {
        hoverButton.style = '';
    }
}

// Function remove hover effect 
function removeHoverEffect() {
    const skillImages = document.querySelectorAll('.skills-container img');
    skillImages.forEach(image => {
        image.style.transform = 'none';  
        image.style.filter = 'grayscale(100%)';  
    });

    
    const elements = ['#ai', '#ps', '#capcut', '#figma', '#mockplus', '#css', '#html', '#js', '#c-sharp', '#python'];
    elements.forEach(id => {
        const element = document.querySelector(id);
        if (element) {
            element.style.boxShadow = 'none';  
        }
    });

    const hoverButton = document.querySelector('#hover');
    if (hoverButton) {
        hoverButton.style = '';  
    }
}


//buildbtn
function build() {
    document.querySelector('.build').style.display = "none";

    disableHover();
    
    // List of section IDs to hide the content and design
    const ids = ['skills', 'about', 'projects', 'contact', 'footer'];
    
    // Hide each section
    ids.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
    
    // Show only the home section
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.style.display = "block"; 
    }

    // Show the content wrapper (make it visible after clicking build)
    const contentWrapper = document.querySelector('.content');
    if (contentWrapper) {
        contentWrapper.style.display = "block";  
    }

    const image = document.querySelector('img');
    if(image){
        image.style.display='none';
    }

    const headings = document.querySelectorAll('h1, h2, .highlight');
    headings.forEach(heading => {
        heading.style.color = 'black';  
        heading.style.fontSize= '24px';
    });

    const button = document.querySelector('.contact-button');
    if (button) {
        button.style.display = 'none'; 
    }

    const navbar = document.querySelector('.icon-navbar');
    if (navbar) {
        navbar.style.all = 'unset'; 
    }
    
    const pTag = document.querySelector('p');
    if (pTag) {
        pTag.style.display='none'  
    }
}

//changebtn
function change() {
    showNavbarItem('about'); 

    // Show the About section
    document.querySelector('#about').style.display = "flex";

    const changeButton = document.querySelector('.change');
    if (changeButton) {
        changeButton.textContent = "Learn more";  
    }

    // Hide all elements with the 'design' class (light balls)
    const lightBalls = document.querySelectorAll('.design');
    lightBalls.forEach(lightBall => {
        lightBall.style.display = "none"; 
    });

    document.querySelector('#about p').style.textAlign = 'left';

    const headings = document.querySelectorAll('h1, h2, .highlight, p');
    headings.forEach(heading => {
        heading.style.color = 'black'; 
        heading.style.removeProperty('font-size'); 
    });

    // Show profile image in About section
    const image = document.querySelector('img');
    if (image) {
        image.style.display = 'block';
        image.style.borderRadius ='0';
        
    }

    const items = ['skills', 'projects', 'contact'];
    items.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none'; 
        }
    });
    removeFadeInAnimation();
}

//add Design
function add() {
    const navbar = document.querySelector('.icon-navbar');
    if (navbar) {
        navbar.style.all = ''; 
        
    }
    showNavbarItem('skills'); 

    document.querySelector('#skills').style.display = "block";

    const headings = document.querySelectorAll('h1, h2, .highlight, p');
    headings.forEach(heading => {
        heading.style.removeProperty('color');
        heading.style.removeProperty('font-size');
    });

    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.style.display = 'inline-block'; 
    }

    // Hide the change button
    const changeButton = document.querySelector('.change');
    if (changeButton) {
        changeButton.style.display = 'none';
    }

    // Hide the add design button
    const addDesignButton = document.querySelector('#addDesign');
    if (addDesignButton) {
        addDesignButton.style.display = 'none'; 
    }
    document.querySelector('body').style.backgroundColor='#181818';

    const lightBalls = document.querySelectorAll('.design');
    lightBalls.forEach(lightBall => {
        lightBall.style.display = "block";
    });

    removeHoverEffect();

    const image = document.querySelector('img');
    if (image) {
        image.style.display = '';
        image.style.borderRadius ='';
    }
}

function addHover() {
    showNavbarItem('projects');
    restoreHover();
    restoreHoverEffect();
    document.querySelector('#projects').style.display = "";

    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.style.display = "flex"; 
    }

    document.querySelector('#about p').style.textAlign = '';
    document.querySelector('#skills').style.display = "";

    const folderContainer = document.querySelector('.folder-container');
    if (folderContainer) {
        folderContainer.classList.add('visible'); 
    }

    document.querySelector('#hover').style.display = 'none';
}


function animation() {
    restoreFadeInAnimation();
    document.querySelector('#animation').style.display = "none";
    showNavbarItem('contact');
    document.querySelector('#contact').style.display = "";
    document.querySelector('#footer').style.display = "";
    const pTag = document.querySelector('p');
    if (pTag) {
        pTag.style.display = ''; 
    }

    // Animation for skill images
    const skills = document.querySelectorAll('.skills-container img');
    const skillsObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    };

    const skillsObserver = new IntersectionObserver(skillsObserverCallback, { threshold: 0.2 });
    skills.forEach((skill) => {
        skillsObserver.observe(skill);
    });

    const homeSection = document.querySelector('#home');
    
    const observerOptions = {
        root: null, 
        threshold: 0.5, 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeSection.classList.add('in-view');
                homeSection.classList.remove('out-of-view');
            } else {
                homeSection.classList.remove('in-view');
                homeSection.classList.add('out-of-view');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(homeSection);

    const projectsSection = document.querySelector('#projects');
    const folderContainer = document.querySelector('.folder-container');

    const projectsObserverOptions = {
        root: null, 
        threshold: 0.5, 
    };

    
    const projectsObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectsSection.classList.add('in-view');
                projectsSection.classList.remove('out-of-view');
                folderContainer.classList.add('visible');
            } else {
                projectsSection.classList.remove('in-view');
                projectsSection.classList.add('out-of-view');
                folderContainer.classList.remove('visible');
            }
        });
    };
    const projectsObserver = new IntersectionObserver(projectsObserverCallback, projectsObserverOptions);
    projectsObserver.observe(projectsSection);
}



