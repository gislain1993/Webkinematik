---
"layout": "page",
"lang": "de",
"title": "Mechanismentechnik Wiederholung",
"subtitle": "Lageanalyse des Viergelenks",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Wiederholung der Lehrinhalte des Wahlpflichtmoduls Mechanismentechnik",
"tags": ["Mechanismentechnik","Bewegungs- und Kraftübertragung","Getriebekinematik","Schleifengleichung","Viergelenk","Lageanalyse","g2","mec2"],
"math": true
---

<aside>
<g-2 width="250" height="210" x0="30" y0="30" cartesian>
{ 
"main": [
    {"c":"avec","a":{"x":10,"y":0,"r":30,"dw":1.5,"ls":"green","label":{"str":"&varphi;", "off":-2.5 }}},
    {"c":"avec","a":{"x":160,"y":0,"r":30,"dw":1.6,"ls":"green","label":{"str":"&psi;", "off":-2.5 }}},
    {"c":"avec","a":{"x":30,"y":100,"r":40,"dw":1,"w":-0.7,"ls":"green","label":{"str":"&phi;", "off":-5 }}},
    {"c":"avec","a":{"x":30,"y":100,"r":70,"dw":0.3,"w":0,"ls":"green","label":{"str":"&theta;", "off":5 }}},
    {"c":"avec","a":{"x":30,"y":100,"r":70,"dw":-0.68,"w":0,"ls":"green","label":{"str":"&eta;", "off":5 }}},
    {"c":"avec","a":{"x":130,"y":10,"r":20,"dw": -1.3,"w":3.6,"ls":"green","label":{"str":"&eta;", "off":-4 }}},
    { "c": "lin", "a": { "x1":-20, "y1":0, "x2":170, "y2":0, "ld":[8,4,1,4], "label":{"str":"d", "off": 5 }}},
    { "c": "lin", "a": { "x1":30, "y1":100, "x2":140, "y2":100, "ld":[8,4,1,4]}},
    { "c": "lin", "a": { "x1":30, "y1":100, "x2":150, "y2":0, "ld":[8,4,1,4], "label":{"str":"g", "off": 5 }}},
    { "c": "bar", "a": { "x1":0, "y1":0, "x2":30, "y2":100, "label":{"str":"a", "off": -5 }}},
    { "c": "bar", "a": { "x1":30, "y1":100, "x2":170, "y2":150, "label":{"str":"b", "off": -5 }}},
    { "c": "bar", "a": { "x1":150, "y1":0, "x2":170, "y2":150, "label":{"str":"c", "off": 5 }}},
    {"c":"vec","a":{"x1":30,"y1":100,"x2":80,"y2":118,"ls":"darkred","lw":3 }},
    {"c":"vec","a":{"x1":0,"y1":0,"x2":15,"y2":50,"ls":"darkred","lw":3 }},
    {"c":"vec","a":{"x1":150,"y1":0,"x2":157,"y2":50,"ls":"darkred","lw":3 }},
    {"c":"vec","a":{"x1":30,"y1":100,"x2":90,"y2":50,"ls":"darkred","lw":1.5 }},
    { "c": "nodfix", "a": { "x":0, "y":0, "label":{"str":"A0", "loc": "sw", "off": 15 } } },
    { "c": "nodfix", "a": { "x":150, "y":0, "label":{"str":"B0", "loc": "se", "off": 15 } } },
    { "c": "nod", "a": { "x":30, "y":100, "label":{"str":"A", "loc": "nw", "off": 5 } } },
    { "c": "nod", "a": { "x":170, "y":150, "label":{"str":"B", "loc": "ne", "off": 5 } } }
    ]
}
</g-2>

#### **Abb. 1.3:** Geometrie des Viergelenks

</aside>

## 1.3 Lageanalyse des Viergelenks

Zur Lageanalyse der Glieder eines Viergelenks werden die Gliedlängen $a$, $b$, $c$, $d$ und der Winkel $\varphi$ gemäß Bild 1.3 vorgegeben. Von Interesse sind nun die Winkel $\theta$ und $\psi$ der restlichen beiden beweglichen Glieder bezüglich der positiven x-Achse.

Unter Verwendung der Hilfsgeraden $g$ lauten die Maschengleichungen der Dreiecke $A_0BB_0$ und $AB_0B$ vektoriell:

> $$a\,\bm e_\varphi + g\,\bm e_\eta - d\,\bm e_x = \bm 0$$ (1.2)

> $$g\,\bm e_\eta + c\,\bm e_\psi - b\,\bm e_\theta = \bm 0$$ (1.3)

umstellen von Gleichung (1.2) nach $g\,\bm e_\eta$ und Quadrieren liefert

> $$g^2 = a^2 + d^2 - 2ad \cos\varphi.$$ (1.4)

Umstellen von Gleichung (1.3) nach $c\,\bm e_\theta$ und erneutes Quadrieren führt zu

$$c^2 = b^2 + g^2 - 2bg (\bm e_\theta \bm e_\eta).$$

Mit $\bm e_\theta \bm e_\eta = \cos(\theta - \eta) = \cos\varphi$ kann hieraus ein Ausdruck für $\cos\phi$ gewonnen werden.

> $$\cos\phi = \frac{b^2 + g^2 -c^2}{2\,b\,g}$$ (1.5)

Mittels des bekannten Zusammenhangs $\sin^2\phi = 1 - \cos^2\phi$ erhalten wir darüber hinaus den Term

> $$\sin\phi = \frac{\sqrt{4b^2g^2-(b^2 + g^2 -c^2)^2}}{2\,b\,g}.$$(1.6)

Die skalaren Komponenten von Gleichungen (1.2) liefern unmittelbar den trigonometrischen Ausdrücke des Winkels $\eta$

> $$\begin{aligned}
\sin\eta &= \frac{-a\sin\varphi}{g}\\\\
\cos\eta &= \frac{d-a\cos\varphi}{g}
\end{aligned}$$(1.7)

Für den Koppelwinkel $\theta = \phi + \eta$ lässt sich nun durch die entsprechenden Additionstheoreme hinschreiben:

$$\sin\theta = \sin\phi\, \cos\eta + \cos\phi\, \sin\eta$$
$$\cos\theta = \cos\phi\, \cos\eta - \sin\phi\, \sin\eta$$

Eine Verwendung der Beziehungen (1.5), (1.6) und (1.7) resultiert schließlich in Gleichungen zur eindeutigen Ermittlung des gesuchten Winkels $\theta$ aus den gegebenen Größen.

> $$\begin{aligned}
\sin\theta &= \frac{(d-a\cos\varphi)\sqrt{4b^2g^2-(b^2+g^2-c^2)^2}-a\sin\varphi(b^2+g^2-c^2)}{2\,b\,g^2}\\\\
\cos\theta &= \frac{a\sin\varphi\sqrt{4b^2g^2-(b^2+g^2-c^2)^2}+(d-a\cos\varphi)(b^2+g^2-c^2)}{2\,b\,g^2}
\end{aligned}$$(1.8)

Zur Bestimmung des jetzt noch fehlenden Winkels $\psi$ wird Gleichung (1.3) in Komponentenschreibweise entsprechend umgestellt

$$\sin\psi = \frac{b\,\sin\theta+a\,\sin\varphi}{c}$$
$$\cos\psi = \frac{b\,\cos\theta-(d-a\,\cos\varphi)}{c}$$

und unter Verwendung der nun bekannten trigonometrischen Ausdrücke des Winkels $\theta$ erhalten wir letztlich nach einigen Umformungen:

> $$\begin{aligned}
\sin\psi &= \frac{(d-a\cos\varphi)\sqrt{4c^2g^2-(g^2+c^2-b^2)^2}+a\sin\varphi(g^2+c^2-b^2)}{2\,c\,g^2}\\\\
\cos\psi &= \frac{a\sin\varphi\sqrt{4c^2g^2-(g^2+c^2-b^2)^2}-(d-a\cos\varphi)(g^2+c^2-b^2)}{2\,c\,g^2}
\end{aligned}$$(1.9)

Diese Beziehungen lassen sich übrigens analog zu (1.8) als Additionstheoreme der Winkel $\eta$ und $\xi$ auffassen, wobei $\xi$ der Winkel zwischen den Strecken $c$ und $g$ ist.

$$\sin\psi = \sin\xi\, \cos\eta - \cos\xi\,\sin\eta$$
$$\cos\psi = -(\cos\xi\,\cos\eta + \sin\xi\,\sin\eta)$$

Mit der Kenntnis des Winkels $\xi$ können wir darüber hinaus auch auf einfache Weise den Übertragungswinkel $\mu =\pi-\phi-\xi$ zwischen den Strecke $b$ und $c$ bestimmen. Auf diesen Übertragungswinkel wird im weitereren Verlauf noch näher eingegangen.

Das Ergebnis der Quadratwurzel der Gleichungen (1.8) und (1.9) kann genau genommen wahlweise positiv oder negativ sein. Da jedoch der jeweils negative Wert bloß auf ein zur x-Achse spiegelbildliches Viergelenk gemäß Bild 1.3 führt, wird auf eine &ndash; zwar mathematisch korrekte, praktisch jedoch nur gering nützliche &ndash; Notation dieses Vorzeichens verzichtet.