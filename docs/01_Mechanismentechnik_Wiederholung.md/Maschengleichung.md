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

### Maschengleichung

Eine sehr allgemeine, vektoriell analytischen Vorgehensweise zur geometrischen Getriebebeschreibung
bedient sich der *Maschengleichung* . Hierbei werden die *Maschen
(Schleifen)* geshlossener kinematischer Ketter als Polygonzug betrachtet.

Die Maschenzahl ebener Getriebe gehorcht der Beziehung (2.2) und geht anschaulich aus dem 
Getriebeschema und besser noch aus der kinematischen Kette hervor (1).
Die Die vektorielle Formulierung einer Masche als jeweils geschlossene Vertorzug sei am Beispiel der 
Viergelenkkette verdeutlicht.

<figure>

<img src="./Bilder/bild 1.png">

</figure>

Wenden wir die Maschengleichung auf das Viergelenkgetriebe in Bild 6.2 an, 
so erhalten wir die Schließbedingung 

<figure>

<img src="./Bilder/bild 2.png">

</figure>

$${\bold r}_{AD} + {\bold r}_{DC} + {\bold r}_{CB} + {\bold r}_{BA} = 0 $$ 

bzw. unter Verwendung von Gliedlänge und Winkel

$$d \bold e_x + c \bold e_\psi - b \bold e_\theta - a\bold e_\varphi = 0$$

Wenn wir nun diese Vektorgleichung in ihre skalaren Komponente zerlegen, gewinnen wir zwei algebraische Gleichungen,
die so übrigens auch aus entsprechenden geometrischen Überlegungen hervorgehen.

$$d  + c \bold.cos\psi - b \bold.cos\theta - a\bold .cos\varphi = 0$$
$$c \bold.sin\psi - b \bold.sin\theta - a\bold .sin\varphi = 0$$  (6.1)

Diese Gleichungen eignen sich prima, um weiterführende analytische Untersuchungen am Viegelenkgetribe durchzuführen.
