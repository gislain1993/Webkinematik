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

### Relativbewegung

Wenn Drehgelenke angetrieben werden, ist die Drehzahl des angetriebenen Glieds anhand des vorliegenden Winkelgeschwindigkeitsverlaufs zu jedem Zeitpunkt bekannt. Ist nun das andere -am Gelenk beteiligte- Glied seinerseits beweglich, sind die Gestzmäßigkeiten der Relativbewegung nach Abschnitt 5.8 anzuwenden. Dies gilt grundsätzlich für gesuchte Winkelgößen und deren zeitliche Ableitungen aus Sicht beweglicher Glieder. Insbesondere kann hierbei sie *3-Ebenen Gleichung (5.24)* vorteilhaft eingesetzt werden.

<figure>

<img src="./Bilder/bild 9.png">

</figure>

Die Vorgehensweise wird am Beispiel einer Planetenradstufe (9) näher erläutert. Das Sonnenrad *1* und das Planetenrad *2* stehen mitaneinder im Eingriff. Ihre Wälzkreise berühren sich im Punkt *C* und Steg *3* verbindet deren Mittelpunkte drehgelenkig. Das Hohlrad *0* ist gestellfest und hat im Punkt *D* den gemeinsamen Wälzpunkt mit Rad *2*. Die Gschwindigkeit des Punkts *B* lautet nach Euler

$$\bold v_{B}~=~w_{30}(r_{1}+r_{2})\tilde \bold e_{AB}$$

Im punkt *C* gilt die Gleichheit der Gescwindigkeiten von Glied *1* und *2*.

$$w_{10}r_{1} \tilde \bold e_{AB}~=~ \bold v_{B}-w_{20}\bold r_{2} \tilde\bold e_{AB}$$

Die Geschwindigkeit im Punkt D muss wegen der Wälzbedingung verschwinden.

$$0~=~ \bold v_{B}-w_{20} r_{2} \tilde\bold e_{AB}$$
 Aus diesen letzten Gleichungen läßt sich $\bold v_B$ entfernen und wegen der gleichen Richtung aller Vektoren in skalarer Form schreiben

 $$w_{20}~=~ -2w_{10} \frac{r_{2}}{r_{1}}$$

 Die erste Gleichung liefert damit

 $$w_{30}~=~ -2w_{10} \frac{r_{2}}{r_{1}+r_{2}}$$
 Aus den nun gegebenen absoluten Winkelgeschwindigkeiten kann beispielerweise die relative Winkelgeschwindigkeit $w_{23}$ mit der 3-Ebenen Gleichung gefunden werden. Aus
 $$w_{02}+w_{23}+w_{30}~=~0$$
 erhalten wir

 $$w_{23}~=~w_{20}-w_{30}~=~...~=~2w_{10}\frac{r_2^2}{r_1(r_1+r_2)}$$

Die sog. *Standübersetzung s* des Umlaufrädergetriebes bezieht die Winkelgeschwindigkeiten von Sonnen- und Hohlrad auf den rehend angenommenen Steg

$$s~=~\frac{w_{23}}{w_{03}}~=~-\frac{r_2}{r_1}$$
Die Relativkinematik lässt sich genauso gut zur Analyse ungleichförmiger Getriebe anwenden.