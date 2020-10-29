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

#### Animation mit g2 am Beispiel einer Kurbel

Da nun bekannt ist wie man statische Grafikelemente mittels g2 in Canvas-2d darstellt, wollen wir uns nun mit der Animation dieser befassen. Das Grundprinzip hinter diesen Animationen ist, dass Koordinaten von Punkten, die sich bewegen sollen, zumindest implizit von einem Inkrement abhängen müssen. Man kann dieses Inkrement beliebig definieren, für physikalische/ingenieurmäßige Anwendungen bietet es sich jedoch meisten an, die Zeit als Inkrement zu benutzen.
 
JavaScript bietet mehrere Möglichkeiten, um die aktuelle Zeit abzurufen. Die gängigste Methode ist die Erstellung einer Instanz des Datum-Objekts. Die geschieht mittels der Syntax var time = new Date();. Dieses Objekt repräsentiert den Moment seiner Erstellung und enthält mehrere Methoden, über die man Minuten, Sekunden etc. auslesen kann.
Möchte man einer Variable die Zeit in Sekunden zuweisen, muss man zusätzlich auch noch die Millisekunden abrufen, da man sonst lediglich eine ganze Zahl zwischen 0 und 60 zurückbekommt. Ohne die Millisekunden würde sich das Bild also nur 1 Mal pro Sekunde neu aufbauen, was in einer stotternden Animation resultieren würde.
Mittels var t = time.getSeconds() + time.getMillieconds()/1000  wurde t hier auf die Systemzeit zur Erstellung von time und in der Einheit Sekunden initialisiert.

Um eine Animation als flüssig wahrzunehmen, werden mindestens 24fps (frames per second) benötigt. Da moderne Monitore allerdings eine Bildwiederholfrequenz von mindestens 60Hz haben, sollte man diese, zumindest annähernd, auch ausreizen.

Während sich das Problem der umständlichen Syntax durch den Aufruf der Methode Date.now(), welche die Zeit in Millisekunden ausgibt, beheben ließe, besteht die Abhängigkeit des Datum-Objekts von der Systemzeit jedoch weiterhin. Das ist insofern schlecht, als dass diese hin und wieder mit einem eingestellten Server synchronisiert wird und es dadurch zu Inkonsistenzen in der Zeit und somit zu Sprüngen in der Animation kommen kann. Auch aus diesem Grund wurde in JavaScript das performance-Objekt eingeführt. Dieses wird jedes Mal beim Laden der Seite initialisiert, startet beim Wert 0 und wächst mit einer konstanten Rate. Der Code var t = performance.now(); initialisiert eine Variable, welche die Zeit, die seit dem Laden der Seite vergangen ist, in Millisekunden mit einer Genauigkeit von fünf Mikrosekunden enthält. Auf dieser Basis wurde dann die Methode requestAnimationFrame(callback) eingeführt. Diese Methode übergibt automatisch einen Zeitstempel der auf performance.now() basiert als Parameter an die entsprechende Callback Funktion.

**Einführungsbeispiel - Kurbel**

Als Einführungsbeispiel wollen wir uns nun jedoch erst einmal die Animation mit einem beliebigen Inkrement anschauen. Dazu soll eine Kurbel animiert werden, die sich um ein Festlager mathematisch positiv im Kreis dreht. Das fertige Beispiel wird folgendermaßen aussehen:

<iframe width=100% height=400 frameborder='no' src='https://goessner.github.io/webkinematik/Animation/Kurbel.html'></iframe>

Es empfiehlt sich mit Vektoren in Polarkoordinatenform zu arbeiten, da wir $\varphi$
inkrementieren wollen. Wenn wir den Ursprung in die Mitte des Canvas legen, benötigen wir also lediglich den Einheitsvektor 
$e_\varphi=\dbinom{cos \varphi}{sin \varphi}$
 sowie die Länge l
der Kurbel, um diesen zu skalieren.
 
Wir beginnen nun mit einem HTML-Template, in dem ein 300x300px großes Canvas-Element definiert wird, und binden die minimierten g2 und g2.mec Bibliotheken über das bekannte CDN ein.

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Kurbel</title>      
</head>
 
<body>
    <h2>Kurbel</h2>             
    <canvas id="c" width="300" height="300" style="border-width:1px;border-style:solid"></canvas>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
    <script src="https://gitcdn.xyz/repo/goessner/g2-ext/master/g2.ext.min.js"></script>

    <script>
 
    </script>
 
</body>
</html>
````

**Variablen**

Im zu erstellenden Script initialisieren wir zuerst die globalen Variablen.  Wir legen Abkürzungen für das Canvas sowie seinen 2d-Context an let cnv = document.getElementById('c'), ctx = cnv.getContext('2d'), und weisen einer Variable den Wert von π
 zu, da sich dieser ja nicht ändert und so nur einmal die entsprechende Methode aufgerufen werden muss pi = Math.PI,. Anschließend fügen wir noch eine Variable für die Länge der Kurbel hinzu l = 100,, sowie die Laufvariable phi, die wir auf 0rad initialisieren phi = 0,.

Das Script sollte bis hierhin folgendermaßen aussehen:

```HTML
let cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
 
    pi = Math.PI,
    l = 100,  // Laenge der Kurbel
 
    phi = 0,  // Laufvariable
// ...
````
Um sich direkt einen guten Programmierstil anzugewöhnen, werden wir nun ein Objekt anlegen, dass alle Parameter des dynamischen Mechanismus enthält, die sich pro Frame ändern bzw. aktualisiert werden müssen.

> Zur Erinnerung - In JavaScript legt man Objekte mittels der Literalschreibweise folgendermaßen an:

```HTML
let obj = {  property_1: Wert_1,    // property_# kann ein Identifier...
                      2: Wert_2,    // oder vom Typ number...
           // ...,
           "property n": Wert_n };  // oder ein string sein

````
Objekte können zudem auch "Getter" enthalten. Diese binden Funktionen an Properties, die erst evaluiert werden, wenn man sie aufruft, dann aber jedes Mal. Getter erstellt man mittels folgender Syntax: `get property_name() { ...Funktionsbody/Objekt... };`.

Wir erstellen nun ein Objekt, das Getter für $e_\varphi$
 und den Punkt A
 enthält. (Da wir die Kurbellänge l
 bereits global definiert haben, brauchen wir sie hier nicht einfügen):

 ```HTML
 mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*this.ephi.x, y:l*this.ephi.y}; }
    },
````
Diese Getter liefern uns nun jeweils ein Objekt mit x und y Property, das den x-/y-Koordinaten entspricht, zurück. Zu beachten ist noch, dass sich der Getter für `A` bei `ephi` bedient. Daher muss, um auf die Komponenten von `ephi` zuzugreifen, angegeben werden, wo sich `ephi` befindet. Gibt man kein Parent an, wird davon ausgegangen, dass `ephi` zum window-Objekt gehört. Da sein Parent aber mec ist, muss man mec oder aber this (hier = selbes Parent) angeben.

`mec.A.x` liefert nun z.B. 100 wenn `phi = 0` und -100 wenn `phi = pi`.

Nun folgt eine Neuerung gegenüber dem statischen Zeichnen mit g2. Während sonst ein g2-Objekt angelegt wurde, das man anschließend in den Context gerendert hat, teilen wir unsere Animation nun auf zwei g2-Objekte auf. Ein g2-Objekt (`Kurbel`), das dynamische Geometrie enthält und eines (`world`), in dem wir alles, was seine Position nicht ändert, einfügen. In dem world-Objekt referenzieren wir mittels der g2-Methode `.use` dann lediglich das dynamische Objekt. Durch diese Methode wird das statische Objekt nur ein Mal beim Laden der Seite aufgebaut und nicht jedes Mal erneut, wenn sich die Positionen der dynamischen Geometrien aktualisieren. So spart man, je nach Umfang von `world`, einiges an Rechenzeit und Performance.

Weiterhin wichtig bei Animationen sind die g2-Methoden `.clr()` und `.del()`. `.clr()` kommt an den Anfang des world-Objekts und leert das Canvas. .del() schreibt man an den Anfang des dynamischen Objekts. Diese Methode löscht die bisherigen Kommandos, sodass nicht mehrere Positionen gleichzeitig, sondern nur die momentane, gerendert werden.

Wir erstellen nun also unsere zwei g2-Objekte, füllen aber zuerst nur `world` mit Befehlen.

Das Script sollte nun so aussehen:

```HTML
let cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
 
    pi = Math.PI,
    l = 100,  // Laenge der Kurbel
 
    phi = 0, // Laufvariable
 
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*this.ephi.x, y:l*this.ephi.y}; }
    },
 
    // definiert Kurbel als g2() Objekt
    Kurbel = g2(),
 
    // baut und initialisiert statische Umgebung
    world = g2().clr()          // leert das Canvas
                .view({cartesian:true, x: 150, y: 150})    // schaltet kartesische Koordinaten ein und verschiebt den Nullpunkt
                .use({grp: Kurbel})    // referenziert dynamisches Kurbel-Objekt
                .use({grp: "nodfix"})  // statisches Festlager im Ursprung
    ;

````

*Zu welchem Parent-Objekt gehört die Variable phi?*

	* window
	* Math
	* mec
	* document

Da das Kurbel-Objekt bislang leer ist, erstellen wir nun eine Funktion, die es mit Befehlen füllt. Diese Funktion nennen wir "position", weil sie gleichzeitig auch die Position der Punkte des Mechanismus aktualisiert. In ihrem Körper füllen wir nun `Kurbel` zuerst mit `.del()`,  mit einer Linie vom Ursprung nach A und zuletzt mit einem Gelenkpunkt am Punkt A.

Hier kommen uns nun die Getter zugute. Hätten wir diese nicht im mec-Objekt erstellt, müssten wir alle Positionsberechnungen in der position-Funktion vornehmen. Das würde zwar in diesem Fall kein Problem darstellen, wenn man jedoch komplexere Mechanismen wie zum Beispiel eine Kurbelschleife animieren möchte und dort Funktionen einbaut, die die Koppelkurve von Punkten berechnen, müsste man `phi` einzeln manipulieren. Hat man dann keine Getter zur Verfügung, muss man sämtliche geometrischen Berechnungen nochmal in der Koppelkurvenfunktion vornehmen.

Am Ende der position-Funktion inkrementieren wir `phi` dann um 1°.
Da die Methoden des Math-Objekts allerdings in Radiant rechnen, sollte man somit pi/180 als Inkrement angeben!

Die position-Funktion sollte folgendermaßen aussehen:

```HTML
function position() {
    // baut dynamische Kurbel auf
    Kurbel.del()
          .lin({x1: 0, y1: 0, x2: mec.A.x, y2: mec.A.y, lw:3})
          .use({grp: "nod", ...mec.A});
 
    // inkrementiert phi
    phi += pi/180;
}
````
Nun erstellen wir noch eine Funktion, die alles in den Context rendert, und nennen sie passenderweise "render".

Diese sieht so aus:

```HTML
function render() {
    // aktualisiere Position
    position();  
 
    // rendert world in den Context
    world.exe(ctx); 
 
    // asynchroner callback von render()
    requestAnimationFrame(render);
}
````

Zuerst wird `position()` aufgerufen, um die Position von `Kurbel` zu aktualisieren. Anschließend wird world, welches ja das aktualisierte Kurbel-Objekt enthält, in den Context gerendert. Zuletzt wird dann noch `requestAnimationFrame(render)` aufgerufen, um die Animation am Laufen zu halten.

Die Methode `requestAnimationFrame(callback)` wurde eigens für Animationen eingeführt. Es handelt sich hierbei nicht wie man fälschlicherweise annehmen könnte um eine Endrekursion, vielmehr wird unser JavaScript hierdurch asynchron. Bei einer Rekursion bleibt die vorherige Funktionsinstanz erhalten, während eine zweite, eine dritte etc. geöffnet wird. Hier wird `render()` sofort geschlossen und darauf gewartet, dass der Browser Zeit hat `render()` neu aufzurufen (Analogie: Bitte um Rückruf). Wann das passiert, hängt davon ab, wie viel gerade zu tun ist, garantiert jedoch vor dem nächsten Repaint der Seite. Bei einem 60Hz Monitor und ausreichender Performance des Systems also nach spätestens 16,67ms.

Mit diesem Wissen kann man sich nun ausrechnen, wie lange ein Umlauf bei unserem vorgegebenen Inkrement von 1° dauert.

$$\frac{360°}{\frac{60frames}{s}\cdot \frac{1°}{frame}}~=~6s$$

Zu guter Letzt muss noch einmal `render()` aufgerufen werden, um die Animation beim Laden der Seite anzustoßen.

*Wie viele Instanzen von render() sind bei der Anwendung von requestAnimationFrame(render) und einer Bildwiederholfrequenz von 120Hz, 25ms nach dem Laden der Seite geöffnet?*

	* 1
	* 3
	* keines der obigen

**Ergebnis**

Das fertige HTML Dokument sollte nun so aussehen und kann im Browser betrachtet werden:

<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Kurbel</title>
</head>
 
<body>
    <h2>Kurbel</h2>
    <canvas id="c" width="300" height="300" style="border-width:1px;border-style:solid"></canvas>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
 
let cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
 
    pi = Math.PI,
    l = 100,  // Laenge der Kurbel
 
    phi = 0, // Laufvariable
 
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*this.ephi.x, y:l*this.ephi.y}; }
    },
 
    // definiert Kurbel als g2() Objekt
    Kurbel = g2(),
 
    // baut und initialisiert statische Umgebung
    world = g2().clr()          // leert das Canvas
                .view({cartesian:true, x: 150, y: 150})    // schaltet kartesische Koordinaten ein und verschiebt den Nullpunkt
                .use({grp: Kurbel})    // referenziert dynamisches Kurbel-Objekt
                .use({grp: "nodfix"})  // statisches Festlager im Ursprung
    ;
 
function position() {
    // baut dynamische Kurbel auf
    Kurbel.del()
          .lin({x1: 0, y1: 0, x2: mec.A.x, y2: mec.A.y, lw:3})
          .use({grp: "nod", ...mec.A});
 
    // inkrementiert phi
    phi += pi/180;
}
 
function render() {
    // aktualisiere Position
    position();
 
    // rendert world in den Context
    world.exe(ctx);
 
    // asynchroner callback von render()
    requestAnimationFrame(render);
}
 
// startet die Animation die mittels callbacks weiterlaeuft
render();
 
    </script>
</body>
</html>

**Kurbel - zeitabhängig**

Nun soll das selbe Beispiel mit einem zeitabhängigen Inkrement animiert werden. Dazu rufe man sich die Formeln für die gleichförmige Kreisbewegung ins Gedächtnis und erinnere sich an den Zusammenhang $\varphi~=~ω⋅t$ mit $ω=2πT$
.
Da wir weiter oben ausgerechnet haben, dass ein voller Umlauf bei 60Hz 6 Sekunden dauert, entspricht dies hier der Periodendauer `T`
.

Wir fügen nun `T = 6` und `omega = 2*pi/T` zu den globalen Variablen in unserem Script hinzu. Außerdem erstellen wir noch eine Variable `t0 = false`, die die Differenz der Animationszeit von der globalen Zeit enthalten wird. Aufgrund der dynamischen Typisierung in JavaScript ist es kein Problem eine boolean Variable später zum Typ `number` zu ändern.

Im obigen Beispiel haben wir am Ende der Funktion `position() phi` inkrementiert. Diese Zeile (ehemals 48) muss entfernt werden und stattdessen evaluieren wir `phi`, das ja nun von `t` abhängt, neu, bevor das dynamische g2_objekt aufgebaut wird:

`phi = omega*t;`

Da die Zeit `t` als Parameter aus der render-Funktion nach `position()` übergeben werden soll, fügen wir den Klammern des Identifiers ein `t` hinzu, also `position(t)`.

Damit die Zeit in `position()` auch ankommt muss die render-Funktion noch geändert werden. Auch diese bekommt eine Zeit übergeben und so fügen wir auch ihrem Identifier einen Parameter hinzu, `render(time)` .
Wir erinnern uns, dass wir eine Variable `t0 = false` initialisiert haben. Dieser möchten wir nun die Animationsstartzeit zuweisen, da die Animationszeit von der globalen Zeit, z.B. durch einen Startbutton, abweichen kann. Diese Zuweisung soll aber nur geschehen, wenn die Animationsstartzeit noch nicht gesetzt wurde, also fügen wir
`
if (!t0)       
    t0 = time;
`
hinzu. Den gewohnten Aufruf von `position()` ergänzen wir nun um die Übergabe eines Parameters, der der aktuellen Animationszeit entspricht. Diese ist die Differenz der momentanen Zeit und der Animationsstartzeit umgerechnet in Sekunden.

Den erstmaligen Aufruf der render-Funktion (im Beispiel mit beliebigem Inkrement in Zeile 62) ersetzen wir hier nun durch `requestAnimationFrame(render)`;.
Wie bereits in der Einleitung dieses Kapitels erwähnt, übergibt `requestAnimationFrame()` seinem Callback ( hier `render(time)` ) einen Zeitstempel in Millisekunden als Parameter. Diesen nehmen wir in der render-Funktion mit `time` an, berechnen die Differenz zur Startzeit und übergeben schließlich die aktuelle Animationszeit für etwaige Berechnungen.


*Ergebnis:*

Der geänderte Quelltext sollte nun folgendermaßen aussehen und unspektakulärer Weise bei der Betrachtung im Browser exakt das selbe Verhalten zeigen wie der alte:

<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Kurbel</title>
</head>
 
<body>
    <h2>Kurbel</h2>
    <canvas id="c" width="300" height="300" style="border-width:1px;border-style:solid"></canvas>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
 
let cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
 
    pi = Math.PI,
    l = 100,  // Laenge der Kurbel
 
    phi = 0,  // Laufvariable
 
    T = 6,  // Periodendauer
    omega = 2*pi/T,  // Winkelgeschwindigkeit
 
    t0 = false,  // Startzeit
 
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*this.ephi.x, y:l*this.ephi.y}; }
    },
 
    // definiert Kurbel als g2() Objekt
    Kurbel = g2(),
 
    // baut und initialisiert statische Umgebung
    world = g2().clr()          // leert das Canvas
                .view({cartesian:true, x: 150, y: 150})    // schaltet kartesische Koordinaten ein und verschiebt den Nullpunkt
                .use({grp: Kurbel})    // referenziert dynamisches Kurbel-Objekt
                .use({grp: "nodfix"})  // statisches Festlager im Ursprung
    ;
 
function position(t) {
    // aktualisiet phi
    phi = omega*t;
 
    // baut dynamische Kurbel auf
    Kurbel.del()
          .lin({x1: 0, y1: 0, x2: mec.A.x, y2: mec.A.y, lw:3})
          .use({grp: "nod", ...mec.A});
}
 
function render(time) {
    // initialisiert Startzeit falls das noch nicht passiert ist
    if (!t0)
        t0 = time;
 
    // aktualisiere Position mit Uebernahme der mom. Animationszeit
    position((time-t0)/1000);
 
    // rendert world in den Context
    world.exe(ctx);
 
    // asynchroner callback von render()
    requestAnimationFrame(render);
}
 
// startet die Animation die mittels callbacks weiterlaeuft
requestAnimationFrame(render);
 
    </script>
</body>
</html>
