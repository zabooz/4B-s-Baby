Wenn du mit GitHub Codespaces arbeitest, ändert sich der Workflow leicht. Hier ist eine angepasste Anleitung, wie man mit einem geforkten Repository auf GitHub arbeitet, sein Fork aktuell hält und Pull Requests an das Original-Repository erstellt:

1. Repository forken
Gehe zu dem Repository, das du forken möchtest, auf GitHub.
Klicke oben rechts auf die Schaltfläche „Fork“.

2. Codespace erstellen
Gehe zu deinem geforkten Repository auf GitHub.
Klicke auf die Schaltfläche „Code“ und dann auf „Create codespace on main“.

3. Upstream-Remote hinzufügen
Öffne das Terminal in deinem Codespace.
Füge das Original-Repository als Upstream-Remote hinzu:

bash
git remote add upstream https://github.com/original-benutzername/original-repo.git
Überprüfe die Remote-Repositories:

git remote -v

Du solltest sowohl origin (dein Fork) als auch upstream (das Original-Repository) sehen.

4. Fork aktuell halten
Hol die neuesten Änderungen vom Upstream-Repository:

git fetch upstream

Wechsle zu deinem main oder master Branch:

git checkout main
Mische die Änderungen vom Upstream-Repository in deinen Branch:

git merge upstream/main

(Optional) Wenn du Konflikte hast, löse diese und committe die Änderungen:

git add .
git commit -m "Konflikte gelöst"

5. Änderungen vornehmen
Erstelle einen neuen Branch für deine Änderungen:

git checkout -b mein-neuer-branch

Nimm deine Änderungen vor und committe diese:

git add .
git commit -m "Beschreibung deiner Änderungen"
Push deinen Branch zu deinem Fork:
git push origin mein-neuer-branch


6. Pull Request erstellen
Gehe zu deinem Fork auf GitHub.
Du solltest eine Schaltfläche sehen, die dich auffordert, einen Pull Request zu erstellen, wenn du deinen Branch gepusht hast. Klicke darauf.
Fülle die Details des Pull Requests aus und beschreibe die Änderungen, die du vorgenommen hast.
Klicke auf „Create Pull Request“.

7. Änderungen im Fork aktuell halten (Optional)
Wenn neue Änderungen im Original-Repository vorgenommen wurden und du diese in deinem Fork haben möchtest:

Wiederhole Schritt 4 (Fork aktuell halten).
Pushe die gemischten Änderungen zu deinem Fork:

git push origin main

Diese angepasste Anleitung sollte dir helfen, mit deinem geforkten Repository im Codespace auf dem neuesten Stand zu bleiben und Pull Requests an das Original-Repository zu senden.