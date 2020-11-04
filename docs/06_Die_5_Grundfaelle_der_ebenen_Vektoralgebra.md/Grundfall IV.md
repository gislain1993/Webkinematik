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

## Grundfall IV

<aside>
<g-2 width="320" height="210" x0="30" y0="30" cartesian>
{ 
"main": [
    {"c":"avec","a":{"x":10,"y":0,"r":30,"dw":1.5,"ls":"green","label":{"str":"&varphi;", "off":-2.5 }}},
    {"c":"avec","a":{"x":250,"y":0,"r":30,"dw":1.9,"ls":"green","label":{"str":"&psi;", "off":-2.5 }}},
    {"c":"avec","a":{"x":30,"y":100,"r":70,"dw":0.3,"w":0,"ls":"green","label":{"str":"&theta;", "off":5 }}},
    { "c": "lin", "a": { "x1":-20, "y1":0, "x2":330, "y2":0, "ld":[8,4,1,4], "label":{"str":"d", "off": 5 }}},
    { "c": "lin", "a": { "x1":30, "y1":100, "x2":140, "y2":100, "ld":[8,4,1,4]}},
    { "c": "bar", "a": { "x1":0, "y1":0, "x2":30, "y2":100, "label":{"str":"a", "off": -5 }}},
    { "c": "bar", "a": { "x1":30, "y1":100, "x2":170, "y2":150, "label":{"str":"b", "off": -5 }}},
    { "c": "bar", "a": { "x1":250, "y1":0, "x2":170, "y2":150, "label":{"str":"c", "off": 5 }}},
    { "c": "nodfix", "a": { "x":0, "y":0, "label":{"str":"A0", "loc": "sw", "off": 15 } } },
    { "c": "nodfix", "a": { "x":250, "y":0, "label":{"str":"B0", "loc": "se", "off": 15 } } },
    { "c": "nod", "a": { "x":30, "y":100, "label":{"str":"A", "loc": "nw", "off": 5 } } },
    { "c": "nod", "a": { "x":170, "y":150, "label":{"str":"B", "loc": "ne", "off": 5 } } }
    ]
}
</g-2>

#### Abb. 6.3: Gegebener Mechanismus

</aside>

### Aufgabenstellung

Prüfen Sie den vorliegenden Mechanismus auf Freiheitsgrad, Anzahl seiner Maschen und Umlauffähigkeit. Analysieren Sie den Mechanismus anschließend und stellen Sie ihn mit g2 interaktiv im Browser so dar, dass er nur in montierbaren Positionen gerendert wird.

Geg.: $a=120$, $b=200$, $c=150$, $d=250$, $0°<φ<360°$

### Freiheitsgrad und Maschenzahl

> Der **Freiheitsgrad nach Grübler** lässt sich über folgende Gleichung bestimmen:
>
> $$F=3(n−1)−b_1−2b_2$$
>
> mit
>
> * $b_1=$ Anzahl der Gelenke denen 1 Freiheitsgrad entzogen wurde
> * $b_2=$ Anzahl der Gelenke denen 2 Freiheitsgrade entzogen wurden 
> * $n=$ Anzahl der Glieder
>
> Die Maschenanzahl berechnet sich durch
>
> $$M=b_1+b_2−n+1$$

Für den gegebenen Mechanismus gilt $n=4$, $b_1=4$, $b_2=0$ und somit $F=1$ und $M=1$. Es handelt sich um ein zwangsläufiges Getriebe mit nur einer Masche.

### Umlauffähigkeit:

> Die **Umlauffähigkeit** eines Viergelenks ist definiert durch
> $$l_{max}+l_{min}<\sum_{Rest}l_i$$
>
> beziehungsweise
>
> $$l_{max}+l_{min}=\sum_{Rest}l_i$$
>
> für durchschlagende Getriebe. Montierbarkeit ist gegeben wenn
> 
> $$l_{max}<\sum_{Rest}l_i$$

Für das vorliegende Getriebe gilt

$$l_{max}+l_{min}<\sum_{Rest}l_i\Harr d+a<b+c\Harr370\nless350$$

Es ist also nicht umlauffähig aber grundsätzlich montierbar, denn

$$l_{max}<\sum_{Rest}l_i \Harr d<a+b+c \Harr 250<470$$

### Analyse:

Aus der Maschengleichung lässt sich Grundfall IV identifizieren

$$a\bm e_\varphi+b\bm e_\theta−c\bm e_\psi−d\bm e_x=\bm 0\Harr b\underline{\bm e_\theta} − c\underline{\bm e_\psi} = \bm g$$

mit

$$\bm g = d\bm e_x−a\bm e_\varphi$$

> #### Grundfall IV:
>
> $$a\bm e_\alpha−b\bm e_\beta=\bm c$$
>
> #### Lösung:
>
> $$\bm e_\alpha=\frac{\lambda\bm c +\mu\bm{\tilde c}}{a}\quad und \quad \bm e_\beta = \frac{a\bm e_\alpha - \bm c}{b}$$
>
> mit
>
> $$\lambda= \frac{1}{2}\left(\frac{a^2}{c^2}-\frac{b^2}{c^2}+1\right)\quad und\quad \mu = \pm\sqrt{\frac{b^2}{c^2}-\lambda^2}$$

Mit getauschten Variablen ergibt sich für unseren Mechanismus

$$\begin{aligned}
\bm e_\theta &=\frac{1}{b}\left[\lambda\begin{pmatrix}g_x\\g_y\end{pmatrix}+\mu\begin{pmatrix}-g_y\\g_x\end{pmatrix}\right]\\\\
\bm e_\psi &= \frac{1}{c}\left[b\begin{pmatrix}e_{\theta x}\\e_{\theta y}\end{pmatrix}-\begin{pmatrix}g_x\\g_y\end{pmatrix}\right]
\end{aligned}$$

mit

$$\lambda=\frac{1}{2}\left(\frac{b^2\cdot c^2}{g^2} +1 \right)\quad und\quad \mu=\pm\sqrt{\frac{b^2}{g^2}-\lambda^2}$$

Quadrieren der Hilfsgeraden $g$ liefert

$$g^2=a^2+d^2−2ad\cos\varphi.$$

Es folgen die unbekannten Winkel $\theta$ und $\psi$ mit

$$\begin{aligned}
\theta &= \arctan_2\left[\frac{1}{b}(\lambda\cdot g_y +\mu\cdot g_x),\quad\frac{1}{b}(\lambda\cdot g_x - \mu\cdot g_y)\right]\\\\
\psi &= \arctan_2\left[\frac{1}{c}(b\cdot e_{\theta y} - g_y),\quad \frac{1}{c}(b\cdot e_{\theta x}-g_x)\right]\\\\
\end{aligned}$$

Der Mechanismus ist damit vollständig bestimmt.

### Code

Wir erstellen nach bekannten Schema eine neue HTML-Datei (bzw. ändern schlauerweise eine fertige wie z.B. die Kurbel mit 2 Slidern). Wir benötigen unter anderem ein 600x400px Canvas sowie einen Range-Input sowie Output für $\varphi$.

Wir erstellen ein mec-Objekt mit Properties für die Gliedlängen $a$, $b$, $c$, $d$ und Gettern für $\bm e_\varphi$, $\bm g$, $g^2$, $\theta$, $\bm e_\theta$, $\psi$, $\bm e_psi$ sowie den Gelenk- und Gestellpunkten $A_0$, $B_0$, $A$, $B$.

Das mec-Objekt sieht dann so aus:

```JavaScript
mec = {
        a:120,
        b:200,
        c:150,
        d:250,
        get ephi() { return { x:Math.cos(phi), y:Math.sin(phi) }; },
        get g()   { return {x:this.d - this.a*Math.cos(phi), y:- this.a*Math.sin(phi)}; },
        get gg()  { return this.a*this.a + this.d*this.d - 2*this.a*this.d*Math.cos(phi); },
        get theta() {
            var gg = this.gg, bb_gg = (this.b*this.b)/gg, g = this.g,
                lambda = 0.5*(bb_gg - this.c*this.c/gg + 1),
                mue = Math.sqrt(bb_gg - lambda*lambda);
            return Math.atan2( (1/this.b)*(lambda*g.y + mue*g.x), (1/this.b)*(lambda*g.x - mue*g.y) )
        },
        get etheta() { return { x:Math.cos(this.theta), y:Math.sin(this.theta)}; },
        get psi() {
            var etheta = this.etheta;
            return Math.atan2( (1/this.c)*(this.b*etheta.y - this.g.y), (1/this.c)*(this.b*etheta.x - this.g.x) )
        },
        get epsi() { return { x:Math.cos(this.psi), y:Math.sin(this.psi)}; },
 
        // Gelenkpunkte
        A0: {x:0, y:0},
        get B0() { return {x:this.d, y:0} },
        get A() { return {x:this.A0.x + this.a*this.ephi.x, y:this.A0.y + this.a*this.ephi.y}; },
        get B() { return {x:this.B0.x + this.c*this.epsi.x, y:this.B0.y + this.c*this.epsi.y}; }
    }
```

Nachdem wir world-Objekt

```JavaScript
// baut und initialisiert statische Umgebung
world = g2().clr()
            .view({cartesian:true,x:150,y:150}) // Nullpunkt verschoben   
            .use({grp:g})
            .nodfix({x:0,y:0})
            .nodfix(mec.B0),
```

und position()-Funktion

```JavaScript
function position() {
    g.del()
     .beam2({pts:[mec.A0.x, mec.A0.y, mec.A.x, mec.A.y, mec.B.x, mec.B.y, mec.B0.x, mec.B0.y ]})
     .nod(mec.A)
     .nod(mec.B)
}
```

angepasst haben, können wir den Mechanismus im Browser betrachten und stellen fest, dass er in Stellungen gerendert werden kann, die mit der gegebenen Geometrie unmöglich erreicht werden können. Wir müssen also, falls wir den für $\varphi$ gegebenen Bereich beibehalten wollen, auf irgendeine Art prüfen ob der Mechanismus bei gerade eingestelltem $\varphi$ montierbar ist. Zu diesem Zweck bedienen wir uns der Hilfsgeraden $\bm g$, welche die Punkte $A$ und $B_0$ verbindet. Der Mechanismus muss montierbar sein wenn die Summer der Gliedlängen $b$ und $c$ größer ist als die Länge von $\bm g$, also `Math.sqrt(mec.gg) < (mec.a + mec.b)`.
Diese Bedingung prüfen wir in der Funktion `setPhi()`, in welcher wir nur `dirty` auf `true` setzen und dem Output das Slider-Value zuweisen, wenn das eben genannte zutrifft. Fall die Bedingung `false` liefert, ändern wir `dirty` nicht und weisen dem Output einen String zu, der anzeigt, dass der eingestellte Wert für $\varphi$ nicht erreichbar ist.
Jetzt haben wir noch das Problem, dass hinter dem Output ein ° steht, egal ob vorher eine Zahl oder ein String kommt. Wir packen dieses Grad-Symbol nun in ein Span-Element <span></span> (Containerelement ohne semantische Bedeutung) mit der Id "grad" und der passenden Abkürzung in den JS Variablen. Dann können wir in `setPhi()` zusätzlich das Attribut `hidden` des Span-Elements auf `true` oder `false` setzen, je nachdem ob das Grad Zeichen sichtbar sein soll oder nicht. Zusätzlich können wir mittels `*ID*.style["color"] = "*FARBE*"` noch ein bisschen Styling für den Output betreiben.

Wir erhalten also folgenden Output

```HTML
<output id="phiout" for="phislider">0</output><span id="grad">°</span>
```

und ändern setPhi() zu

```JavaScript
function setPhi() {
    if (phislider.value != phiout.value) {
        phi = phislider.value*pi/180;
        if (Math.sqrt(mec.gg) < (mec.b + mec.c)) {
            phiout.innerHTML = phislider.value;
            phiout.style["color"] = "black";
            grad.hidden = false;
            dirty = true;
        } else {
            phiout.style["color"] = "red";
            phiout.innerHTML = "unzulaessiger Bereich";
            grad.hidden = true;
        }
    }
}
```

### Ergebnis

Der fertige Quelltext sollte folgendermaßen aussehen:

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Kurbelschwinge</title>
</head>
 
<body>
    <h2>Kurbelschwinge - Grundfall 4</h2>
    <canvas id="c" width="600" height="400" style="border-width:1px;border-style:solid"></canvas>
    <br>
    <label for="phislider">&phi;:
    <input type="range" id="phislider" style="width:550px;vertical-align:middle;padding:0" min="0" max="360" value="0">
    <output id="phiout" for="phislider">0</output><span id="grad">°</span>
    </label>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
 
const cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
    phislider = document.getElementById('phislider'),
    phiout = document.getElementById('phiout')
    grad = document.getElementById('grad'),
 
    pi = Math.PI,
 
    phi = 0, // Laufvariable
 
    mec = {
        a:120,
        b:200,
        c:150,
        d:250,
        get ephi() { return { x:Math.cos(phi), y:Math.sin(phi) }; },
        get g()   { return {x:this.d - this.a*Math.cos(phi), y:- this.a*Math.sin(phi)}; },
        get gg()  { return this.a*this.a + this.d*this.d - 2*this.a*this.d*Math.cos(phi); },
        get theta() {
            var gg = this.gg, bb_gg = (this.b*this.b)/gg, g = this.g,
                lambda = 0.5*(bb_gg - this.c*this.c/gg + 1),
                mue = Math.sqrt(bb_gg - lambda*lambda);
            return Math.atan2( (1/this.b)*(lambda*g.y + mue*g.x), (1/this.b)*(lambda*g.x - mue*g.y) )
        },
        get etheta() { return { x:Math.cos(this.theta), y:Math.sin(this.theta)}; },
        get psi() {
            var etheta = this.etheta;
            return Math.atan2( (1/this.c)*(this.b*etheta.y - this.g.y), (1/this.c)*(this.b*etheta.x - this.g.x) )
        },
        get epsi() { return { x:Math.cos(this.psi), y:Math.sin(this.psi)}; },
 
        // Gelenkpunkte
        A0: {x:0, y:0},
        get B0() { return {x:this.d, y:0} },
        get A() { return {x:this.A0.x + this.a*this.ephi.x, y:this.A0.y + this.a*this.ephi.y}; },
        get B() { return {x:this.B0.x + this.c*this.epsi.x, y:this.B0.y + this.c*this.epsi.y}; }
    },
 
    g = g2(),
 
    // baut und initialisiert statische Umgebung
    world = g2().clr()
                .view({cartesian:true,x:150, y:150}) // Nullpunkt verschoben
                .use({grp:g})
                .nodfix({x:0,y:0})
                .nodfix(mec.B0);
 
    let dirty = true;  // wenn true gibt es was zu aktualisieren
 
function position() {
    g.del()
     .beam2({pts:[mec.A0.x, mec.A0.y, mec.A.x, mec.A.y, mec.B.x, mec.B.y, mec.B0.x, mec.B0.y ]})
     .nod(mec.A)
     .nod(mec.B)
}
 
function render() {
    if (dirty) {
        position();  // aktualisiere Position
        world.exe(ctx);  // rendert world in den Context
        dirty = false;
    }
    requestAnimationFrame(render);  // asynchroner callback von render(), keine Rekursion!
}
 
function setPhi() {
    if (phislider.value != phiout.value) {
        phi = phislider.value*pi/180;
        if (Math.sqrt(mec.gg) < (mec.b + mec.c)) {
            phiout.innerHTML = phislider.value;
            phiout.style["color"] = "black";
            grad.hidden = false;
            dirty = true;
        } else {
            phiout.style["color"] = "red";
            phiout.innerHTML = "unzulaessiger Bereich";
            grad.hidden = true;
        }
    }
}
 
/*
 *  Initialisierung
 */
 
// Eventlistener hinzufuegen
phislider.addEventListener("input",setPhi);
 
// Animation starten
render();
 
    </script>
</body>
</html>
```

<iframe width=100% height=560 frameborder='no' src='https://goessner.github.io/webkinematik/Grundfaelle/Fall 4/Grundfall_4-Kurbelschwinge.html'></iframe>