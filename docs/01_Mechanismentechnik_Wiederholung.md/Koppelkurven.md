---
"layout": "page",
"lang": "de",
"title": "Mechanismentechnik Wiederholung",
"subtitle": "Koppelkurven",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Wiederholung der Lehrinhalte des Wahlpflichtmoduls Mechanismentechnik",
"tags": ["Mechanismentechnik","Bewegungs- und Kraftübertragung","Getriebekinematik","Schleifengleichung","Viergelenk","Lageanalyse","Übertragungsfunktion","Koppelkurven","g2","mec2"],
"math": true
---

## 1.5 Koppelkurven

> *&bdquo;Solche Koppelkurve können [...] die verschiedensten Figuren bilden: Kreise, Ovale, gerade Linien, bohnen-, gurken- und nierenförmige, brotförmige, herzförmige, zwiebelförmige Bahnen, Achter und mehrfach verschlungene Gebilde, die in technischen Anwendungen mannigfach ausgenutzt werden.&ldquo;*
>
> (Otto Kraemer[<sup>1</sup>](#1))

Koppelkurven sind die Bahnen von Gliedpunkten[<sup>2</sup>](#2). Solche Punktbahnen sind von hoher praktischer Bedeutung. Beispielweise kann eine vorliegende Bewegungsaufgaben die Führung eines Punkts entlang einer solchen Bahn fordern oder die Übertragungsfunktion des Getriebes wird unter Verwendung einer geeigneten Koppelkurve in die gewünschte Gestalt gebracht[<sup>3</sup>](#3). Die Bewegung der Getriebeglieder sind mit der Wahl von Getriebestruktur und -geometrie festgelegt. Dennoch erzeugt jeder Gliedpunkt während seiner Bewegung eine individuelle Kurvengestalt und lässt dem Getriebekonstrukteur damit noch gewisse Freiheiten zur Erfüllung seiner aktuellen Bewegungsaufgabe. Mit heutigen konstruktionsunterstützenden Systemen und ihren parametrisierenden Fähigkeiten lassen sich Koppelkurven vergleichweise einfach erzeugen. Die punktweise Berechnung oder zeichnerische Konstruktion von Hand ist dagegen mühsam.

<aside>
<g-2 width="250" height="230" x0="30" y0="25" cartesian>
{ 
"main": [
    {"c":"avec","a":{"x":10,"y":0,"r":30,"dw":1.5,"ls":"green","label":{"str":"&varphi;", "off":-2.5 }}},
    {"c":"avec","a":{"x":30,"y":100,"r":80,"dw":0.3,"ls":"green","label":{"str":"&theta;", "off":-5 }}},
    { "c": "lin", "a": { "x1":-20, "y1":0, "x2":170, "y2":0, "ld":[8,4,1,4], "label":{"str":"d", "off": 5 }}},
    { "c": "lin", "a": { "x1":30, "y1":100, "x2":140, "y2":100, "ld":[8,4,1,4], "label":{"str":"g", "off": 5 }}},
    { "c": "beam", "a": { "pts":[30,100,100,180,170,150], "fs":"silver", "label":{"str":"b", "off": 5 }}},
    { "c": "bar", "a": { "x1":0, "y1":0, "x2":30, "y2":100, "label":{"str":"a", "off": -5 }}},
    { "c": "bar", "a": { "x1":30, "y1":100, "x2":170, "y2":150, "label":{"str":"b", "off": -5 }}},
    { "c": "bar", "a": { "x1":150, "y1":0, "x2":170, "y2":150, "label":{"str":"b", "off": 5 }}},
    { "c": "nodfix", "a": { "x":0, "y":0, "label":{"str":"A0", "loc": "sw", "off": 15 } } },
    { "c": "nodfix", "a": { "x":150, "y":0, "label":{"str":"B0", "loc": "se", "off": 15 } } },
    { "c": "nod", "a": { "x":170, "y":150, "label":{"str":"B", "loc": "ne", "off": 5 } } },
    {"c":"vec","a":{"x1":30,"y1":100,"x2":120,"y2":132,"ls":"darkred","lw":3 }},
    {"c":"vec","a":{"x1":120,"y1":132,"x2":100,"y2":180,"ls":"darkred","lw":3 }},
    { "c": "nod", "a": { "x":30, "y":100, "label":{"str":"A", "loc": "nw", "off": 5 } } },
    { "c": "nod", "a": { "x":100, "y":180, "label":{"str":"C", "loc": "ne", "off": 5 } } }
    ]
}
</g-2>

#### Abb. 1.4: Koppelpunkt C des Viergelenks

</aside>

Mit dem aus Gleichung (1.10) bekannten Winkel $\theta$ kann die Lage eines Koppelpunkts $C$ eines Viergelenkgetriebes in Abhängigkeit vom Winkelparameter $\varphi$ bestimmt werden.

> $$\bm r_c = a\,\bm e_\varphi + b\,(\lambda \bm e_\theta + v\bm{\tilde e}_\theta)$$(6.18)

Dabei legen die Parameter $\lambda$ und $v$ die relative Lage des Koppelpunkts zur Koppelgeraden $b$ fest. Beziehung (1.18) ist somit die Gleichung der Koppelkurve des Punktes $C$.

<br>

Die Koppelkurven von Viergelenkgetrieben sind *trizirkulare Kurven* 6. Ordnung, diejenigen der Schubkurbel sind *zirkular* und von 4. Ordnung. Die Koppelkurven des Doppelschiebers sind *Ellipsen* [[Mod95]](#Mod95).

<figure>
<img src="../Bilder/Koppelkurven des Viergelenks.png">

#### Abb. 1.5: Koppelkurven des Viergelenks [(vgl. Gössner 2017, S.106)](#goessner2017)

</figure>

Erstaunlicherweise verschmähen Getriebekonstrukteure häufig die Schönheit der geschwungenen Koppelkurven und suchen vielmehr nach Möglichkeiten der Erzeugung schnöder, geradliniger Bahnen oder zumindest Kurven mit hinreichendem geradlinigen Anteil. Solche *Geradführungsgetriebe* werden wir in einem späteren Kapitel näher beleuchten [(vgl. Gössner 2017, S.106)](#goessner2017).

Es lässt sich nachweisen, dass jede Koppelkurve eines Viergelenkgetriebes durch zwei weitere unterschiedliche Viergelenkgetriebe exakt nachgebildet werden kann [(vgl. Gössner 2017, S.106)](#goessner2017). Näheres dazu finden Sie unter <a target="_blank" rel="noopener noreferrer" href="https://goessner.github.io/Mechanismentechnik/11_Ma%C3%9Fsynthese.md/Aufgabe_11.11.html">*Satz von Roberts/Tschebyschew.*</a>

## References

<span id="1">[1]&emsp;Otto Kraemer, *Getriebelehre*, G. Braun, Karlsruhe, 1987</span>

<span id="2">[2]&emsp;Der Begriff *Gliedpunktbahn* ist sehr viel allgemeiner. Tatsächlich sind jedoch die Bahnen von mit dem Gestell drehgelenkig oder per Schubgelenk verbundenen Gliedern triviale Kreise, Kreisbögen oder Geradenabschnitte und damit meist uninteressant. Koppelglieder dagegen erzeugen mit ihren Punkten mannigfaltige Kurvengestalten, deren verschiedene Eigenschaften gezielt genutzt werden können. Vor diesem Hintergrund hat sich der Begriff *Koppelkurve* zur Bezeichnung der Bahn von &ndash;nicht nur&ndash; Koppelpunkten weitgehend etabliert.

<span id="3">[3]&emsp;Siehe *Koppelrastgetriebe.*</span>

<span id="4">[Mod95]&emsp;Kurt Luck, Karl-Heinz Modeler, *Getriebetechnik Analyse, Synthese, Optimierung*, Springer, Berlin/Heidelberg, 1995</span>

<span id="goessner2017">Gössner, S., 2017. Mechanismentechnik: Vektorielle Analyse ebener Mechanismen. Berlin: Logos