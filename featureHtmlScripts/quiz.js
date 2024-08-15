const quiz = () => {
    return `
        <div id="questionCarousel" class="carousel slide w-100 mx-auto mt-5" >
            <div class="carousel-inner">
                <!-- Erste Folie -->
                <div class="carousel-item active">
                    <img src="/img/psyTest/pic1.jpg" class="d-block w-100" alt="Frage 1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Frage 1: Wie fühlen Sie sich heute?</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question1" id="q1a1">
                            <label class="form-check-label" for="q1a1">Gut</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question1" id="q1a2">
                            <label class="form-check-label" for="q1a2">Mittelmäßig</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question1" id="q1a3">
                            <label class="form-check-label" for="q1a3">Schlecht</label>
                        </div>
                    </div>
                </div>
                <!-- Zweite Folie -->
                <div class="carousel-item" >
                    <img src="/img/psyTest/pic4.png" class="d-block w-100" alt="Frage 2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Frage 2: Was ist Ihre Lieblingsfarbe?</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question2" id="q2a1">
                            <label class="form-check-label" for="q2a1">Blau</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question2" id="q2a2">
                            <label class="form-check-label" for="q2a2">Rot</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question2" id="q2a3">
                            <label class="form-check-label" for="q2a3">Grün</label>
                        </div>
                    </div>
                </div>
                <!-- Dritte Folie -->
                <div class="carousel-item">
                    <img src="/img/psyTest/pic3.jpg" class="d-block w-100" alt="Frage 3">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Frage 3: Wie oft treiben Sie Sport?</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question3" id="q3a1">
                            <label class="form-check-label" for="q3a1">Täglich</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question3" id="q3a2">
                            <label class="form-check-label" for="q3a2">Wöchentlich</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question3" id="q3a3">
                            <label class="form-check-label" for="q3a3">Selten</label>
                        </div>
                    </div>
                </div>
                <!-- Vierte Folie -->
                <div class="carousel-item">
                    <img src="/img/psyTest/pic4.png" class="d-block w-100" alt="Frage 4">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Frage 4: Welches Tier mögen Sie am meisten?</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question4" id="q4a1">
                            <label class="form-check-label" for="q4a1">Hund</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question4" id="q4a2">
                            <label class="form-check-label" for="q4a2">Katze</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question4" id="q4a3">
                            <label class="form-check-label" for="q4a3">Vogel</label>
                        </div>
                    </div>
                </div>
                <!-- Fünfte Folie -->
                <div class="carousel-item">
                    <img src="/img/psyTest/pic9.jpeg" class="d-block w-100" alt="Frage 5">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Frage 5: Was ist Ihr Lieblingsessen?</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question5" id="q5a1">
                            <label class="form-check-label" for="q5a1">Pizza</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question5" id="q5a2">
                            <label class="form-check-label" for="q5a2">Pasta</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question5" id="q5a3">
                            <label class="form-check-label" for="q5a3">Salat</label>
                        </div>
                    </div>
                </div>
                <!-- Letzte Folie mit Absenden-Button -->
                <div class="carousel-item">
                    <img src="/img/psyTest/pic8.jpeg" class="d-block w-100" alt="Danke">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Vielen Dank für Ihre Teilnahme!</h5>
                        <p>Bitte klicken Sie auf den Button, um Ihre Antworten zu senden.</p>
                        <button class="btn btn-primary" id="submitButton">Antworten absenden</button>
                    </div>
                </div>
            </div>
            <!-- Steuerungselemente -->
            <button class="carousel-control-prev" type="button" data-bs-target="#questionCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Zurück</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#questionCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Weiter</span>
            </button>
        </div>
    `;
}

document.getElementById("quiz").innerHTML = quiz();
