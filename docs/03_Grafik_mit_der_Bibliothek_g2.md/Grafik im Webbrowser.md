---
"layout": "page",
"lang": "de",
"title": "Einführung in g2",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Zeichnen im Webbrowser",
"tags": ["Web","Grundlagen","JavaScript","Programmierung","g2","Canvas","Pfade"],
"math": true
---

## 3.1 Grafik im Webbrowser

Es ist häufig schwierig, sich das Verhalten von kinematischen Systemen während ihrer Bewegung genauer vorstellen zu können. Um diesem Problem entgegenzuwirken, kann man sich den entsprechenden Mechanismus mit ein wenig Programmierkenntnissen im Browser darstellen lassen. Dazu werden Koordinaten von Punkten dieser Systeme mit JavaScript berechnet und diese anschließend im Browser gezeichnet. Doch bevor wir uns mit bewegten Mechanismen beschäftigen, fangen wir erst einmal mit statischen Grafiken an. Man kann Grafiken in einem HTML-Dokument natürlich ganz einfach mit dem `<img>` Tag einbinden. Diese sind dann jedoch weder manipulierbar noch, worauf wir später hinauswollen, animierbar. In HTML 5 wurde dazu das `<canvas>` Element eingeführt. Canvas (deutsch: Leinwand) stellt im Browser einen festgelegten Zeichenbereich zur Verfügung in dem man mittels JavaScript Befehlen "live" zeichnen kann. Das Ganze schaut man sich am besten an ein paar Beispielen an.

### 3.1.1 Canvas

Als erstes benötigt man ein HTML-Dokument mit Wurzelstruktur. Wer Visual Studio Code benutzt, tippt einfach in eine leere HTML-Datei `!` ein und drückt die Tabulator Taste. Alternativ kann man auch folgendes Template kopieren.

```JSON
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
 
</body>
</html>
```

Wir erstellen nun im Körper ein Canvas Element durch die Syntax:

```HTML
<canvas id="c" width="200" height="200" style="border-width:1px;border-style:solid"></canvas>
```

Das `style` Attribut ist optional und kann auch weggelassen werden oder alternativ im Dokumentenkopf bzw. extern stehen. Die Attribute `width` und `height` geben Breite und Höhe des Zeichenbereiches in Pixel an. Die `id` wird benötigt um das Element in JavaScript sauber anzusprechen. Dazu erstellt man nun im Körper ein Script-Tag und legt eine globale Variable an, an die das Canvas-Element gebunden wird:

```HTML
<script>
let cnv = document.getElementById('c');
</script>
```

Um zeichnen zu können, benötigt man jedoch nicht das Canvas-Element, sondern dessen Render-Context. Canvas stellt hier zwei verschiedene zur Verfügung. Zum einen 'webgl' für räumliche und zum anderen '2d' für ebene Grafiken. Wir beschränken uns hier auf den 2d-Context, der nun wie folgt verknüpft wird:

```HTML
<script>
let cnv = document.getElementById('c');
let ctx = cnv.getContext('2d');
</script>
```

Man kann Canvas und Context natürlich auch zusammen auf eine Variable legen, manchmal ist es jedoch praktisch, wenn man über `cnv` auf die Attribute des Canvas zugreifen kann. 

Die HTML-Datei sieht nun wie folgt aus:

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <canvas id="c" width="200" height="200" style="border-width:1px;border-style:solid"></canvas>
    <script>
        let cnv = document.getElementById('c'),  
        ctx = cnv.getContext('2d');
    </script>
</body>
</html>
```

Zeichenbefehle kommen nun unter die globalen Variablen in das Script. Man muss dafür für jeden Befehl den Context des Canvas ansprechen, also zum Beispiel `ctx.<Zeichenbefehl>;`.

Für die meisten Geometrien werden unter Canvas sogenannte Pfade bemüht. Der Ursprung befindet sich, im Gegensatz zu kartesischen Koordinatensystemen, immer oben links in der Zeichenfläche, mit der x-Achse nach rechts und der y-Achse nach unten zeigend. Möchte man nun eine einfache Linie mittels eines Pfades zeichnen, geschieht dies durch eine Reihe von Befehlen die sich analog zur Handbewegung beim Zeichnen auf Papier verhalten. Beispielsweise

* führe Stift an die Position an der die Linie beginnen soll, 
* setze die Spitze auf das Papier, 
* ziehe die Linie zum Endpunkt und hebe den Stift ab. 

Bei Canvas kommt lediglich noch ein Befehl zum Ausführen des ganzen hinzu. Folgende Befehle werden für eine Linie benötigt:

```JavaScript
ctx.beginPath();  // Start im Koordinatenursprung
ctx.moveTo({x:50, y:50});  // fuehre Zeichenstift zum Anfangspunkt
ctx.lineTo({x:150, y:150});  // definiere Linie von letzter Position zu diesem Punkt
ctx.closePath();  // beende den Pfad
ctx.stroke();  // zeichne den eben erstellten Pfad
```

##### Editierbares Beispiel:

<iframe width=100% height=360 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_cnv-line.html'></iframe>

> Wer sich tiefer mit purem Canvas befassen möchte, dem seien folgende Quellen empfohlen:
>
> * [MDN Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
> * [Canvas Cheat Sheet](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)
> * [selfhtml Canvas](https://wiki.selfhtml.org/wiki/JavaScript/Canvas)
> * [World Wide Web Consortium - 2d-canvas](https://www.w3.org/TR/2dcontext/).

### 3.1.2 JavaScript g2 Bibliothek

Wie man sich nun vielleicht vorstellen kann, wird auf diese Weise selbst für ein so einfaches Objekt wie zum Beispiel ein Festlagersymbol recht viel Code benötigt. Daher wurde die [g2 Bibliothek](https://github.com/goessner/g2) mit ihrer Erweiterung g2.mec geschaffen. Diese JavaScript Bibliotheken legen sich über Canvas, bündeln Befehle und stellen eine API bereit, die wesentlich benutzerfreundlicher ist, ohne dabei große Performanceeinbußen zu erzeugen.

In der [**g2 Bibliothek**](https://github.com/goessner/g2) findet man viele Befehle die es für die Manipulation von HTML-Canvas gibt, sowie einige Makros wie zum Beispiel ein Raster für den Hintergrund.

[**g2.ext**](https://github.com/goessner/g2/wiki) stellt Funktionserweiterung von g2 dar. Zurzeit findet man hier Funktionen, die auf bestehenden g2 Objekte ausgeführt werden können. Zudem gibt es eine hier Methode für Splines.

Bei [**g2.mec**](https://github.com/goessner/g2/wiki) handelt es sich um eine Erweiterung von g2 die besonders interessant für Maschinenbauer und Physiker ist. Hier finden sich Befehle, die speziell für die Erstellung von Mechanismen implementiert wurden. So findet man in dieser Bibliothek beispielsweise einfache Befehle zur Darstellung von Lagern und Balken.

[**g2.chart**](https://github.com/goessner/g2/wiki) ist eine Erweiterung zum Darstellen von Diagrammen auf einem Canvas mittels g2.

Ein Script wird entweder im Kopf oder am Ende des Körpers des HTML Dokumentes importiert. Wir werden sie immer am Ende des Körpers einfügen, da die Seite so schneller geladen wird. Bei kleinen Bibliotheken wie den hier benutzten macht sich diese Vorgehensweise zwar kaum bemerkbar, gilt aber heutzutage allgemein als Konvention und guter Stil.
Um g2 zu nutzen muss man die Bibliothek extern in seine HTML-Datei einbinden. Das geht entweder von einer lokalen Quelle, wie einer HDD, oder über ein CDN (Content Distribution Network). Werden Scripte lokal eingebunden, laden sie wesentlich schneller, müssen allerdings immer mitgegeben werden, wenn man z.B. die HTML-Datei verschickt. Bei Einbindung über ein CDN muss hingegen immer eine Internetverbindung bestehen da der Browser die JS-Dateien beim Öffnen der HTML Datei aus dem Internet in den Cache lädt.

Wir werden hier die CDN Variante nutzen. Folgender Link (zu finden hier: [g2](https://github.com/goessner/g2#gitcdn)) liefert immer die aktuelle, vollständige Version von g2, in der alle Erweiterungen bereits integriert sind.
Der Einfachheit halber empfiehlt es sich folgendes HTML-Template zu nutzen und bei Bedarf zu erweitern:

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Titel</title>      
</head>
 
<body>
   <h2>Titel</h2>             
   <canvas id="c" width="300" height="300" style="border-width:1px;border-style:solid"></canvas>
   <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
   
   <script>
       /* ... Ihr code */
   </script>
 
</body>
</html>
```

Mit g2 lassen sich auch Pfade wie mit puren Canvas-Methoden nutzen. Der folgende Code erzeugt analog eine Linie wie bereits zuvor geschildert:

```JavaScript
g2().p()        // ctx.beginPath();
    .m({x:50,y:50})   // ctx.moveTo();
    .l({x:150,y:150}) // ctx.lineTo();
    .z()        // ctx.closePath();
    .stroke()   // ctx.stroke();
    .exe(ctx);
```

Es ist ersichtlich, dass mittels g2 sogar ein Befehl mehr als vorher benötigt wird. Grund hierfür ist, dass g2 erst alle Befehle sammelt, bevor jene mit der Methode `exe(<Canvascontext>)` in den Context gerendert werden. Man brauch außerdem auch nicht bei jedem Befehl auf den Context verweisen, sondern kann durch den Punktoperator Befehl an Befehl aneinanderreihen und die Kette dann mit einem Semikolon schließen. Es ist also eine einzelne Anweisung wogegen die pure Canvasvariante aus fünf Anweisungen besteht. 

Im Gegensatz dazu stellt g2 einen Linienbefehl zur Verfügung, wodurch der Code für den Nutzer sich um mehrere Zeilen reduziert.

```JavaScript
g2().lin({x1:50,y1:50,x2:150,y2:150})
    .exe(ctx);
```

##### Editierbares Beispiel:

<iframe width=100% height=360 frameborder='no' src='https://goessner.github.io/webkinematik/Livedemos/cm-livedemo_g2-line.html'></iframe>





