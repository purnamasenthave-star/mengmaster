document.addEventListener('DOMContentLoaded', () => {
    const btnEn = document.getElementById('btn-en');
    const btnId = document.getElementById('btn-id');
    const contentsEn = document.querySelectorAll('.lang-en');
    const contentsId = document.querySelectorAll('.lang-id');

    // Default language is Indonesian (or English if system is EN, let's check local storage first)
    let currentLang = localStorage.getItem('mengmaster-lang') || 'id';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('mengmaster-lang', lang);

        if (lang === 'id') {
            btnId.classList.add('active');
            btnEn.classList.remove('active');
            
            contentsId.forEach(el => {
                el.classList.add('active');
            });
            contentsEn.forEach(el => {
                el.classList.remove('active');
            });
        } else {
            btnEn.classList.add('active');
            btnId.classList.remove('active');

            contentsEn.forEach(el => {
                el.classList.add('active');
            });
            contentsId.forEach(el => {
                el.classList.remove('active');
            });
        }
        
        // Update html lang attribute
        document.documentElement.lang = lang;
    }

    btnEn.addEventListener('click', () => setLanguage('en'));
    btnId.addEventListener('click', () => setLanguage('id'));

    // Initialize
    setLanguage(currentLang);
});
