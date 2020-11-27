---
"layout": "page",
"lang": "de",
"title": "Einführung in g2",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Methoden der g2 Bibliothek",
"tags": ["Web","Grundlagen","JavaScript","Programmierung","g2","Canvas","Pfade"],
"math": true
---

## 3.2 Methoden der g2 Bibliothek

Es folgt nun eine Übersicht einiger häufig benötigter g2 Methoden, die allerdings keinen Anspruch auf Vollständigkeit erhebt. Jedem sei ausdrücklich ein Blick in die hervorragende [API-Dokumentation](https://github.com/goessner/g2/blob/master/docs/api/g2.core.md) von g2 empfohlen, in der alle Befehle erklärt sind und mit der sich die meisten Fragen schnell beantworten lassen. Außerdem gibt es im g2 Repository noch ein englischsprachiges [Wiki](https://github.com/goessner/g2/wiki), das den Umgang mit g2 erläutert und ein [CheatSheet](https://github.com/goessner/g2/raw/master/docs/api/sheet.pdf) (PDF), welches eine schnelle Übersicht an g2 Befehle präsentiert.

Wir gehen beim Zeichnen mit g2 stets so vor, dass wir uns ein g2-Objekt als globale Variable anlegen. Auf diese Weise kann man mehrere, voneinander unabhängige Befehlswarteschlangen erstellen. Die Objekte bekommen entweder bezeichnende Namen wie z.B. `crank` oder aber einfach den Identifier `g`. Anschließend füllen wir diese Objekte mittels des [Punktoperators](https://wiki.selfhtml.org/wiki/JavaScript/Operatoren/Punktoperator) `.` mit Befehlen und rendern diese schließlich mit der Methode `exe()` in den Context. Ein vollständiges HTML-Dokument, das die Linie aus dem vorherigen Beispiel rendert, sieht so aus:

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>g2-Linie</title>
</head>
<body>
    <canvas id="c" width="200" height="200" style="border-width:1px;border-style:solid"></canvas>
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
      let cnv = document.getElementById("c"),
      ctx = cnv.getContext("2d"),
      g = g2();
      g.lin({x1:50,y1:50,x2:150,y2:150})
      .exe(ctx);
    </script>

</body>
</html>
```

### 3.2.1 Grundlegende Befehle

**.view()**<br>
`view({scl,x,y,cartesian})` mit scl: number, x, y: number, cartesian: boolean

Diese Methode ist in der Lage den Koordinatenursprung um $x$ in x-Richtung und $y$ in y-Richtung zu bewegen, was nützlich sein kann um z.B. den Ursprung hin zu einem Gestelltpunkt zu verschieben. Zur Erinnerung: Der Ursprung des Canvas-Elementes befindet sich standardmäßig links oben.
Die Eigenschaft `scl` steht für *scale* und kann die Größe der Objekte ändern.
Die Eigenschaft `cartesian` schaltet auf das kartesische Koordinatensystem um, bei dem sich der Ursprung unten links befindet, die x-Achse nach rechts und die y-Achse nach oben ausgerichtet. Dies ist einerseits intuitiver und andererseits für einige Methoden eine notwendige Voraussetzung und sollte daher verwendet werden.

**.del()**<br>
`del()` löscht alle Befehle die sich vor seinem Aufruf in der Warteschlange des Objekts befunden haben. Bei statischer Grafik ist diese Methode eher uninteressant. Bei Animationen hingegen wird dasselbe Objekt hingegen immer wieder gerendert und man möchte nicht immer die alten Positionen wieder mitrendern.

**.clr()**<br>
`clr()` leert den Zeichenbereich des Canvas. Auch diese Methode kommt meist nur bei bewegten Bildern zum Einsatz. Bei der Livedemo von der vorherigen Seite wird sie aufgerufen, wenn man auf den Resetbutton klickt oder einen Wert ändert. Wäre dies nicht so, würde man jedes Mal eine Linie mehr sehen.

**.exe()**<br>
`exe(<Canvascontext>)` rendert alle Befehle in den ihm als Parameter übergebenen Context. Also `document.getElementById("<CanvasId>").getContext("2d")` bzw. bei uns meist die entsprechende Variable `ctx`.

**.grid()**<br>
`grid({color, size})` mit color: string, size: number

Erzeugt ein Gitternetz wie bei kariertem Papier. Die Eigenschaften `color` und `size` ändern Farbe und Linienabstand (Standard `20px`).

**.use()** <span id="use"><br>
`use({grp, x, y, w, scl})` mit grp: object oder string, x, y, w, scl: number

Durch diese Methode können g2-Objekte bzw. Befehlsketten, die an anderer Stelle vordefiniert wurden, wiederbenutzt werden. Die Objekte können entweder in derselben Datei vorher erstellt worden sein (g ist dann ein Objekt oder ein String wenn es als [g2.symbol](https://github.com/goessner/g2/blob/master/docs/api/g2.core.md#g2use--object) 
erstellt wurde).

`use` kann folgende Eigenschaften enthalten:

* grp: object oder string - Das g2 Object, dass wiederverwendet werden soll.
* x: `number` - Translation in x-Richtung
* y: `number` - Translation in y-Richtung
* w: `number` - Rotation [Radiant]
* scl: `number` - Skalierung

**.beg()**<br>
`beg({x,y,w,scl,matrix,styles})` mit x, y, w, scl: number, matrix: SVG-Matrix, styles: various

Leitet einen Unterbereich (ähnlich {...} bei Funktionen ) in der g2-Warteschlange ein, der durch end() wieder geschlossen wird. Die als *properties* übergebenen Transformationen und *styles* gelten nur in diesem Bereich. `beg()` kann [dieselben Eigenschaften](#use) wie schon bei `use()` enthalten.

**.end()**<br>
Beendet den durch `beg()` eingeleiteten Unterbereich und stellt den vorherigen Status wieder her.

**.txt()**<br>
`txt({str, x, y, w})` mit s: string, x, y, w: number

Fügt einen String `str` mit dem Drehwinkel `w` am Punkt (`x`|`y`). 

### 3.2.2 Pfad Befehle

g2 stellt einige Pfad Befehle bereit, die wir teilweise schon auf der vorherigen Seite gesehen haben. Hier folgt nun eine kombinierte Übersicht:

**.p()**<br>
Startet einen neuen Pfad und verwirft vorherige Pfadbefehle.

**.m()**<br>
`m({x,y})` mit x, y: number<br>
Bewegt den virtuellen Stift an den Punkt (x|y).

**.l()**<br>
`l({x,y})` mit x, y: number<br>
Zieht eine Linie vom letzten Punkt zum neuen Punkt (x|y).

**.q()**<br>
`q({x1,y1,x,y})` mit x1, y1, x, y: number<br>
Zeichnet eine quadratische Kurve von vorherigen Punkt zum neuen Punkt (x|y). (x1|y1) ist dabei der Kontrollpunkt.

##### Editierbares Beispiel:

<iframe width=100% height=360 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_g2-q.html'></iframe>

<aside>
<img src="../Bilder/bild 17.png">

#### **Abb. 3.1:** Quadratic bezier curve

</aside>

Zum besseren Verständnis sind in Abbildung 3.1 zusätzlich die einzelnen Punkte des editierbaren Beispiels eingezeichnet.

**.c()**<br>
`c({x1,y1,x2,y2,x,y})` mit x1,y1,x2,y2,x,y: number<br>
Zeichnet eine kubische Bézierkurve. Das funktioniert wie die quadratische Variante q(), es gibt lediglich einen Kontrollpunkt (x2|y2) mehr.

##### Editierbares Beispiel:

<iframe width=100% height=360 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_g2-c.html'></iframe>

**.a()**<br>
`a({dw,x,y})` mit dw, x, y: number<br>
Zeichnet ein Bogensegment von letzten Punkt zum neuen Punkt (x|y), dw [Radiant] entspricht der Krümmung $\varphi$.

<figure>
<img src="../Bilder/bild 18.png">

#### **Abb. 3.2:** Bogensegmente unterschiedlicher Krümmung

</figure>

Pfade wurden bisher immer mit `stroke()` geschlossen. Es gibt jedoch noch zwei weitere Möglichkeiten und bisher nicht angesprochene optionale Parameter. Mit `d` kann den folgenden Methoden ein String mit SVG Daten übergeben werden, der dann gerendert wird.

**.stroke()**<br>
`stroke({d})` mit d: string<br>
Zieht einen Strich entlang des vorher definierten Pfads.

**.fill()**<br>
`fill({d})` mit d: string<br>
Füllt den vorher definierten Pfad.

**.drw()**<br>
`drw({d})` mit d: string<br>
Kombiniert `stroke()` und `fill()` indem beides ausgeführt wird.

Unter Nutzung von `drw()` und eines Style-Objektes sieht die kubische Bézierkurve von oben schon interessanter aus:

##### Editierbares Beispiel:

<iframe width=100% height=360 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_g2-drw.html'></iframe>

**.lin()**<br>
`lin({x1, y1, x2, y2})` mit x1,y1,x2,y2: number<br>
Diese Methode zeichnet eine Linie von Punkt (x1|y1) zum Punkt (x2|y2).

**.rec()**<br>
`rec({x, y, b, h})` mit x,y,b,h: number<br>
Zeichnet ein Rechteck. (x|y) stellt dabei den Punkt der linken oberen Ecke dar. `b` ist die Breite und `h` die Höhe des Rechtecks.

**.arc()**<br>
`arc({x, y, r, w, dw})` mit x,y,r,w,dw: number<br>
Zeichnet ein Bogensegment. (x|y) ist der Mittelpunkt des Bogens, `r` der Radius, `w` der Startwinkelversatz zur x-Achse und `dw` die Winkelspanne.

<aside>
<img src="../Bilder/bild 19.png">

#### **Abb. 3.3:** Zeichnen eines Bogensegments mit g2.arc()

</aside>

Abbildung 3.3 bezieht sich auf das Standard Canvas-Koordinatensystem, ohne cartesian-flag. Die angedeutete Richtung der Winkel ist dann, trotz Drehung im Uhrzeigersinn, mathematisch positiv!

**.ply()**<br>
`ply({pts, closed, x, y, w})` mit pts: array, closed: boolean, x, y, w: number<br>
Zeichnet eine Polylinie über ein Array von Punkten in der Form `[x1,y1,x2,y2,...,xn,yn]`. Ist closed `true`, wird der Polygonzug geschlossen, bei `false` bleibt er offen. `x`, `y`, `w` geben die Position und die Rotation an.

**.img()**<br>
`img({uri, [x], [y], [w], [b], [h], [xoff], [yoff], [dx], [dy]})` &ndash; Parameter siehe API-Dokumentation<br>
Rendert ein Bild auf das Canvas. Die Parameter entsprechen bis auf die Benennung größtenteils denen der Canvasmethode `drawImage()`, sodass die dortigen Erläuterungen auch für `g2.img()` gelten.

Das Firefox Logo in der nachfolgenden *Livedemo* hat im Original die Maße 500x500 px. Nutzt man `img()` nur mit dem uri Parameter, wird das Logo so gerendert wie in der verblassten Form im Hintergrund zu sehen ist. Möchte man aber zum Beispiel den Kopf vom Fuchs in der unteren rechten Ecke des Canvas darstellen, geht dies via

`.img({uri:'../img/ff-logo.png',x:250, y:250, w:Math.PI/2, b:250, h:250, xoff:45, yoff:50, dx:210, dy:210})`

* `x`,`y` (Canvas-Koordinaten) verschiebt den Punkt des Canvas, an dem die obere linke Ecke des Bild eingefügt wird. (hier in die Mitte)
* `w` (in Radiant) transformiert die Orientierung des Bildes um seinen Ursprung mathematisch positiv entsprechend des Canvas Koordinatensystems
* `b,h` (Canvas-Koordinaten) gibt an, wieviel Platz das Bild auf dem Canvas einnehmen wird und skaliert es entsprechend (hier ein auf ein Viertel)
* `xoff`,`yoff` (Bild-Koordinaten, unskaliert) verschiebt die obere linke Ecke des Rechtecks, mit dem das Originalbild ausgeschnitten werden soll (entspricht in der Canvas-API `drawImage()` den Parametern `dx`,`dy`)
* `dx`,`dy` (Bild-Koordinaten, unskaliert) gibt die Breite und Höhe des Rechtecks an, das den Ausschnitt von Originalbild erzeugt

Um das Ergebnis zu sehen, kopieren Sie den angegeben Beispielcode in die nachfolgende *Livedemo*.

##### Editierbares Beispiel:

<iframe width=100% height=600 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_g2-img.html'></iframe>

> #### **Tipp**
>
> Durch geschickte Verwendung der `.img()` Transformationsparameter `x`, `y`, `w` lassen sich die Glieder eines animierten Mechanismus durch Bilder darstellen.
>
> Auf diese Weise wurde auch die folgende Animation erstellt:
>
><img src="https://goessner.github.io/webkinematik/img/pumpjack.gif" height="500px" width="auto">
>
> Es gibt noch weitere g2-Befehle für die sich ein Blick in die [API-Dokumentation](https://github.com/goessner/g2/blob/master/docs/api/g2.core.md#g2img--object) und das [Wiki](https://github.com/goessner/g2/wiki) lohnt.

### 3.2.3 g2 Playground

Diese *Livedemo* rendert ein Fachwerk und benutzt dabei ausschließlich g2-Befehle. Im Quelltext wurden zusätzlich zu den im Eingabebereich sichtbaren g2-Befehlen, g2-Objekte vordefiniert die mittels der [use-Methode](#use) genutzt werden können. Es stehen folgende Objekte zur Verfügung:

Als g2-Symbol ein:

> **Pfeil:** `'arrow': string`
>
> ```JavaScript
> g2.symbol.arrow = g2().ply({pts:[50,0, 10,0, 10,3, 5,0, 10,-3, 10,0], closed: true, ls:"crimson" ,fs:"crimson", lw:3});
> ```

Als Objekte jeweils ein:

> **Gelenkpunkt:** `nod: object`
>
> ```JavaScript
> let nod = g2().cir({x:0, y:0, r:5, ls:"#4f4f4f" ,fs:"#d0d0d0"});
> ```

> **Festlager:** `nodfix: object`
>
> ```JavaScript
> let nodfix = g2().ply({pts:[-10,-15,0,0,10,-15], closed:false, ls:"#4f4f4f" ,fs:"#c7c7c7"}).cir({x:0, y:0, r:5, ls:"#4f4f4f" ,fs:"#d0d0d0"})
> ```

> **Loslager:** `nodflt: object`
>
> ```JavaScript
> let nodflt = g2().ply({pts:[-10,-15,0,0,10,-15], closed:true, ls:"#4f4f4f" ,fs:"#c7c7c7"}).lin({x1:-11, y1:-20, x2:11, y2:-20, ls:"#747474", lw:5}).cir({x:0, y:0, r:5, ls:"#4f4f4f" ,fs:"#d0d0d0"});
> ```

<br>Sie können die Demo nach Belieben erweitern oder andere g2-Befehle ausprobieren.

<iframe width=100% height=800 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_g2-multi.html'></iframe>

<br>Ein zum obigen Beispiel äquivalenter, vollständiger Quelltext sieht folgendermaßen aus:

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
</head>
 
<body>
  <canvas id="c" width="801" height="501" style="border: 1px solid #4D4E53;border-radius: 2px;"></canvas>
  <script src="https://gitcdn.cyz/>po/goessner/g2/master/src/g2.js"></script>
  
  <script>
    const ctx = document.getElementById("c").getContext("2d"),
      g = g2(),
      nod = g2().cir({x:0,y:0,r:5,ls:"#4f4f4f",fs:"#d0d0d0"}),
      nodfix = g2().ply({pts:[-10,-15,0,0,10,-15],closed:false,ls:"#4f4f4f",fs:"#c7c7c7"}).cir({x:0,y:0,r:5,ls:"#4f4f4f",fs:"#d0d0d0"}),
      nodflt = g2().ply({pts:[-10,-15,0,0,10,-15],closed:true,ls:"#4f4f4f",fs:"#c7c7c7"}).lin({x:-11,y1:-20,x2:11,y2:-20,ls:"#747474", lw:5}).cir({x:0,y:0,r:5,ls:"#4f4f4f",fs:"#d0d0d0"}),
      style = {ls:'#747474',lw:5,lj:'round'};
 
      g2.symbol.arrow = g2().ply({pts:[50,0, 10,0, 10,3, 5,0, 10,-3, 10,0], closed:true,ls:"crimson" ,fs:"crimson", lw:3});
 
      g.view({x:240, y: 200, cartesian: true}).grid()
       .ply({pts:[0,0,300,0,200,100,0,100],closed:true,...style})
       .ply({pts:[0,0,100,100,100,0,200,100,200,0],closed:false,...style})
       .use({grp:"arrow",x:200,y:100})
       .use({grp:"arrow",x:100,y:100,w:Math.PI/2})
       .use({grp:"arrow",x:300,y:-50,w:Math.PI/2})
       .use({grp:nod,x:100, y:0})
       .use({grp:nod,x:200, y:0})
       .use({grp:nod,x:300, y:0})
       .use({grp:nod,x:100, y:100})
       .use({grp:nod,x:200, y:100})
       .use({grp:nodfix,x:0, y:0}).txt({str:"A",x:-20,y:0})
       .use({grp:nodflt,x:0,y:100,w:-Math.PI/2}).txt({str:"B",x:0,y:120})
       .exe(ctx)
  </script>
</body>
</html>
```