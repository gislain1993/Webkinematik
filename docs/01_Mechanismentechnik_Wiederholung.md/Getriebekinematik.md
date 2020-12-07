---
"layout": "page",
"lang": "de",
"title": "Mechanismentechnik Wiederholung",
"subtitle": "Getriebekinematik",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Wiederholung der Lehrinhalte des Wahlpflichtmoduls Mechanismentechnik",
"tags": ["Mechanismentechnik","Bewegungs- und Kraftübertragung","Getriebekinematik","Schleifengleichung","Viergelenk","g2","mec2"],
"math": true
---

## 1.1 Getriebekinematik

Die Kenntnis der kinematischen Eigenschaften eines Getriebegliedes nutzen wir nun,um die Wechselwirkung mehrerer verbundener Glieder innerhalb eines Mechanismus näher zu untersuchen. Die Getriebekinematik ist der Teil der Getriebeanalyse, der sich mit der Geometrie der Bewegung der beteiligten Glieder befasst. Getriebestruktur und Abmessungen der Bauteile sind bereits bekannt und als Methoden werden *graphische, graphoanalytische und vektorielle Verfahren* eingesetzt. Der Schwerpunkt liegt weiterhin auf dem Letzteren [(vgl. Gössner 2017, S.89)](#goessner2017).

## 1.2 Maschengleichung

Eine sehr allgemeine, vektoriell analytischen Vorgehensweise zur geometrischen Getriebebeschreibung bedient sich der *Maschengleichung*. Hierbei werden die *Maschen (Schleifen)* geschlossener kinematischer Ketten als Polygonzug betrachtet [(vgl. Gössner 2017, S.89)](#goessner2017).

Die Maschenzahl ebener Getriebe gehorcht der Beziehung $m = b_1 + b_2 - n +1$ und geht anschaulich aus dem Getriebeschema und besser noch aus der kinematischen Kette hervor (Abbildung 1.1). Die vektorielle Formulierung einer Masche als jeweils geschlossene Vektorzug sei am Beispiel der Viergelenkkette verdeutlicht [(vgl. Gössner 2017, S.89)](#goessner2017).

<figure>
<img src="../Bilder/Maschen von Getriebe.png">

#### **Abb. 1.1:** Maschen von Getriebe und kinematischer Kette [(vgl. Gössner 2017, S.89)](#goessner2017)

</figure>

Wenden wir die Maschengleichung auf das Viergelenkgetriebe in Bild 1.2 an, so erhalten wir die Schließbedingung 

<figure>
<img src="../Bilder/Schleife des Viergelenks.png">

#### **Abb. 1.2:** Schleife des Viergelenks [(vgl. Gössner 2017, S.90)](#goessner2017)

</figure>

$$\bm r_{AD} + \bm r_{DC} + \bm r_{CB} + \bm r_{BA} = \bm 0$$ 

unter Verwendung von Gliedlänge und Winkel in polarer Schreibweise

$$d\,\bm e_x + c\,\bm e_\psi - b\,\bm e_\theta - a\,\bm e_\varphi = \bm 0.$$

Wenn wir nun diese Vektorgleichung in ihre skalaren Komponente zerlegen, gewinnen wir zwei algebraische Gleichungen, die so übrigens auch aus entsprechenden geometrischen Überlegungen hervorgehen.

$$d + c\,\cos\psi - b\,\cos\theta - a\,\cos\varphi = 0$$

> $$c\,\sin\psi - b\,\sin\theta - a\,\sin\varphi = 0$$ (1.1)

Diese Gleichungen eignen sich prima, um weiterführende analytische Untersuchungen am Viergelenkgetriebe durchzuführen.

## References

<span id="goessner2017">Gössner, S., 2017. Mechanismentechnik: Vektorielle Analyse ebener Mechanismen. Berlin: Logos