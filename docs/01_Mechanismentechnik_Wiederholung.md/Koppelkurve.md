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

### Koppelkurven

> Solche Koppelkurve können ...die verschiedensten Figuren bilden: Kreise, Ovale, gerade Linien, bohnen-, gurken- und nierenförmige, brotförmige, herzförmige, zwiebelförmige Bahnen, Achter und mehrfach verschlungene Gebilde, die in technischen Anwendungen mannigfach ausgenutzt werden. *(Otto Kraemer)*

Koppelkurven sind die Bahnen von Gliedpunkten<sup>42</sup>. Solche Punktbahnen sind von hoher paraktischer Bedeutung. Beispielweise kann eine vorliegende Bewegungsaufgaben die Führuhng eines Punkts entlang einer solchen Bahn fordern oder die Übertragungsfunktion des Getriebes wird unter Verwendung einer geeigneten Koppelkurve in die gewünschte Gestalt gebracht<sup>43</sup>.Die Bewegung der Getriebeglieder sind mit der Wahl von Getriebestruktur und -geometrie festgelegt. Dennoch erzeugt jeder Gliedpunkt während seiner Bewegung eine individuelle Kurvengestalt und lässt dem Getriebekonstrukteur damit noch gewisse Freiheiten zur Erfüllung seiner aktuellen Bewegungsaufgabe. Mit heutigen konstruktionsunterstützenden Systemen und ihren parametrisierenden Fähigkeiten lassen sich Koppelkurven vergleichweise einfach erzeugen.Die punktweise Berechnung oder zeichnerische Konstruktion von Hand ist dagegen mühsam.

Mit dem aus Gleichung (6.10) bekannten Winkel $\theta$ kann die Lage eines Koppelpunkts *C* eines Viergelenkgetriebes in Abhängigkeit vom Winkelparameter $\varphi$ bestimmt werden.

---
<span id="41">[41]&emsp; [Kra87]
<span id="42">[42]&emsp; Der Begriff *Gliedpunktbahn* ist sehr viel allgemeiner. Tatsächlich sind jedoch die Bahnen von mit dem Gestell drehgelenkig oder per Schubgelenk verbundenen Gliedern triviale Kreise, Kreisbögen oder Geradenabschnitte und damit meist uninteressant. Koppelglieder dagegen erzeugen mit ihren Punkten mannigfaltige Kurvengestalten, deren verschiedene Eigenschaften gezielt genutzt werden können. Vor diesem Hintergrung hat sich der Begriff *Koppelkurve* zur Bezeichnung der Bahn von -nicht nur- Koppelpunkten weitgehend etabliert.

<span id="43">[43]&emsp; Siehe *Koppelrastgetriebe.*

> $$r_{c}~=~ a\,e_{\varphi} + b (\lambda e_{\theta}+ v\tilde e_{\theta})$$ (6.18)

Dabei legen die Parameter $\lambda$ und $v$ die relative Lage des Koppelpunkts zur Koppelgeraden *b* fest. Beziehnug (6.18) ist somit die Gleichung der Koppelkurve des Punktes *C*.

<figure>

<img src="./Bilder/bild 4.png">

</figure>

Die Koppelkurven von Viergelenkgetrieben sind *trizirkulare Kurven* 6. Ordnung, diejenigen der Schubkurbel sind *zirkular* und von 4. Ordnung. Die Koppelkurven des Doppelschiebers sind *Ellipsen* [Mod95].

<figure>

<img src="./Bilder/bild 5.png">

</figure>

Erstaunlicherweise verschmähen Getriebekonstrukteure häufig die Schönheit der geschwungenen Koppelkurven und suchen vielmehr nach Möglichkeiten der Erzeugung schnöder, geradliniger Bahnen oder zumindest Kurven mit hinreichendem geradlinigen Anteil. Solche *Geradführungsgetriebe* werden wir in einem späteren Kapitel näher beleuchten.

Es lässt sich nachweisen, dass jede Koppelkurve eines viergelenkgetriebes durch zwei weitere unterschiedliche Viergelenkgetriebe exakt nachgebildet werden kann. Der entsprechende *Satz von Roberts/Tschebyschew* wird uns in Absschnitt 11 noch hinreihend fesseln.