---
"layout": "page",
"lang": "de",
"title": "Einführung in g2",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Übungen zum Umgang mit g2",
"tags": ["Web","Grundlagen","JavaScript","Programmierung","g2","Canvas","Pfade"],
"math": true
---

## 3.6 Übungen

g2

**Aufgabe 3.1**

Stellen Sie folgende Mechanismen aus dem Lehrbuch "Mechanismentechnik" grafisch im Browser dar:

* Seite 27, Aufgabe 2.3 "Musgrave Mechanismus"
* Seite 28, Aufgabe 2.7 "Freiheitsgrade von Mechanismen", Mechanismus (5)
* Seite 112, Aufgabe 6.3 "Aufstellen von Schleifengleichungen"
* Seite 255, Aufgabe 12.3 "Seilmechanismus" und Aufgabe 12.4 "Differentialflaschenzug (2)"

g2-chart

**Aufgabe 3.2**

Sie haben in der Übungsaufgabe 2.2 im Kapitel 2 "Webtechnologien" als Lösung einen Datensatz in Form eines Arrays erhalten, der die x-/y-Koordinaten einer Ellipse enthält. Erstellen Sie nun eine HTML-Datei in die Sie die g2 (inkl. g2.chart) Bibliothek einbinden. Kopieren Sie nun Ihr vollständiges Script der Aufgabe 2.2 in ein Script-Tag dieser HTML Datei. Stellen Sie anschließend Ihren Datensatz mit g2 und g2-chart auf einem Canvas grafisch dar.

<figure>
<img src="../Bilder/bild 20.png">

#### **Abb. 3.4:** Ellipse

</figure>

**Aufgabe 3.3**

Wir betrachten Aufgabe 10.8 "Doppelschieber" auf Seite 191 des Lehrbuches "Mechanismentechnik". Die bereinigte erste Ableitung der Potentialfunktion des Doppelschiebers lautet:

$$sin \varphi (1−2cos\varphi)~=~0$$

In der Lösung sind $0°$ und $60°$ als Gleichgewichtslagen angegeben. Überprüfen Sie dies grafisch indem Sie die Funktion mit g2-chart plotten und anschließend die Nullstellen ablesen.