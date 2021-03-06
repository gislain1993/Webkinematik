---
"layout": "page",
"lang": "de",
"title": "Einführung in g2",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Erweiterung der g2 Bibliothek",
"tags": ["Web","Grundlagen","JavaScript","Programmierung","g2","Canvas","Pfade"],
"math": true
---

## 3.4 Erweiterung g2.mec

Die Bibliothek g2.mec ist eine Erweiterung für g2. g2.mec erweitert g2 um in der Mechanik häufig verwendete Symbole und Muster. Zusätzlich zur folgenden Übersicht wird nahegelegt einen Blick in die [API-Dokumentation](https://github.com/goessner/g2/blob/master/docs/api/g2.mec.md) und den entsprechenden [Wiki Eintrag](https://github.com/goessner/g2/wiki) zu werfen. g2.mec ist wie alle anderen Erweiterungen bereits in g2 integriert falls Sie die Vollversion verwenden.

Die Nutzung von g2.mec als Einzelskript [(https://gitcdn.xyz/repo/goessner/g2/master/src/g2.mec.js)](https://gitcdn.xyz/repo/goessner/g2/master/src/g2.core.js) hingegen fordert die vorherige Einbindung von g2.core [(https://gitcdn.xyz/repo/goessner/g2/master/src/g2.core.js)](https://gitcdn.xyz/repo/goessner/g2/master/src/g2.core.js) und g2.ext [(https://gitcdn.xyz/repo/goessner/g2/master/src/g2.ext.js)](https://gitcdn.xyz/repo/goessner/g2/master/src/g2.ext.js).

Die folgende Livedemo zeigt die in g2.mec zur Verfügung stehenden Symbole.

##### Editierbares Livebeispiel:

<iframe width=100% height=390 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_mec_symbols.html'></iframe>

**.vec()**<br>
`vec({x1,y1,x2,y2})` mit x1,y1,x2,y2: number

`.vec()` ist genau so zu nutzen wie `.lin()`, allerdings wird hier ein Vektor gezeichnet, statt einer einfachen Linie.

<iframe width=100% height=280 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_mec_vec.html'></iframe>

**.slider()**<br>
`slider({x,y,b,h,w})` mit x,y,b,h,w: number

Diese Methode zeichnet einen Schieber mit dem Mittelpunkt `x`, `y`, der um `w` [rad] gedreht ist, mit den zusätzlichen Parametern `b` und `h` für die Breite und Höhe des Schiebers. Standardmäßig steht der Füllstil auf dem g2-State `linkfill (="rgba(200,200,200,0.5)"`). Der [Alphakanal](https://wiki.selfhtml.org/wiki/CSS/Wertetypen/Farbangaben#rgba) (Transparenz) hat den Wert 0.5, sodass der Schieber leicht transparent ist. Wer dies nicht mag, setzt entweder global `linkfill` auf einen anderen Wert oder fügt jedem Slider ein Styling-Objekt mit geänderter `fs` *property* hinzu. Die globale Änderung erfolgt bei Initialisierung durch `g2.State.linkfill = "<neuer rgba-Wert>";`.

[CSS-Farbselektor](https://developer.mozilla.org/de/docs/Web/CSS/CSS_Colors/farbauswahl_werkzeug)

##### Editierbares Livebeispiel:

<iframe width=100% height=220 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_mec_slider.html'></iframe>

> `linkfill` ist einer der vordefinierten Stile, die g2.mec zur Verfügung stellt und die sich als String mit `@` als Präfix referenzieren lassen. Weitere finden Sie [hier](https://github.com/goessner/g2/wiki#mechanical-styles).

**.spring()** und **.damper()**<br>
`spring({x1,y1,x2,y2,h})` mit x1,y1,x2,y2: number<br>
`damper({x1,y1,x2,y2,h})` mit x1,y1,x2,y2: number

Diese beiden Methoden funktionieren wie `lin()`, zeichnen jedoch ein Feder- bzw. Dämpfer Symbol. `x1,y1` ist der Start- und `x2,y2` der Endpunkt. Der optionale Parameter `h` ändert die Höhe des Feder- bzw. Dämpfersymbols.

##### Editierbares Livebeispiel:

<iframe width=100% height=230 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_mec_spring-damper.html'></iframe>

**.ground()**<br>
`ground({pts, [closed], [h], [pos]})` mit pts: array, [closed]: boolean

Zeichnet einen symbolischen Boden über ein Array aus Punkten `pts`. Wenn `closed = true` wird das Bodenpolygon geschlossen. `args` kann die Properties `h (number)` für die Höhe des Bodens und `pos (string, "right"` oder `"left"`) für die Ausrichtung des Bodens entlang der Zeichenrichtung enthalten.

##### Editierbares Livebeispiel:

<iframe width=100% height=220 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_mec_ground.html'></iframe>

**.bar()** und **.bar2()**<br>
`bar({x1,y1,x2,y2)` mit x1,y1,x2,y2: number<br>
`bar2({x1,y1,x2,y2)` mit x1,y1,x2,y2: number

Diese Methoden funktionieren wie `lin()` und zeichnen gestylte Glieder von Startpunkt `x1,y1` zum Endpunkt `x2,y2`.

**.link()** und **.link2()**<br>
`link({pts, [closed]})` mit pts: array, [closed]: boolean<br>
`link2({pts, [closed]})` mit pts: array, [closed]: boolean

Zeichnen gestylte Polylinien über ein Array, die für Glieder benutzt werden können. `link2()` nimmt im Gegensatz zu `link()` kein Styling-Objekt auf. Soll die gefüllte Fläche bei `closed = true` transparent sein, muss hier global der Wert `g2.State.linkfill` auf `"transparent"` gesetzt werden.

##### Editierbares Livebeispiel:

<iframe width=100% height=280 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_mec_links.html'></iframe>

**.beam()** und **.beam2()**<br>
`beam(pts)` mit pts: array<br>
`beam2(pts)` mit pts: array

Diese beiden Methoden zeichnen gestylte Balken über ein Array von Punkten.

**.pulley()** und **.pulley2()**<br>
`pulley({x,y,r,w})` mit x,y,r,w: number<br>
`pulley2({x,y,r,w})` mit x,y,r,w: number

Diese Methoden stellen Riemenscheiben bzw. Seilrollen dar. `pulley()` bekommt  `x,y` als Mittelpunkt und einen Radius `r`, analog zur bekannten `cir()` Methode. Die Property `w` stellt den Drehwinkel dar. Eine Livedemo dieser Elemente folgt nach der nächsten Methode.

**.rope()**<br>
`rope({[p1], [r1], [p2], [r2]})` mit [p1],[p2]: object, [r1],[r2]: number

Diese Methode verbindet zwei Scheiben durch ein Seil miteinander. `[p1]` bzw. `[p2]` enthalten die Mittelpunkte der entsprechenden Scheiben als Objekte, und `[r1]` bzw. `[r2]` die dazu passenden Radien.<br>
Ist `[r1]` ein positiver Wert, verlässt das Seil die erste Scheibe entgegen des Uhrzeigersinns, ist `[r1]` negativ, im Uhrzeigersinn. Bei der zweiten Scheibe dreht sich diese Logik um. Ist `[r2]` ein positiver Wert, verlässt das Seil die zweite Scheibe im Uhrzeigersinn, ist `[r1]` negativ, entgegen des Uhrzeigersinns. Durch geschickte Kombination lassen sich so Seile über Kreuz verlegen.

##### Editierbares Livebeispiel:

<iframe width=100% height=300 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_mec_pulleys-rope.html'></iframe>

**.load()**<br>
`load({pts, spacing, w})` mit pts: array, spacing: number, w: number

Durch diese Methode lässt sich eine Streckenlast darstellen. `pts` ist ein Array von Punkten, in dem der erste und letzte Punkt die unteren Ecken der Streckenlast sind. Die Kraftpfeile stehen orthogonal auf der Verbindungslinie dieser beiden Punkte. `spacing` steht für den absoluten Abstand der Vektoren in Pixeln. Also bei einem `spacing` von 25 erscheint alle 25px ein Kraftpfeil. Die Property `w` gibt an in welchem Winkel die Pfeile gezeichnet werden sollen. Standardmäßig ist `w` auf $−\frac{\pi}{2}$ gesetzt, was einer nach unten gerichteten Flächenlast entspricht.

##### Editierbares Livebeispiel:

<iframe width=100% height=230 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_mec_load.html'></iframe>