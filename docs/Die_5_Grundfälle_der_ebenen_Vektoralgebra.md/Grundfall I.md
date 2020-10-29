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

#### Grundfall I

Aufgabenstellung:

Analysieren Sie den Mechanismus und stellen Sie ihn anschließend mit g2 interaktiv im Browser dar.

<figure>

<img src="./Bilder/bild 17.png">

</figure>

*gegeben:h=150mm,l=280mm,−220<s<200*

**Lösung:**

Um den Mechanismus interaktiv in ein Canvas zu rendern benötigen wir die Koordinaten der Punkte A, B und  C in Abhängigkeit der Laufvariable s.
<br>
Mathematik:

Wir beginnen mit dem Aufstellen der Maschengleichung und dem Sortieren nach Bekannten und Unbekannten:

$$s\bold e_x + b\bold e_\psi - h \bold e_y ~=~ \bold 0$$ <=> $b\bold e_\psi~=~ \bold g$

mit 
$$\bold g ~=~ h\bold e_y - s \bold e_x ~=~ \binom{-s}{h}$$

Da es einen unbekannten Vektor mit zugehörigem unbekanntem Skalar gibt, identifizieren wir Grundfall I.

>  **Grundfall I**
$$<u>a\bold e_\alpha</u> - b\bold e_\beta ~=~ \bold c$$
**Lösung**
$$a~=~(\bold b + \bold c)\tilde\bold e_\alpha$$, 
$$\bold e_\alpha ~=~ \frac {\bold b +\bold c}{a}$$

An *b* kommt man hier einfach über den Satz des Pythagoras:
$\sqrt{h^2+s^2}$

$\bold e_\psi$ergibt sich aus der Formel für Grundfall I. Gesucht ist allgemein
$$a\bold e_\alpha - b\bold e_\beta ~=~ \bold c$$
mit der Lösung
$$\bold e_\alpha ~=~ \frac {\bold b +\bold c}{a}$$
Angewandt auf den hier vorliegenden Mechanismus heißt das also:
$a=b$, $\bold e_\alpha=\bold e_\psi$, $b\bold e_\beta=0$
mit der Lösung
$$\bold e_\psi~=~\frac{\bold g}{b}~=~ \frac{1}{b}\binom{-s}{h}$$

Aus dem Einheitsvektor ergibt sich weiterhin durch den Arkustangens (vorzugsweise mit zwei Argumenten) der unbekannte Winkel $\psi$:

$$\psi~=~atan2(\frac{h}{b},\frac{-s}{b})$$

**Code:**

Die Umsetzung in HTML und JavaScript erfolgt auf dieselbe Weise wie in den Kapiteln Animation und interaktive Elemente.

Es wird ein 500x400px großes Canvas sowie ein Range-Input, mit einem Bereich entsprechend der Vorgabe von s (-200<s<200), angelegt.
Die Laufvariable s legen wir in den globalen Variablen an.
Zudem erstellen wir ein mec-Objekt in welchem wir durch number- und Getter-Properties alle notwendigen Berechnungen vornehmen.

Nachdem wir die oben gewonnen mathematischen Erkenntnisse dort eingetragen haben, sollte das mec-Objekt folgendermaßen aussehen:

```HTML
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
````
Den Mechanismus und die zugegebenermaßen bei diesem Beispiel kaum vorhandene statische Umgebung, teilen wir wie gehabt in ein statisches (*world*)

```HTML
// baut und initialisiert statische Umgebung
world = g2().clr()
            .view({cartesian:true,x:250,y:100}) // Nullpunkt verschoben   
            .use({grp:g})
            .nodfix({...mec.B}),
````
und dynamisches (`g`) g2-Objekt auf, das wir in der `postion()`-Funktion füllen.

```HTML
const g = g2();
 
//...
 
function position() {
    g.del()
     .bar({x1:mec.A.x, y1:mec.A.y, x2:mec.C.x, y2:mec.C.y})
     .slider({...mec.B, w:mec.psi, fs:"@nodfill"})
     .nodflt({...mec.A})
     .nod({...mec.C})
}
````
Die Aktualisierung der Laufvariable, die Implementierung des dirty-flags, die Erstellung der render()-Funktion sowie des restlichen Quellcodes verhalten sich vollständig analog zu den Beispielen aus den vorherigen Kapiteln.
<br>
Ergebnis:

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
````

<iframe width=100% height=520 frameborder='no' src='https://goessner.github.io/webkinematik/Grundfaelle/Fall 1/Grundfall_1-Schubschleife.html'></iframe>
