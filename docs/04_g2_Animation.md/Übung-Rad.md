---
"layout": "page",
"lang": "de",
"title": "Das Rad",
"subtitle": "Übung",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Animation der Beschleunigung eines Rades im Webbrowser",
"tags": ["Web","Animation","Grundlagen","JavaScript","Programmierung","g2","Canvas","Mechanismentechnik","Bewegungsübertragung", "Kraftübertragung","g2"],
"math": true
---

## 4.3 Rad — Übung

Bilden Sie die Animation 4.2 mit g2 nach indem Sie den gegebenen Quelltext vervollständigen.

**Hinweise:**

* Gehen Sie wie bei der zeitabhängigen Kurbel vor und nutzen Sie das Weg-Zeit-Gesetz.
* Achten Sie darauf die Einheiten anzugleichen!
* Die Animation startet neu, sobald `t0 = time` zugewiesen wird. Dies soll geschehen wenn das Rad aus dem Canvas herausgerollt ist. Die Breite des Canvas können Sie entweder als Zahl eingeben oder allgemein über `document.getElementById('*CanvasID*').width` auslesen.

<figure>
<img src="https://goessner.github.io/webkinematik/Animation/Rad.gif" alt="Datei nicht gefunden" sizes="(max-height: 250px)">

#### **Animation 4.2:** Rollendes Rad

</figure>

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Rad</title>      
</head>
<body>
    <h2>Rad</h2>             
    <canvas id="c" width="900" height="150" style="border-width:1px;border-style:solid"></canvas>
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
 
let cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
    pi = Math.PI
    a = 0.5,    // Beschleunigung [m/s^2]
    // ...
    ;
 
function position(t) {
// ...
}        
 
function render(time) {
    if (!t0 /* ... */)  
        t0 = time;
    // ...
}
 
// ...
    </script>
</body>
</html>
```