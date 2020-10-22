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

### Lageranalyse des Viergelenks


<figure>

<img src="./Bilder/bild 3.png">

</figure>

Zur Lageanalyse der Glieder eines Viergelenks werden die Gliedlängen
*a,b,c,d* und der Winkel $\varphi$ gemäß Bild 8.1 vorgegeben.
Von Interesse sind nun die Winkel $\theta$ und $\psi$ der restlichen beiden beweglichen Glieder bezüglich der positiven x-Achse.

Unter Verwendung der Hilfsgeraden *g* lauten die Maschengleichung der Dreiecke $A_0BB_0$ vektoriell.

> $$a\bold e_\varphi + g \bold e_\eta - d \bold e_x ~=~ 0$$ (6.2)

> $$g \bold e_\eta + c \bold e_\psi - \bold e_\theta ~=~ 0$$ (6.3)

umstellen von Gleichungen (6.2) nach $ge_\eta$ und Quadrieren liefert

> $$g^2 ~=~ a^2 + d^2 - b \bold e_\theta ~=~ 0 $$ (6.4)

umstellen von Gleichungen (6.3) nach $ce_\theta$ und Quadrieren führt auf

$$c^2 ~=~ b^2 + g^2 - 2bg (\bold e_\theta \bold e_\eta) $$

Mit $\bold e_\theta \bold e_\eta ~=~ cos(\theta - \eta) ~=~ cos \varphi$ kann hieraus ein Ausdruck für cosø gewonnen werden.

> $$cosø ~=~ \frac{{ b^2}+ g^2 {-c^2}}{2\, b\,\ g}$$ (6.5)

Mittels des bekannten Zusammenhangs $sin^2ø ~=~ 1 - cos^2ø$ erhalten wir darüber hinaus den Term.

> $$sinø ~=~ \frac{\sqrt{{ 4\,b^2\cdot g^2}-{(b^2+g^2-c^2)^2}}}{2\, b\,\ g}$$ (6.6)

Die skalaren Komponenten von Gleichungen (6.2) liefern unmittelbar trigonometrischen Ausdrücke des Winkels $\eta$

> $$sin \eta ~=~ \frac{{-a\, sin \varphi}}{g}$$
>$$cos \eta ~=~ \frac{{d - a\,cos \varphi}}{g}$$ (6.7)

Für den Koppelwinkel $\theta ~=~ ø + \eta$ lassen sich nun durch die entsprechenden Additionstheoreme hinschreiben.

$$sin\theta ~=~ sinø \, cos\eta + cosø \, sin\eta$$
$$cos\theta ~=~ cosø \, cos\eta - sinø \, sin\eta$$

Eine Verwendun der Beziehungen (6.5), (6.6) und (6.7) resultiert schlieblich in Gleichungen zur eindeutigen Ermittlung des gesuchten Winkels $\theta$ aus den gegebenen Größen.

>$$sin\theta ~=~ \frac{(d - a\,cos \varphi)\sqrt{{ 4\,b^2\cdot g^2}-{(b^2+g^2-c^2)^2}}-a\,sin\varphi (b^2+g^2-c^2)}{2\, b\,\ g^2}$$
>$$cos\theta ~=~ \frac{ a\,sin\varphi\sqrt{{ 4\,b^2\cdot g^2}-{(b^2+g^2-c^2)^2}}-(d - a\,cos \varphi)(b^2+g^2-c^2)}{2\, b\,\ g^2}$$ (6.8)

Zur Bestimmung des jetzt noch fehlenden Winkels $\psi$ wird Gleichung (6.3) in Komponentenschreibweise entsprechend umgestellt

$$sin\psi ~=~ \frac{b\,sin\theta+a\,sin\varphi}{c}$$
$$cos\psi ~=~ \frac{b\,cos\theta-(d-a\,cos\varphi)}{c}$$

und unter Verwendung der nun bekannten trigonometrischen Ausdrücke des Winkels $\theta$ erhalten wir letztlich nach einigen Umformungen

>$$sin\psi ~=~ \frac{(d - a\,cos \varphi)\sqrt{{ 4\,c^2\cdot g^2}-{(g^2+c^2-b^2)^2}}+a\,sin\varphi (g^2+c^2-b^2)}{2\, c\,\ g^2}$$
>$$cos\psi ~=~ \frac{ a\,sin\varphi\sqrt{{ 4\,c^2\cdot g^2}-{(g^2+c^2-b^2)^2}}-(d - a\,cos \varphi)(g^2+c^2-b^2)}{2\, c\,\ g^2}$$ (6.9)

Diese Beziehung lassen sich übrigens analog zu (6.8) als Additonstheoreme der Winkel $\eta$ und $\xi$ auffassen, wobei $\xi$ der Winkel zwischen den Strecken *c* und *g* ist.

$$sin\psi ~=~ sin\xi \, cos\eta - cos\xi\,sin\eta$$
$$cos\psi ~=~ -(cos\xi\,cos\eta + sin\xi\,sin\eta)$$

Mit der Kenntnis des Winkels $\xi$ können wir darüber hinaus auch auf einfache Weise den Übertragungswinkel $\mu~=~\pi-ø-\xi$ zwisschen den Strecke *b* und *c* bestimmen. Auf diesen Übertragungswinkel wird im weitereren Verlauf noch näher eingegangen.

Die Werte der Würzelausdrücke in der Gleichungen (6.8) und (6.9) können genau genommen wahlweise positiv oder negativ sein. Da jedoch der jeweils negative Wert bloß auf ein zur x-Achse spiegelbildliches Viergelenk gemäß Bild 6.3 führt, wird auf eine - zwar mathematisch korrekte, praktisch jedoch nur gering nützliche - Notation dieses Vorzeichens verzichtet.