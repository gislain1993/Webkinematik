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

#### Übung-Federschwinger

Bilden Sie die Animation mit g2 nach
<img src="https://goessner.github.io/webkinematik/Animation/Federschwinger.gif" alt="Datei nicht gefunden" sizes="(max-height: 600px)">
indem Sie den folgenden Quelltext vervollständigen:

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Federschwinger</title>      
</head>
 
<body>
    <h2>ungedämpfter Federschwinger</h2>             
    <canvas id="c" width="315" height="500" style="border-width:1px;border-style:solid"></canvas>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
 
let cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
 
    pi = Math.PI,
    // ...
 
    omega = pi,
    Amplitude = 100,
    y_0 = 200,
 
    A = {x:0, y:0},
    B = {x:A.x, y:y_0},    
 
    Federschwinger = g2(),
    world = g2().clr()
                .pan(150, 50)
 
                .style({lw:2, foz:15, fow:'bold'})    
                .use(Federschwinger)
                .ground([A.x-20, A.y, A.x+20, A.y])
 
                .lin(-75, 0, -75, 400).mark('tick',[0, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8, 1], 1)
                    .txt('0',-68,4).txt('200',-68,204).txt('400',-68,404)
    ;
 
function position(/* ... */) {
    // ...
 
    Federschwinger.del()
                  // ...
                      .label('k','mid',-20)
                  // ...
                      .label('m')
 
}        
 
function render(/* ... */) {
    if (/* ... */)
    //...
}
 
// ...
 
    </script>
</body>
</html>
````

**Hinweise:**

* Da hier kein `cartesian` Flag gesetzt ist, befindet der Ursprung in der oberen linken Ecke, mit der x-Achse nach rechts und der y-Achse nach unten zeigend.

* Die Schwingungsgleichung eines idealen Federpendels lautet : 
$y(t)=ŷ⋅sin(ω⋅t)+y_0$

