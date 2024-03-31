let language = 'hu';
let translations = {};

fetch('translations.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        applyTranslations();
    });

function applyTranslations() {
    document.getElementById('title').innerText = translations[language]['title'];
    document.getElementById('about-menu').innerText = translations[language]['about-menu'];
    document.getElementById('portfolio-menu').innerText = translations[language]['portfolio-menu'];
    document.getElementById('contact-menu').innerText = translations[language]['contact-menu'];
    document.getElementById('image-menu').src = translations[language]['image-menu'];
    document.getElementById('about-me').innerText = translations[language]['about-me'];
    document.getElementById('description').innerText = translations[language]['description'];
    document.getElementById('skills-tab').innerText = translations[language]['skills-tab'];
    document.getElementById('experience-tab').innerText = translations[language]['experience-tab'];
    document.getElementById('education-tab').innerText = translations[language]['education-tab'];
    document.getElementById('software-developer-course').innerText = translations[language]['software-developer-course'];
    document.getElementById('web-developer').innerText = translations[language]['web-developer'];
    document.getElementById('software-developer-and-testing-technician').innerText = translations[language]['software-developer-and-testing-technician'];
    document.getElementById('graduation').innerText = translations[language]['graduation'];
    document.getElementById('my-works').innerText = translations[language]['my-works'];
    document.getElementById('app-one-title').innerText = translations[language]['app-one-title'];
    document.getElementById('app-one-body').innerText = translations[language]['app-one-body'];
    document.getElementById('app-two-title').innerText = translations[language]['app-two-title'];
    document.getElementById('app-two-body').innerText = translations[language]['app-two-body'];
    document.getElementById('app-three-title').innerText = translations[language]['app-three-title'];
    document.getElementById('app-three-body').innerText = translations[language]['app-three-body'];
    document.getElementById('see-more').innerText = translations[language]['see-more'];
    document.getElementById('contact-me').innerText = translations[language]['contact-me'];
    document.getElementById('CV').innerText = translations[language]['CV'];
}

document.getElementById('changeLanguage').addEventListener('click', function() {
    language = (language === 'hu') ? 'en' : 'hu';
    applyTranslations();
});
