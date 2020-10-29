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

#### Übung-Pendelrolle

Bilden Sie die Animation mit g2 nach.

<img src="https://goessner.github.io/webkinematik/Animation/Pendelrolle.gif" alt="Datei nicht gefunden" sizes="(max-height: 550px)">

HTML-Template:

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Pendelrolle</title>      
</head>
 
<body>
    <h2>Pendel</h2>             
    <canvas id="c" width="600" height="400" style="border-width:1px;border-style:solid"></canvas>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
 
 
 
    </script>
</body>
</html>
````
Hinweise:

* Definieren Sie für den Punkt, an dem das Rad gezeichnet wird, ein zusätzliches Property für den Drehwinkel. `{x:..., y:..., w:...}` 

* Den Drehwinkel können Sie bestimmen, indem Sie sich das Geschwindigkeitsprofil des Rades anschauen, welches sich aus Führungs- und Relativgeschwindigkeit zusammensetzt, und beachten, dass am Kontaktpunkt zum Boden Haftung gilt! Die Tangentialgeschwindigkeit in allgemeiner Form lautet $v_t~=~r \cdot\dot \varphi$
 
* Wenn Sie einen Blick in die API-Dokumentation von [g2.mec](https://github.com/goessner/g2-mec/tree/master/api) werfen, was auch für g2 ausdrücklich empfohlen ist, werden Sie feststellen, dass `ground()` ein Array von Punkten als ersten Parameter erwartet. Sie benötigen also ein Array in der Form [x1,y1,x2,y2,...,xn,yn] (Flat Array genannt), das die Punkte eines Halbkreises enthält. Erstellen Sie eine Funktion, die diese Punkte in einer Schleife unabhängig berechnet und an ein Array weitergibt. Rufen Sie diese Funktion auf, bevor `world` initialisiert wird, da `ground()` ansonsten über ein leeres Array gerendert wird!

> Zur Erinnerung - An Arrays hängt man Elemente mittels folgender Syntax an:

`Arrayname.push(Element1, ..., ElementN)`