//Qualifikation Sicht auf Bildung wechseln
document.getElementById('education-tab').addEventListener('click', function () {
    document.getElementById('education-tab').classList.add('active');
    document.getElementById('work-tab').classList.remove('active');
    document.getElementById('education-content').classList.add('active');
    document.getElementById('work-content').classList.remove('active');
});
//Qualifikation Sicht auf Arbeit wechslen
document.getElementById('work-tab').addEventListener('click', function () {
    document.getElementById('work-tab').classList.add('active');
    document.getElementById('education-tab').classList.remove('active');
    document.getElementById('work-content').classList.add('active');
    document.getElementById('education-content').classList.remove('active');
});

//Fortschritt der Balken für "Fähigkeiten und Sprachen" laden
document.addEventListener("DOMContentLoaded", function () {
    const navLink = document.querySelector("a[href='#skills_language_section']");
    const progressBars = document.querySelectorAll(".progress-bar");

    function fillBars() {
        progressBars.forEach(function (bar) {
            bar.style.transition = 'width 5s ease-out'; //Langsames Füllen
            const skillLevel = bar.getAttribute('data-skill-level');
            bar.style.width = skillLevel;
        });
    }

    function resetBars() {
        progressBars.forEach(function (bar) {
            bar.style.transition = 'width 0.5s ease-in'; //Schnelles Leeren
            bar.style.width = "0";
        });
    }

    //Füllt die Balken beim Neuladen der Seite
    fillBars();

    //Füllt die Balken erneut, wenn der Navigationslink geklickt wird
    navLink.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector('#skills_language_section').scrollIntoView({ behavior: 'smooth' });

        //Setzt die Breite auf 0, um die Balken schnell zu leeren
        resetBars();

        //Füllt die Balken nach einer kurzen Verzögerung erneut langsam
        setTimeout(fillBars, 500); 
    });
});