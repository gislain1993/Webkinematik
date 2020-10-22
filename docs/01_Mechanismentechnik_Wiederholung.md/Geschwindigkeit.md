---
"layout": "page",
"lang": "de",
"title": "Dokumentation von Webkinematik",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Notwendige Kentnisse zur Bearbeitung eines Projekts von Webkinematik",
"tags": ["mechanismentechnik","Bewegungs- und Kraftübertragung","g2"],
"math": true
---

### Geschwindigkeit

Beim Vorliegen der Übertragungsgleichung oder -funktion kann die Geschwindigkeit der Übertragungsgröße aus Gleichung Fehler: Referenz nicht gefunden gewonnen werden. Üblicherweise sind wir jedoch an Geschwindigkeiten beliebiger Gliedpunkte oder an Winkelgeschwindigkeiten irgendlwelcher Glieder in bestimmten, ausgezeichneten Stellungen interessiert. Zur Ermittlung dieser Größen bietet sich der *erste Satz von Euler* (5.13) zur Verwendung an.

Wir wollen das Vorgehen an einer Kurbelschwinge illustrieren. Es seien  die Gliedmaße und -laden sowie die Antriebswinkelgeschwindigkeit gegeben. Nun interessieren wir uns für die Winkelgeschwindigkeiten von Koppel und Schwinge und die Geschwindigkeiten der Punkte B und C.
Wir beginnen mit der Anwendung des *ersten Euler'schen Satzes* auf die Kurbel und erhalten:

$$v_{B}~=~ w_{1} \tilde \bold r_{1}$$

<figure>

<img src="./Bilder/bild 6.png">

</figure>

Die Betrachtung der Geschwindigkeit des Punkts *C* als der Koppel sowie als Punkt der Schwinge muss zu dem selben Ergebnis führen und kann gleichgesetzt werden

$$\bold v_{A} + w_{2} \tilde \bold r_{2}~=~ w_{3} \tilde \bold r_{3}$$

Die Multiplikation dieser Vektorgleichung einmal mit $r_{3}$ und zum anderen mit $r_{2}$ liefert die Winkelgeschwindigkeiten

>$$w_{2}~=~ -w_{1} \, \frac{\tilde \bold r_{2}}{\tilde \bold r_{2}r_{3}}$$
>$$w_{3}~=~ -w_{1} \, \frac{\tilde \bold r_{1}}{\tilde \bold r_{2}r_{3}}$$ (6.19)

Die fehlende Geschwindigkeit des Punkts *c* erhalten wir vorzugweise über die Schwinge unter Verwendung der bereits ermittelten Größen zu 

$$v_{c}~=~w_{3} \tilde \bold r_{3}$$

Die Geschwindigkeiten jedes weiteren Gliedpunkts kann durch erneute Anwendung des *eurlerschen Satzes* gewonnwn werden.