---
"layout": "page",
"lang": "de",
"title": "Webtechnologie Grundlagen",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Grundlagen des Web",
"tags": ["Web","Grundlagen","JavaScript","Programmierung","g2"],
"math": true
---

## 2.1 Was sollten Sie bereits wissen?

Für diese Einführung sollten Sie die folgenden Grundkenntnisse besitzen: 

* Ein allgemeines Verständnis von Internet und World Wide Web.
* Gute praktische Kenntnisse der HyperText Markup Language.
* Etwas Programmiererfahrung. 

Falls Sie erst mit dem Programmieren beginnen, folgen Sie einer der Anleitungen, die auf der Hauptseite zu JavaScript verlinkt sind.

## 2.2 Wo finden Sie Informationen zu JavaScript ?

Die Dokumentation zu JavaScript im MDN umfasst Folgendes:

* [Learning the Web](https://developer.mozilla.org/de/docs/Learn) vermittelt Informationen für Einsteiger und präsentiert grundlegende Konzepte der Programmierung und des Internets.

* [JavaScript Guide](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide) gibt einen Überblick über JavaScript.

* [JavaScript Referenz](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference) enthält ausführliche Informationen zu den einzelnen Methoden und Objekten, die in JavaScript verwendet werden.

Falls Sie sich das erste Mal mit JavaScript befassen, beginnen Sie am besten damit sich dieses [JavaScript Videotutorial](https://www.lynda.com/de/Frameworks-Skriptsprachen-tutorials/JavaScript-Crashkurs/195067-2.html) (Sie müssen bei lynda.com eingeloggt sein damit der Link funktioniert) anzusehen. Dazu müssen Sie sich auf der Plattform lynda.com als Angehöriger der FH Dortmund über das entsprechende Portal und mit Ihrem FH-Account einloggen. Die genaue Vorgehensweise ist [hier](https://www.fh-dortmund.de/lynda) beschrieben. Sobald Sie mit den ersten Grundlagen vertraut sind, können Sie die JavaScript Referenz nutzen, um noch mehr über die einzelnen Methoden, Funktionen und Objekte von JavaScript zu erfahren.

## 2.3 Was ist JavaScript?

JavaScript ist eine plattformübergreifende, objektorientierte Skriptsprache. Es ist eine kompakte und ressourcenschonende Sprache. Innerhalb einer Host-Umgebung kann JavaScript mit den Objekten seiner Umgebung verknüpft werden, um diese programmatisch zu steuern.

JavaScript beinhaltet eine Standardbibliothek von Objekten wie Array, Date, und Math, sowie einen Kern an Sprachelementen wie Operatoren, Kontrollstrukturen und Anweisungen.. Core JavaScript kann für eine Vielzahl von Anwendungsfällen erweitert werden, indem man es durch zusätzliche Objekte ergänzt. Beispiele:

* Clientseitiges JavaScript erweitert die Kernsprache durch die Bereitstellung von Objekten, mit denen ein Browser und sein Document Object Model (DOM) steuern lassen. Zum Beispiel ermögliche es clientseitige Erweiterungen einer Anwendung, Elemente in einem HTML-Formular anzulegen und auf Benutzerereignisse wie Mausklicks, Formulareingaben und Seitennavigation zu reagieren.

* Serverseitiges JavaScript erweitert die Kernsprache durch Bereitstellung von Objekten, die für die Ausführung von JavaScript auf einem Server von Bedeutung sind. Zum Beispiel ermöglichen es serverseitige Erweiterungen einer Applikation, mit einer Datenbank zu kommunizieren, Information von einem Aufruf der Applikation zum nächsten zu erhalten oder Änderungen an Dateien auf einem Server vorzunehmen.

#### 2.3.1 JavaScript und die ECMAScript-Spezifikation

Die Spezifikation von ECMAScript besteht aus einem Satz von Anforderungen an eine Implementierung von ECMAScript; sie ist zweckdienlich, falls Sie standardkonforme Spracheigenschaften in Ihrer ECMAScript-Implementierung oder ihrer Laufzeitumgebung ( wie SpiderMonkey in Firefox oder v8 in Chrome ) realisieren wollen.

Das ECMAScript-Dokument soll nicht den Scriptprogrammierer unterstützen; nutzen Sie für Informationen zum Erstellen von Scripten die JavaScript-Dokumentation.

Die ECMAScript-Spezifikation verwendet Terminologie und Syntax, mit der JavaScript-Programmierer möglicherweise nicht vertraut sind. Obwohl sich die Beschreibung der Sprache in ECMAScript unterscheiden kann, bleibt die Sprache selbst die gleiche. JavaScript unterstützt jede Funktionalität, die in der ECMAScript-Spezifikation genannt wird.

Die JavaScript-Dokumentation beschreibt Aspekte der Sprache in für JavaScript-Programmierer passender Form.

### 2.3.2 Erste Schritte mit JavaScript

Der ersten Schritte mit JavaScript bedarf es weniger Hilfsmittel. Als Texteditor empfiehlt sich die Nutzung von z.B. [Visual Studio Code](https://code.visualstudio.com) oder [Notepad++](https://notepad-plus-plus.org). Beide Programme sind Open Source und somit kostenfrei. Zudem wird ein Webbrowser zur Wiedergabe von HTML-Dokumenten benötigt. [Mozilla Firefox](https://www.mozilla.org/de/firefox/new/) weißt dabei für unsere Zwecke momentan die beste Performance auf. Es funktioniert aber grundsätzlich ([bis inkl. ES6](http://kangax.github.io/compat-table/es6/)) jeder moderne Browser.

Es gibt Grundsätzlich, ohne etwaige IDEs zu beachten, zwei Möglichkeiten JavaScript auszuführen. Im Browser und in der Kommandozeile des Betriebssystems via NodeJS. Die zweite Möglichkeit ist deutlich komfortabler wenn man mit längeren Quelltexten arbeitet.

### 2.3.3 JavaScript im Browser

Die Web-Konsole zeigt Ihnen Informationen zur aktuell geladenen Webseite an und beinhaltet zudem eine Kommandozeile, die Sie nutzen können, um JavaScript-Ausdrücke im Kontext der aktuellen Seite auszuführen.

Um die Web-Konsole zu öffnen, wählen Sie in Mozilla Firefox "Einstellungen" -> "Entwickler-Werkzeuge" -> "Web-Konsole" oder drücken Sie einfach <kbd>F12</kbd> und wählen den Tab "Konsole" falls dieser nicht ohnehin schon gewählt ist (<kbd>Strg</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> öffnet die Konsole immer direkt). Die Konsole wird am unteren Rand des Browserfensters angezeigt. Entlang des unteren Rands der Konsole befindet sich eine Kommandozeile, in der Sie JavaScript-Befehle eingeben können; die zugehörige Ausgabe erscheint im darüber liegenden Fensterbereich:

<figure>
<img src="../Bilder/bild 15.png">
</figure>

Die [Web-Konsole](https://developer.mozilla.org/de/docs/Tools/Web_Konsole) eignet sich hervorragend zur Ausführung einzelner Zeilen JavaScript, aber wollen Sie mehrere Zeilen ausführen können, ist das nicht besonders komfortabel, und Ihren Beispielcode speichern können Sie mit der Web-Konsole auch nicht. Daher ist für komplexere Beispiele die [JavaScript-Umgebung](https://developer.mozilla.org/de/docs/Tools/Scratchpad) (engl. Scratchpad) die bessere Wahl.

Um die JavaScript-Umgebung zu öffnen, wählen Sie "JavaScript-Umgebung" aus dem Menü "Entwickler-Werkzeuge", das Sie im Hauptmenü von Firefox finden. Die JavaScript-Umgebung öffnet sich in einem eigenen Fenster als Editor, mit dem Sie JavaScript schreiben und im aktiven Tab des Browsers ausführen können. Sie können auch Skripte auf der Festplatte speichern bzw. davon laden.

Wählen Sie "Ausführen", wird der Code in der JavaScript-Umgebung ausgeführt. Das Ergebnis wird per "Anzeigen" in Form eines Kommentars zurück in die JavaScript-Umgebung geschrieben:

<figure>
<img src="../Bilder/bild 16.png">
</figure>

### 2.3.4 JavaScript außerhalb des Browsers

Die Runtime Node.js, die in Googles V8 JS Engine ausgeführt wird, wurde entwickelt, um JavaScript, welches normalerweise clientseitig ausgeführt wird, auf Servern nutzen zu können. Nach der Installation von Node.js auf seinem Rechner, kann man jedoch JavaScript auch in der Eingabeaufforderung des Betriebssystems (in Windows 10 unter "Start" -> "Windows-System" -> "Eingabeaufforderung", in Windows 7 unter "Start" -> "Zubehör" -> "Eingabeaufforderung") - ohne Browser - ausführen. In späteren Kapiteln dieses Lernmoduls erfolgt noch eine tiefere Einführung in Node, es empfiehlt sich aber bereits jetzt die [Installation](https://nodejs.org/en/download/current/), da es den Workflow bei den Übungen erheblich verbessert. Ist Node.js installiert, öffnen Sie die Eingabeaufforderung und tippen ```node``` ein und bestätigen mit der Entertaste. Der Ordnerpfad verschwindet und es wird ```>``` als Führungszeichen angezeigt. Nun können Sie JavaScript in der Kommandozeile programmieren. Um Node zu beenden Drücken Sie zweimal <kbd>Strg</kbd> + <kbd>c</kbd>.

Möchten sie, vorher mit einem Texteditor erstellte JavaScript-Dateien ausführen, geht das folgendermaßen: Öffnen Sie die Eingabeaufforderung, navigieren Sie an den Speicherort an dem Ihre *.js Datei liegt, und tippen Sie ```node Dateiname.js``` ein, also z.B.: ```C:\Webkinematik\Uebungen>node U1.js```.

Wer sich dazu entschieden hat [Visual Studio Code](https://code.visualstudio.com) als Texteditor zu nutzen, macht sich nun das Leben noch ein wenig leichter. Man öffne in VS Code den Extension-Manager über "Anzeigen" -> "Extensions" oder die Sidebar, suche nach "Node Exec" ([Extension im Web](https://marketplace.visualstudio.com/items?itemName=miramac.vscode-exec-node)) und installiere die Erweiterung. Nun kann man, wenn Node.js auf dem PC installiert und eine JavaScript-Datei in VS Code geöffnet ist, diese ganz einfach mit der Taste <kbd>F8</kbd> im integrierten Terminal von VS Code ausführen lassen. Beenden, falls erforderlich, erfolgt mit <kbd>F9</kbd>.

> #### **Tipp - Navigation in der Eingabeaufforderung:**
>
> Sie können einfach mit gedrückter Umschalttaste in dem Ordner einen Rechtsklick machen, dessen Pfad in der Eingabeaufforderung stehen soll, dann erscheint ein zusätzlicher Kontextmenüeintrag "Eingabeaufforderung hier öffnen". Alternativ schauen Sie hier nach.

## 2.4 JavaScript Kurzüberblick

Variablen deklariert man in JavaScript mit dem Schlüsselwort ``var``, also z.B. ``var x = 42``; oder var ``x = "foo"``;. Wie man sieht braucht man den Datentyp der Variable nicht mit angeben, da JavaScript dynamisch typisiert ist. In ES6 wurden zudem die Schlüsselwörter ``let`` und ``const`` eingeführt, durch die Variablen einen anderen Gültigkeitsbereich besitzen, bzw. unveränderlich werden. In Googles V8 Engine war var jedoch zum Zeitpunkt der Erstellung dieses Kurses (Oktober 2016) noch performanter und daher wird hier in den meisten Bespielen ``var`` genutzt. Dies hat sich inzwischen jedoch geändert, sodass ohne Bedenken ``let`` und ``const`` verwendet werden können und sollten.
[Mehr zu Variablen](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Deklarationen).

### 2.4.1 Datentypen

ECMAScript6 definiert sieben Datentypen:

1) ``boolean``: true und false
2) ``null``: Ein spezielles Schlüsselwort, welches einen null-Wert kennzeichnet.
3) ``undefined``: Eine Eigenschaft, deren Wert undefined ist.
4) ``number``: integer und float werden nicht unterschieden
5) ``string``: Eine Zeichenkette
6) ``symbol``: Ein Datentyp, bei dem Instanzen einzigartig und unveränderlich sind.
7) ``object``: z.B. [JSON](https://www.json.org/json-en.html)-Objekte aber auch Arrays

[Mehr zu Datentypen.](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Datenstrukturen_und_-typen)

### 2.4.2 Array Literale

Die einfachste Weise in JavaScript ein Array zu erstellen, ist mittels der Initialisierungsnotation;  Durch ``var jsLibraries = ["g2", "g2.mec", "v2", "jQuery"]``; wird ein Array (``jsLibraries``) erstellt, das vier Strings enthält.
Das erste Element hat den Index ``0``, das letzte ``Arrayname.length``. Bestimmte Elemente eines Array ruft man folgendermaßen auf:

``<Arrayname>[<Index>]``, also ``jsLibraries[2] // v2``.
Möchte man ein weiteres Element hinzufügen, geht das am besten mit der Methode ``.push(<Element>)``. Durch ``jsLibraries.push("g2-chart")``; wird ``jsLibraries`` zu ``["g2","g2.mec","v2","jQuery","g2-chart"]``.

Man kann mit der Initialisierungsnotation natürlich auch leere Array erstellen
``var myArray = []``;

Benutzt man zudem die selbe Syntax bei einem bestehenden Array, ohne das Schlüsselwort `var`, wird das Array geleert - der Variable wird ein leeres Array neu zugewiesen.

* [Mehr zu Arrays.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### 2.4.3 Objekt Literale

Objekt Literale eignen sich hervorragend als Container für andere Variablen und Methoden. Auch für Objekte bietet sich die Initialisierungsnotation an, nur hier mit geschweiften Klammern:

```JavaScript
var obj = {  
  property_1: Wert_1, // property_# kann ein Identifier...
  2: Wert_2, // oder vom Typ number...    
  "property n": Wert_n // oder ein string sein
  }
```

Das vorherige Array als Objekt-Literal wird folgendermaßen definiert:

```JavaScript
var jsLibraries = {
    1:"g2",
    element_2:"g2.mec",
    "element_3":"v2",
    bloated:function() {return "jQuery"}
}
```

Es wird empfohlen Identifier zu nutzen, da der Zugriff auf Properties dann mittels Punktoperator `.` erfolgen kann: `jsLibraries.element_2 // g2.mec`

Nutzt man Strings oder Numbers er folgt der Zugriff wie bei einem Array: `jsLibraries[1] // g2`, bzw. `jsLibraries["element_3"] // v2`

Wie man sieht können Objekt Properties selbst Funktionen sein: `jsLibraries.bloated(); // jQuery`

* [Mehr zu Objekten](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_object_initializers).
* [Noch mehr zu Objekten](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object).

### 2.4.4 Standard Objekte

JavaScript stellt einige vordefinierte Objekte mit nützlichen Properties und Methoden zur Verfügung, auf die bei Bedarf zugegriffen werden kann.

Das, für uns Ingenieure, wichtigste Objekt ist dabei zweifellos das `Math` Objekt. In ihm finden wir Konstanten wie z.B. $\pi$ (`Math.PI`) oder die Eulersche Zahl $e$ (`Math.E`), aber auch Funktionen um z.B. den Betrag einer Zahl zu erhalten `Math.abs(x)` oder `Math.round(x)` um $x$ ganzzahlig zu runden. Auch trigonometrische Funktionen wie `Math.sin(x)`, `Math.cos(x)` etc. und der Arkustangens mit zwei Argumenten `Math.atan2(y,x)` sind hier enthalten.

Eine vollständige Übersicht zum Math-Objekt gibt es entweder [hier](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math), oder öffnen Sie mit F12 die Webkonsole und tippen Sie `Math` ein und bestätigen mit Enter. Die Ausgabe lässt sich für einen schnellen Überblick expandieren.

Ein weiteres wichtiges Standardobjekt ist `Number`. Dieses Objekt enthält beispielsweise eine mit `.toFixed(<# Stellen>)` Methode um Zahlen auf eine bestimmte Anzahl von Nachkommastellen zu runden. Die Zahlen werden jedoch zu einem String gewandelt und so sollte man vor den Ausdruck noch ein `+` schreiben, damit daraus wieder eine Zahl wird. Diese Methode ist eine Prototyp-Eigenschaft und wird daher an die zu rundende Zahl angehangen: `+65.48464684.toFixed(2) // 65.48`

Mehr zum Number-Objekt können Sie [hier](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number) nachlesen.

Es gibt noch viele weitere nützliche Standardobjekte, so gehört z.B. das Property length aus dem Abschnitt "Array Literale" zum Array-Objekt.
Eine gute Dokumentation der Standardobjekte findet man wie immer im MDN.

### 2.4.5 Funktionen

Funktionen werden in JavaScript mit dem Schlüsselwort function definiert, genauer via:

```JavaScript
function <Identifier>([param1],[param2],...) {
  // Anweisungen                               
}
```        

Als Anweisungen kann man Berechnungen, Schleifen etc. laufen lassen. Funktionen können haben ein optionales Return Statement. Schreibt man das Schlüsselwort `return` in den Funktionskörper, gibt die Funktion das nachfolgende zurück und wird verlassen. Fehlt `return`, wird `undefined` nach Abarbeitung aller Anweisungen zurückgegeben. Innerhalb von Funktionen können weiterhin Variablen deklariert werden. Diese sind dann Privat, existieren also nur im Gültigkeitsbereich (Scope) dieser Funktion.
Dabei ist allerdings zu beachten, das Schlüsselwort `var` zu verwenden. Tut man dies nicht wird eine globale Variable erstellt!
Also:

```JavaScript
function myFunction() {
  var private = true;   
  // Anweisungen        
}
```        

Erstellt eine nur im Scope von `myFunction` gültige Variable `private`, während

```JavaScript
function myFunction() {
  global = true;       
  // Anweisungen        
}
```  

eine globale Variable global anlegt.

Als weiteres Beispiel schauen Sie sich folgende Funktion an, die eine Zahl annimmt und einen berechneten Wert zurückgibt:

```JavaScript
function toRad(x) {
    return x*Math.PI/180
}
var degree90 = 90;
var radian90 = toRad(degree90); // 1.5707963267948966
var radian30 = toRad(30); // 0.5235987755982988
```

> Die Trigonometrie-Methoden des Math-Objektes rechnen in Radiant. Daher ist es wichtig darauf zu achten, Eingaben in Grad immer vorher umzurechnen.
> Funktionsparametern kann ein Standardwert zugewiesen werden. Dadurch lassen sich optionale Parameter realisieren.

Beispiel:
```JavaScript
function add(x,y) {
   var a = x || 0;  // weise x zu (falls es existiert) ODER 0
   var b = y || 0;  // weise y zu (falls es existiert) ODER 0
   return a + b
}

add(2,3); // 5
add(2); // 2
```

Wenn in der Funktion nicht || 0 stände, würde `add(2)`; NaN wiedergeben.

* [Mehr zu Funktionen](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen).

### 2.4.6 Schleifen

In JavaScript gibt es mehrere Arten von Schleifen die alle Aktionen für eine bestimmte Anzahl an Wiederholungen ausführen. Eine dieser Varianten ist die for-Schleife:

```JavaScript
for ([initialerAusruck]; [Bedingung]; [erhöhenderAusdruck]) {
  // Anweisungen                          
} 
```

Die Schleife läuft so lange bis die Bedingung `false` liefert. Der initiale Ausdruck kann eine schleifenexterne Variable sein, kann aber auch nur für das Scope der Schleife deklariert werden.

Bedingungen bestehen oft aus relativen Vergleichen von Werten für die man entsprechende Operatoren, wie z.B `<` (kleiner) benötigt. Diese stellt JavaScript natürlich ebenso zur Verfügung, wie logische Operatoren, die dazu verwendet werden Bedingungen zu verknüpfen. Eine Übersicht über Operatoren gibt es [hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

Beispiel:

```JavaScript
function gauss(n) {
    return n*(n+1)/2;
}
 
function sum(n) {
    var res = 0;
 
    for (var i = 0; i < n+1; i++) {
        res += i;
    }
 
    return res;
}
 
gauss(15); // 120
sum(15);   // 120
```

Beide Funktionen berechnen die Summer der ersten n natürlichen Zahlen. Die Funktion mit der `for`-Schleife ermöglicht es jedoch z.B. Zwischenwerte zu weiterzuverwenden sofern man dies denn möchte:

```JavaScript
function sum(n) {
    var res = 0;
 
    for (var i = 0; i < n+1; i++) {
        res += i;
        myArray.push(res);
    }
 
    return res;
}
 
var myArray = [];
sum(5);
console.log(...myArray); // 0 1 3 6 10 15
```

Eine weitere Schleifenart ist die `while`-Schleife (kopfgesteuerte Schleife)

```JavaScript
while (<Bedingung>) {
  // Anweisungen      
  // Inkrementierung  
}                     
```

die auch als `do-while` Variante (fußgesteuerte Schleife) existiert und so die Anweisungen mindestens einmal ausführt

```JavaScript
do {                   
  // Anweisungen       
  // Inkrementierung   
} while (<Bedingung>)
```

* [Mehr zu Schleifen und Iterationen.](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/schleifen_und_iterationen)

### 2.4.7 if-else

Natürlich gibt es in JavaScript auch Verzweigungsanweisungen. Die einfachste Art diese einzusetzen ist

```JavaScript
if (<Bedingung>) <Anweisung>;
```

Möchte man mehrere Anweisungen tätigen, muss man diese zu einem Block zusammenfassen

 ```JavaScript
 if (<Bedingung>) {       
  // Anweisungen         
}      
```

Optional kann auf die Anweisungen auch ein else-Statement folgen

```JavaScript
if (<Bedingung>) {      
  // Anweisung1          
} else {                 
  // Anweisung2          
}                        
```

und das Ganze lässt sich auch verketten

```JavaScript
if (<Bedingung1>) {              
  // Anweisung1                  
} else if (<Bedingung2>) {       
  // Anweisung2                  
} else {                         
  // Anweisung3                  
}                             
```

* [Mehr zu if-else-Statements.](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/if...else)

* Eine weitere Möglichkeit Programmcode zu verzweigen stellt die [switch-Anweisung](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/switch) dar.