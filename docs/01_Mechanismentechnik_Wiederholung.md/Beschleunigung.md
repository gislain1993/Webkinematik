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

### Beschleunigung

Beim Vorliegen der Übertragungsgleichung oder -funktion kann die Beschleunigung der Übertragungsgröße unmittelbar aus Gleichung Fehler: *Referenz nicht gefunden* ermittelt werden. Üblicherweise werden jedoch auch hier die Beschleunigungen der Glieder in ausgezeichneten Stellungen mittels des *erstens Satzes von Euler* (5.18) bestimmt.

Die Vorgehenweise sei wiederum an einer Kurbelschwinge demonstriert.

<figure>

<img src="./Bilder/bild 7.png">

</figure>

Die Gliedgeometrie und die Geschwindigkeitsverhältnisse liegen uns bereits vor. Wir benötigen nun die Winkelbeschleunigungen von Koppel und Schwinge, sowie die Beschleunigungen der Punkte *B* und *C*. Wir beginnen auch hier mit der Anwendung des *ersten Eurler'schen Satzes* aud die Kurbel und erhalten

$$\bold a_{B}~=~ \dot w_{1} \bold r_{1} - w_{1}^2 \bold r_{1}$$

Die Beschleunigung von *C* als Punkt der Koppel gleichzeitig als Punkt der Schwinge führt zur Bedingung

$$\bold a_{B} + \dot w_{2} \tilde\bold r_{2} - w_{2}^2 \bold r_{2} ~=~ \dot w_{3} \tilde\bold r_{3} - w_{3}^2 \bold r_{3}$$

Die Multiplikation dieser Vektorgleichung mit $\bold r_{3}$ und $\bold r_{2}$ liefert die Winkelbeschleunigungen

>$$\dot w_{2}~=~ - \frac{\dot w_{1} \tilde \bold r_{1} - w_{1}^2 \bold r_{1} - w_{2}^2 \bold r_{2} + w_{3}^2 \bold r_{3}}{\tilde \bold r_{2}\bold r_{3}} \, \bold r_{3}$$
>$$\dot w_{3}~=~ - \frac{\dot w_{1} \tilde \bold r_{1} - w_{1}^2 \bold r_{1} - w_{2}^2 \bold r_{2} + w_{3}^2 \bold r_{3}}{\tilde \bold r_{2}\bold r_{3}}\, \bold r_{2}$$ (6.20)

Mit dem bereits ermittelten Beziehung für $w_{2}$ und $w_{3}$ lauten die Bestimmungsgleichungen

>$$\dot w_{2}~=~ \dot w_{1}\,\frac{(\tilde \bold r_{1}\bold r_{3})}{\tilde \bold r_{2}\bold r_{3}} - w_{1}^2\, \frac{(\tilde \bold r_{2}\bold r_{3})(\bold r_{1}\bold r_{3})+(\tilde \bold r_{1}\bold r_{3})(\bold r_{2}\bold r_{3})- (\tilde \bold r_{1}\bold r_{2})\bold r_{3}^2}{(\tilde \bold r_{2}\bold r_{3})^2}$$
>$$\dot w_{3}~=~ \dot w_{1}\,\frac{(\tilde \bold r_{1}\bold r_{2})}{\tilde \bold r_{2}\bold r_{3}} - w_{1}^2\, \frac{(\tilde \bold r_{2}\bold r_{3})(\bold r_{1}\bold r_{2})+(\tilde \bold r_{1}\bold r_{3})\bold r_{2}^2- (\tilde \bold r_{1}\bold r_{2})(\bold r_{2} \bold r_{3})}{(\tilde \bold r_{2}\bold r_{3})^2}$$ (6.21)

Die noch fehlende Beschleunigung des Punkts *C* erhalten wir wiederum über die Schwinge unter Verwendung der bis hierher ermittelten Größen zu

$$\bold a_{c}~=~\dot w_{3}\tilde\bold r_{3} - w_{3}^2\bold r_{3}$$

Die Beschlenigung jedes weiteren Gliedpunkts kann hier auch durch erneute Anwendung des Eulerschen Satzes gesucht und gefunden werden.