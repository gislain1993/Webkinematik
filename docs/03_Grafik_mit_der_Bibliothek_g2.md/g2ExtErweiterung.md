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

## 3.3 Erweiterung g2.ext

g2.ext erweitert g2 um einige Funktionalitäten. Insbesondere werden diese Funktionalitäten durch weitere Erweiterungen für g2 genutzt, sodass es eine Bedingung für die Nutzung anderer Erweiterungen darstellt.

g2.ext liefert außerdem eigene Funktionen.

**.spline()**<br>
`spline({pts,closed,x,y,w})` mit pts: array, closed: boolean, x, y, w: number

Zeichnet einen Spline über ein Array von Punkten in der selben Form wie `.ply()`. Einige Ressourcen zu Splines: 

* [Kubisch Hermetischen Splines](https://de.wikipedia.org/wiki/Kubisch_Hermitescher_Spline) 
* [Bézierkurven](https://de.wikipedia.org/wiki/Bézierkurve)

**.label()**<br>
`label({str, [loc], [off]})` mit str: string, [loc]: float oder string, [off]: float

Diese Methode erzeugt eine Beschriftung `str` deren Position sich auf das Element bezieht, das vor ihr in der Befehlskette liegt. Für eine korrekte Ausrichtung der Labels ist die Nutzung von `cartesian()` obligatorisch. Die Parameter `[loc]` und `[off]` sind abhängig vom Elementtyp auf den `label()` angewendet wird. Eine Verschiebung des Labels nach rechts oder links geschieht über justierung der `off` Eigenschaft.

**.mark()**<br>
`mark({mrk,[loc]})` mit mrk: str, [loc]: number, string || loc[]

`.mark()` funktioniert wie `.label()`, jedoch hat man die Wahl zwischen `dot` und `tick` für das `mrk`.

Für `loc` hat man die Option die Parameter als Array zu übergeben.

##### Editierbares Livebeispiel:

<iframe width=100% height=300 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_mec_mark.html'></iframe>