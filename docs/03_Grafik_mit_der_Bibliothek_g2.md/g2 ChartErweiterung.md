---
"layout": "page",
"lang": "de",
"title": "Einführung in g2",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Erweiterung der g2 Bibliothek",
"tags": ["Web","Grundlagen","JavaScript","Programmierung","g2","Canvas","Pfade","Charts"],
"math": true
---

## 3.5 Erweiterung g2.chart

Die Bibliothek g2-chart erweitert g2 um die Möglichkeit Liniendiagramme auf einfache und intuitive Weise in ein Canvaselement zu rendern. Auch diese Erweiterung ist bereits in der Vollversion von g2 integriert.

<script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>

Es folgt nun eine Einführung in die Grundlagen im Umgang mit g2-chart. Als weiterführende Lektüre wird empfohlen sich mit der vollständigen [Dokumentation auf GitHub](https://github.com/goessner/g2/wiki) zu beschäftigen.

Die Funktionsweise von g2-chart wird am besten durch eine minimalistische Livedemo klar:

##### Editierbares Livebeispiel:

<iframe width=100% height=360 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_chart_minimalistic.html'></iframe>

Die Methode `chart()` erwartet ein Objekt mit mindestens vier Eigenschaften, welche die rechteckige Grundfläche des Diagramms definieren. Analog zur g2-Methode `rec()` gibt man die linke untere Ecke (`x|y`), die Breite `b` sowie die Höhe `h` des Diagramms an. Außerdem ist es sinnvoll das `funcs` *property* mit mindestens einem Element anzugeben, da man ohne Daten oder Funktionen lediglich ein graues Rechteck sieht.

Die Skala der Achsen wird automatisch erstellt. `chart()`, bzw. sein *property* `funcs` kann sowohl Datensätze in Form von Arrays (siehe oben), als auch algebraische Funktionen interpretieren.

##### Editierbares Livebeispiel:

<iframe width=100% height=380 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_chart_multi-functions.html'></iframe>

<a name="titleobject"></a>Wie man im obigen Beispiel sieht, kann das Diagramm mit einem Titel beschriftet werden. Dieser kann entweder ein einfacher String sein (z.B. `title:"sin & tan"`) oder aber ein Objekt. Dieses title-Objekt kennt zusätzliche Eigenschaften:

* `text:string` - Der Text der Beschriftung
* `offset:number` - vertikaler Versatz zum Diagramm
* `style:object` - Styling für den Titel, mögliche *properties* z.B.:
    - `foz:number` - Schriftgröße
    - `foc:string` - Schriftfarbe

Zudem ist es möglich die Bereiche der Achsen für das Diagramm einzuschränken, indem die Properties `xmin,xmax,ymin,ymax:number` gesetzt werden. Vor allem sieht man hier aber, dass sich mehrere Funktionen in einem Diagramm darstellen lassen, indem `funcs` einfach mehrere Objekte bekommt. Das Array `funcs` enthält immer Objekte als Elemente. Diese Objekte können jedoch unterschiedliche Properties besitzen. Schauen wir uns nun die Struktur und die Properties einmal genauer an:

* `funcs: array` - Enthält Objekte mit Datensätzen oder Funktionen
    - `funcs[item]: object` - Enthält Datensatz oder Array
    - `funcs[item].data`: array - mögliche Formen sind Flatarray (`[x,y,..]`), Array von Arrays ([`[x,y],..]`) und Array von Objekten ([`{x,y},..`]).
    - `funcs[item].fn: function` - Eine Funktion `y = f(x)` die ein x Parameter annimmt und ein y zurückgibt. Bsp.: `Math.sin`
    - `funcs[item].dx: number` - Nutzt man fn muss zwingend ein Inkrement dx angegeben werden, mit dem die Funktion zum rendern evaluiert wird.
    - `funcs[item].fill: boolean` - Gibt an ob die Fläche zwischen Graph und x-Achse gefüllt werden soll.
    - `funcs[item].dots: boolean` - Markiert die Punkte von Datensätzen (sollte bei Nutzung von `fn` gemieden werden)

Des Weiteren besitzt `chart()` die Fähigkeit, via den *properties* `xaxis` und `yaxis`, einiges an den Diagrammachsen einzustellen.

##### Editierbares Livebeispiel:

<iframe width=100% height=570 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_chart_axis-props.html'></iframe>

Einige mögliche `xaxis`- und `yaxis`-Eigenschaften lauten:

* `title: string or object` - siehe <a href="#titleobject">title-Objekt</a>, Unterschied: Achsenbezogen
* `line: boolean` - wenn `false` wird die Skalenlinie der jeweiligen Achse nicht angezeigt
* `origin: boolean` - wenn `true` wird eine Linie durch den Ursprung der jeweiligen Achse gezeichnet
* `ticks: object` or `boolean` - wenn `true`, werden keine Skalenmarkierungen gezeigt. Falls ein Objekt verwendet wird gibt es das Property len: number um die Länge dieser Markierungen einzustellen.
* `grid: object` or `boolean` - `true` verlängert die Skalenmarkierungen der jeweiligen Achse, sodass sie das gesamte Diagramm durchziehen. Alternativ kann ein Style-Objekt angegeben werden.
* `labels: object` or `boolean` - `false` schaltet die Beschriftung der Skalenmarkierungen aus. Alternatives kann ein Objekt mit den Properties `loc:"auto"` (dieses Property ist momentan noch ohne Funktion) , `offset: number` (Versatz der Beschriftung) und wiederum einem Style-Objekt angegeben werden.