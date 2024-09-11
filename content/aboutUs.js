const aboutUs = () => {
    

    return `
    <main id="aboutUsMain">

        <section class="intro">
        <h1>Über Uns</h1>
            <h2>Willkommen auf unserer Reise in die Welt der Webentwicklung!</h2>
            <p>Wir sind <strong>[Dein Name]</strong> und <strong>[Name deines Partners]</strong>, zwei Quereinsteiger, die ihre Leidenschaft für Technologie und Kreativität entdeckt haben. Unser Abenteuer in der Webentwicklung begann vor einigen Monaten im Rahmen eines Projekts des BBRZ (Berufliches Bildungs- und Rehabilitationszentrum). Aus dem Wunsch heraus, uns beruflich neu zu orientieren und dabei unsere Fähigkeiten weiterzuentwickeln, entstand die Idee zu diesem Projekt, das nun unsere erste, eigene Website hervorgebracht hat.</p>
        </section>
        <section class="project-origin">
            <h2>Die Entstehung unseres Projekts</h2>
            <p>Alles begann mit unserer Teilnahme an einem Bildungsprogramm des BBRZ, das uns die Möglichkeit gab, neue berufliche Wege zu erkunden. Während der Schulungen und Workshops merkten wir schnell, dass die Welt der Webentwicklung uns faszinierte. Gemeinsam beschlossen wir, ein eigenes Projekt ins Leben zu rufen, um das Gelernte direkt in die Praxis umzusetzen.</p>
            <p>Mit Unterstützung der Ausbilder und Coaches des BBRZ starteten wir die Entwicklung unserer ersten Website. Von der Konzeption über das Design bis hin zur technischen Umsetzung – jede Phase des Projekts war für uns eine wertvolle Lernerfahrung. Das Projekt war nicht nur eine Herausforderung, sondern auch eine Chance, unsere Kreativität und unser neu erworbenes Wissen zu testen.</p>
        </section>
        <section class="who-we-are">
            <h2>Wer wir sind</h2>
            <p>Ursprünglich kommen wir aus unterschiedlichen beruflichen Bereichen, doch dank des BBRZ haben wir die Möglichkeit bekommen, unsere Karriere neu auszurichten. Mit viel Engagement und der Unterstützung des BBRZ-Teams haben wir uns in die Welt der Webentwicklung eingearbeitet und unser erstes eigenes Webprojekt erfolgreich umgesetzt.</p>
        </section>
        <section class="what-we-do">
            <h2>Was wir machen</h2>
            <p>Unser Fokus liegt darauf, benutzerfreundliche, ansprechende und funktionale Websites zu gestalten. Wir legen großen Wert darauf, dass unsere Designs nicht nur ästhetisch ansprechend, sondern auch intuitiv und funktional sind. Dabei steht die enge Zusammenarbeit mit unseren Kunden im Mittelpunkt, um ihre Visionen bestmöglich zu realisieren.</p>
        </section>
        <section class="why-us">
            <h2>Warum wir?</h2>
            <p>Als Quereinsteiger bringen wir frische Perspektiven und innovative Ideen in jedes Projekt ein. Durch unsere Ausbildung beim BBRZ haben wir ein solides Fundament in der Webentwicklung und kombinieren dieses Wissen mit unserer Kreativität und Leidenschaft. Unsere Stärke liegt in unserer Fähigkeit, individuelle und maßgeschneiderte Lösungen zu finden.</p>
        </section>
        <section class="mission">
            <h2>Unsere Mission</h2>
            <p>Unsere Mission ist es, aus jedem neuen Projekt eine Möglichkeit zu machen, weiter zu wachsen und zu lernen. Das BBRZ-Projekt war der Startpunkt, aber wir sind fest entschlossen, unsere Fähigkeiten weiter auszubauen und immer bessere und kreativere Lösungen für unsere Kunden zu entwickeln.</p>
        </section>
    </main>`;
}



export const  createAboutUsHTML = (contentBox,style) => {

    const styleSheet = "./styles/aboutUs.css";
    style.setAttribute("href", styleSheet);
    sessionStorage.setItem("content", "createAboutUsHTML");
    
    if(sessionStorage.getItem("aboutUs")){
        contentBox.innerHTML = sessionStorage.getItem("aboutUs");
    }else{
        contentBox.innerHTML = aboutUs();
        sessionStorage.setItem("aboutUs", contentBox.innerHTML);

    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

}