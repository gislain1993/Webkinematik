---
"layout": "page",
"lang": "de",
"title": "Webtechnologie Grundlagen",
"subtitle": "Übungen",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Grundlagen des Web",
"tags": ["Web","Grundlagen","JavaScript","Programmierung","g2"],
"math": true
---

## 2.5 Kurbelschwinge - Übung

geg.: $a = 100mm$, $c = 220mm$, $\psi_0 = 600°$, $\frac{t_H}{t_R} = \frac{8}{7}$

1) den Differenzwinkel $\alpha$ der Kurbel.
2) die Gliedlänge $b$.
3) die Gliedlänge $d$.
4) den inneren Übertragungswinkel $\mu_i$.

und geben Sie die Ergebnisse in der Konsole aus.

> **Hinweise:**
>
> * Erstellen Sie eine javaScript-Datei, die eine Funktion pro Aufgabenteil enthält.
> * Methoden, wie z.B `Math.sin()`, des Math-Objektes rechnen in Radiant!

**Lösung:**

$\alpha = 12.00°$, $b = 449.66mm$, $d = 408.88mm$, $\mu_i = 38.34°$

### 2.6 Schleifen & Arrays - Übung

Der folgende Quelltext enthält ein Objekt zur Analyse eines Mechanismus. Das Property `mec.A()` liefert ein Objekt mit wiederum x- und y-Komponente. Diese Komponenten beschreiben die Punkte einer Ellipse in einem kartesischen Koordinatensystem in Abhängigkeit von `mec.phi`.

```JavaScript
const mec = {
    phi:0,
    a:170,
    b:50;
 
let ephi(): { return { x:Math.cos(this.phi), 
    y:Math.sin(this.phi) }},
    A(): {return { x:this.a*this.ephi().x,
    y:this.b*this.ephi().y }}
    };
```

* Ergänzen Sie das Objekt um ein Array benannt `values`. 
* schreiben Sie eine Funktion die `mec.phi` von 0 bis 360° in 1° Schritten durchiteriert 
* Die Funktion soll auch das Array mit $x$,$y$-Koordinatenpaaren des Punktes $A$ füllen, also [x1,y1,x2,y2,...,xn,yn]. Runden Sie dabei die Einträge auf 2 Nachkommastellen und achten Sie darauf, dass der Datentyp der Elemente `number` bleibt.
* Rufen Sie das Array anschließend in der Konsole auf.

> **Hinweis:**
>
> Achten Sie darauf funktionsfremde Variablen wie phi bei Funktionsein- und austritt konstant zu halten, wenn die Funktion nicht explizit auf eine Änderung dieser Variablen abzielt und leeren Sie Arrays bevor Sie sie (wieder) füllen.

**Lösung:**

```JavaScript
mec.values; // Ausgabe des Array [170, 0, 169.97, 0.87, 169.9, 1.74, 169.77, 2.62, 169.59, 3.49, 710 weitere… ]
```

## 2.7 Schleifen, Arrays & Objekte - Übung

Die Formel für den Freiheitsgrad von Mechanismen nach Grübler für den ebenen Fall lautet:

$$F=3(n−1)−b_1−2b_2$$

Wir beschränken uns im Folgenden auf zwangsläufige Mechanismen mit $b_1=0$.

* Gesucht sind die Anzahlen zweiwertiger Glieder $b_2$ für die zugehörigen Gliedzahlen $n$. 
* Füllen Sie ein Array mit Objekten, die als Properties jeweils $n$ und $b2$ enthalten. 
* Realisieren Sie dies durch eine Funktion, an die Sie (evtl. optionale) Parameter übergeben. In der Funktion sollte anschließend in einer Schleife bis `n` iteriert werden. 
* Lassen Sie sich anschließend das Array in der Konsole ausgeben.

> **Hinweise:**
>
> Die Anzahl der Glieder kann nur ganzzahlig (Integer) sein. Prüfen Sie dies bevor Sie den entsprechenden Wert weiterverarbeiten! Entweder mathematisch oder durch eine geeignete Standardmethode (Stichwort Number? Math? -> MDN).
>
> * Zu Objekten können Sie dynamisch Properties mit dem Punktoperator `.` hinzufügen. Bsp.: `var myObj = [];    myObj.newProp = "tada";`
>
> * In JavaScript gibt es einen sogenannten Spread-Operator... der Arrays durchiteriert und diese ausgebreitet wiedergibt. Probieren Sie aus was passiert wenn Sie Ihr Array wie folgt in der Konsole aufrufen console.log(...IhrArray);.
>
> * Falls Sie mehrere Parameter und unter anderem auch ein Array übergeben, prüfen Sie in der Funktion ob das vermeintliche Array auch wirklich ein Array ist, um Fehleingaben wie z.B. vergessene Parameter abzufangen.

**Lösungsauszug:**

$n = 2$, $b_2 = 1$; $n=4$, $b_2 = 4$;... $n = 18$, $b_2 = 25$; $n = 20$, $b_2=28$