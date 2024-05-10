const button=document.getElementById('theme');
const iconText = document.getElementById('icon-text');
const iconImage = document.getElementById('icon-image');
const body = document.body;
let isDarkMode = false;

button.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    if (isDarkMode) {
        iconText.textContent = "DARK";
        iconImage.src = "icons/Icons/dark-icon.png";
    } else {
        iconText.textContent = "BRIGHT";
        iconImage.src = "icons/Icons/bright-icon.png";
    }
    
    isDarkMode = !isDarkMode;
});

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function redirectToExternal(url) {
    window.location.href = url;
}