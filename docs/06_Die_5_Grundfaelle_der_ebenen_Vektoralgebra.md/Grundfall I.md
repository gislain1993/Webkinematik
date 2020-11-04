---
"layout": "page",
"lang": "de",
"title": "Grundfälle der ebenen Vektoralgebra",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Analyse und Lösung einfacher Mechanismen mittels des ersten Grundfalls der ebenen Vektoralgebra und den fundamentalen Webtechnologien",
"tags": ["Webkinematik","Webentwicklung","Getriebekinematik","Mechanismentechnik","Bewegungsübertragung","Kraftübertragung","Vektoralgebra","g2","mec2"],
"math": true
---

<aside>
<g-2 width="300" height="300" x0="55" y0="50" cartesian>
{ 
"main": [
    {"c":"lin","a":{"x1":180,"y1":-25,"x2":180,"y2":-35,"ls":"green"}},
    {"c":"lin","a":{"x1":0,"y1":-25,"x2":0,"y2":-35,"ls":"green"}},
    { "c": "dim", "a": { "x1":10, "y1":225, "x2":217.5, "y2":50,"label":{"str":"l", "off":-5 }}},
    { "c": "dim", "a": { "x1":22.5, "y1":180, "x2":200, "y2":30,"label":{"str":"b", "off":-5 }}},
    { "c": "dim", "a": { "x1":-30, "y1":0, "x2":-30, "y2":150, "label":{"str":"h", "off":-5 }}},
    {"c":"vec","a":{"x1":0,"y1":-30,"x2":180,"y2":-30,"ls":"green","label":{"str":"s","fs":"green", "off":-2.5 }}},
    {"c":"avec","a":{"x":180,"y":0,"r":30,"dw":2.3,"ls":"green","label":{"str":"&psi;", "off":-2.5 }}},
    { "c": "lin", "a": { "x1":-40, "y1":0, "x2":200, "y2":0, "ld":[8,4,1,4]}},
    { "c": "bar", "a": { "x1":180, "y1":0, "x2":-35, "y2":180}},
    { "c": "slider", "a": { "x":0, "y":150, "w":2.45}},
    { "c": "origin","a": {"x": 0,"y": 0,"lw": 1.5}},
    { "c": "nod", "a": { "x":-35, "y":180, "label":{"str":"C", "loc": "nw", "off": 5 } } },
    { "c": "nodflt", "a": { "x":180, "y":0, "label":{"str":"A", "loc": "se", "off": 15 } } },
    { "c": "nodfix", "a": { "x":0, "y":150, "label":{"str":"B", "loc": "sw", "off": 15 } } }
    ]
}
</g-2>

#### Abb. 6.1: Gegebener Mechanismus

</aside>

## Grundfall I

### Aufgabenstellung

Analysieren Sie den dargestellten Mechanismus und stellen Sie diesen anschließend interaktiv mit der g2-Bibliothek im Browser dar.

**Geg.:** $h = 150\ mm$, $l = 280\ mm$, $s=\left\{\begin{array}{ll} > -\ 220\ mm\\ < \quad 200\ mm \end{array}\right.$ 

<br><br>

### Kinematisches Modell

<figure>
<mec-2 width="500" height="350" x0="240" y0="50" cartesian nodelabels constraintinfo="vel">
{
  "gravity":true,
  "nodes": [
    { "id":"A","x":0,"y":0 },
    { "id":"A0","x":-220,"y":0,"base":true },
    { "id":"B","x":0,"y":150,"base":true,"idloc":"e" },
    { "id":"C","x":0,"y":280,"idloc":"ne" }
  ],
  "constraints": [
    { "id":"b","p1":"B","p2":"A","len":{"type":"free"},"ori":{ "type":"drive","Dt":5,"Dw": -0.9732,"bounce":true,"func": "seq", "args": [
            { "func": "linear", "dt": 2, "dz": 1 },
            { "func": "const", "dt": 1 },
            { "func": "linear", "dt": 2, "dz": 1 }] } },
    { "id":"c","p1":"A","p2":"C","len":{"type":"const"},"ori":{ "type":"const","ref":"b" } },
    { "id":"a","p1":"A0","p2":"A","len":{"type":"free"},"ori":{ "type":"const" },"lw":1, "ls":"black","ld":[20,4,2,4] }
  ],
  "shapes": [
    { "type":"fix","p":"B" },
    { "type":"flt","p":"A" },
    { "type":"bar","p1":"A","p2":"C" },
    { "type":"slider","p":"B","wref":"c"}
  ]
}
</mec-2>
<h4>Modell 1: Kinematisches Modell</h4>
</figure>

### Lösung

Zur interaktiven Darstellung im Canvas-Element werden die Koordinaten der Gliedpunkt $A$, $B$ und $C$ in Abhängigkeit der Laufvariable $s$ des gegebenen Mechanismus benötigt.

Wir beginnen mit dem Aufstellen der Maschengleichung und identifizieren bzw. unterstreichen die unbekannten Größen. Anschließend wird die Gleichung derart umgeformt, sodass alle bekannten Variablen sich auf der rechten Seite befinden.

$$\begin{aligned} s\,\bm{e_x} + \underline{b}\,\underline{\bm{e_\psi}} - h\,\bm{e_y} &= 0\\ b\,\bm{e_\psi} &= h\,\bm{e_y} - s\,\bm{e_x}\\ b\,\bm{e_\psi}&= \bm{g}\end{aligned}$$

mit

$$\bm{g} = h\,\bm{e_y}-s\,\bm{e_x} = \begin{pmatrix}-\,s\\\quad h\end{pmatrix}$$

Da es einen unbekannten Vektor mit zugehörigem unbekanntem Skalar gibt, identifizieren wir Grundfall I.

> #### Grundfall I
>
> $$\underline{a\,\bm{e_\alpha}}-b\,\bm{e_\beta}= \bm{c}$$
>
> #### Lösung
>
> $$a = (\bm{b} + \bm{c})\,\bm{\tilde{e}_\alpha}\quad und\quad \bm{e_\alpha = \frac{\bm{b}+\bm{c}}{a}}$$

Die Länge $b$ lässt sich mit Satz des Pythagoras bestimmen.

$$b = \sqrt{h^2+s^2}$$

Nun kann die allgemeine Lösung des 1. Grundfalles zur Bestimmung des vorliegenden Mechanismus verwerdet werden. Für eine strukturierte Vorgehensweise eignet sich das Anlegen einer Tabelle.

| Grundfall I | Mechanismus |
|:-----------:|:-----------:|
| $a$ | $b$ |
|$\bm{e_\alpha}$ | $\bm{e_\psi}$ |
|$b\,\bm{e_\beta}$ | $0$ |
<br>

Daraus resultiert

$$\bm{e_\psi} = \frac{\bm{g}}{b} = \frac{1}{b}\begin{pmatrix}-\,s\\\quad h\end{pmatrix}$$

und 

$$\psi = \arctan_2\left(\frac{h}{b}, \frac{-s}{b}\right).$$

Die Umsetzung in HTML und JavaScript erfolgt entsprechend der Kapitel Animation und interaktive Elemente.

Als erstes wird ein Canvas-Element der Größe `500x400px`, sowie ein Range-Input mit einem Bereich entsprechend der Vorgabe von $s=\left\{\begin{array}{ll} > -\ 220\ mm\\ < \quad 200\ mm \end{array}\right.$, angelegt. Die Laufvariable $s$ wird als globale Variable angelegt. Zusätzlich wird ein `mec`-Objekt erstellt, das mittels `number`- & `getter`-Properties alle notwendigen Berechnungen vornimmt.

Nachdem die zu Beginn erarbeiteten mathematischen Erkenntnisse in Code überführt wurden, sollte das `mec`-Objekt folgendermaßen aussehen:

```JavaScript
mec = {
     h: 150,
     l: 280,
     get g() { return {x:-s, y:h}; },
     get b() { return Math.sqrt(this.h*this.h + s*s); },
     get psi() { return Math.atan2(this.h/this.b, -s/this.b); },
     get epsi() { return {x:Math.cos(this.psi), y:Math.sin(this.psi)}; },
 
     // Gelenkpunkte
     get A() { return {x:+s, y:0}; },
     get B() { return { x:0, y:this.h }; },
     get C() { return { x:this.A.x + this.l*this.epsi.x, y:this.A.y + this.l*this.epsi.y }; } 
}
```

Den Mechanismus und die zugegebenermaßen bei diesem Beispiel kaum vorhandene statische Umgebung, teilen wir wie gehabt in ein statisches (world)

```JavaScript
// baut und initialisiert die statische Umgebung
world = g2().clr()
            .view({cartesian:true,x:250,y:100}) // Nullpunkt verschoben   
            .use({grp:g})
            .nodfix({...mec.B}),
```

und dynamisches (g) g2-Objekt auf, das wir in der postion()-Funktion füllen.

```JavaScript
const g = g2();
 
//...
 
function position() {
    g.del()
     .bar({x1:mec.A.x, y1:mec.A.y, x2:mec.C.x, y2:mec.C.y})
     .slider({...mec.B, w:mec.psi, fs:"@nodfill"})
     .nodflt({...mec.A})
     .nod({...mec.C})
}
```

Die Aktualisierung der Laufvariable, die Implementierung des dirty-flags, die Erstellung der render()-Funktion sowie des restlichen Quellcodes verhalten sich vollständig analog zu den Beispielen aus den vorherigen Kapiteln.

Der fertige Quelltext sollte folgendermaßen aussehen

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Schubschleife</title>
</head>
 
<body>
    <h2>Schubschleife - Grundfall 1</h2>
    <canvas id="c" width="500" height="400" style="border-width:1px;border-style:solid"></canvas>
    <br>
    <label for="sslider">s:
    <input type="range" id="sslider" style="width:450px;vertical-align:middle;padding:0" min="-200" max="200" value="0">
    <output id="sout" for="sslider">0</output>mm
    </label>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>

const cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
    sslider = document.getElementById('sslider'),
    sout = document.getElementById('sout'),
    mec = {
        h: 150,
        l: 280,
        get g() { return {x:-s, y:h}; },
        get b() { return Math.sqrt(this.h*this.h + s*s); },
        get psi() { return Math.atan2(this.h/this.b, -s/this.b); },
        get epsi() { return {x:Math.cos(this.psi), y:Math.sin(this.psi)}; },
 
        // Gelenkpunkte
        get A() { return { x:s, y:0}; },
        get B() { return { x:0, y:this.h }; },
        get C() { return { x:this.A.x + this.l*this.epsi.x, y:this.A.y + this.l*this.epsi.y }; }
    },
 
    g = g2(),
 
    // baut und initialisiert statische Umgebung
    world = g2().clr()
                .view({cartesian:true,x:250,y:100}) // Nullpunkt verschoben
                .use({grp:g})
                .nodfix({...mec.B});
 
let s = 0, // Laufvariable
    dirty = true;  // wenn true gibt es was zu aktualisieren
 
function position() {
    g.del()
     .bar({x1:mec.A.x,y1:mec.A.y,x2:mec.C.x,y2:mec.C.y})
     .slider({...mec.B, w:mec.psi})
     .nodflt({...mec.A})
     .nod({...mec.C})
}
 
function render() {
    if (dirty) {
        position();  // aktualisiere Position
        world.exe(ctx);  // rendert world in den Context
        dirty = false;
    }
    requestAnimationFrame(render);  // asynchroner callback von render(), keine Rekursion!
}
 
function sets() {
    if (sslider.value != sout.value) {
        s = +sslider.value;
        sout.innerHTML = sslider.value;
        dirty = true;
    }
}
 
/*
 *  Initialisierung
 */
 
// Eventlistener hinzufuegen
sslider.addEventListener("input",sets);
 
// Animation starten
render();
 
    </script>
</body>
</html>
```

<iframe width=100% height=520 frameborder='no' src='https://goessner.github.io/webkinematik/Grundfaelle/Fall 1/Grundfall_1-Schubschleife.html'></iframe>