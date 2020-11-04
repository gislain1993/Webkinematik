---
"layout": "page",
"lang": "de",
"title": "Mechanismentechnik Wiederholung",
"subtitle": "Geschwindigkeit",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Wiederholung der Lehrinhalte des Wahlpflichtmoduls Mechanismentechnik",
"tags": ["Mechanismentechnik","Bewegungs- und Kraftübertragung","Getriebekinematik","Schleifengleichung","Viergelenk","Lageanalyse","Übertragungsfunktion","Koppelkurven","Geschwindigkeit","g2","mec2"],
"math": true
---

## 1.6 Geschwindigkeit

Beim Vorliegen der Übertragungsgleichung oder -funktion kann die Geschwindigkeit der Übertragungsgröße aus Gleichung 1.14 gewonnen werden. Üblicherweise sind wir jedoch an Geschwindigkeiten beliebiger Gliedpunkte oder an Winkelgeschwindigkeiten beliebiger Glieder in bestimmten, ausgezeichneten Stellungen interessiert. Zur Ermittlung dieser Größen bietet sich der *erste Satz von Euler* zur Verwendung an.

> #### Erster Satz von Euler für die Geschwindigkeit
>
> *Jede ebene Bewegung eines starren Körpers setzt sich zusammen aus der Translation eines Körperpunkts sowie einer Rotation des Körpers um eben diesen Punkt.*

Wir wollen das Vorgehen an einer Kurbelschwinge illustrieren. Es seien die Gliedmaße und -lagen sowie die Antriebswinkelgeschwindigkeit gegeben. Nun interessieren wir uns für die Winkelgeschwindigkeiten von Koppel und Schwinge und die Geschwindigkeiten der Punkte $B$ und $C$. 

Wir beginnen mit der Anwendung des *ersten Euler'schen Satzes* auf die Kurbel und erhalten:

$$\bm v_B = \omega_1 \bm{\tilde r}_1$$

<figure>
<img src="../Bilder/Geschw_Viergelenk.png">

#### Abb. 1.6: Geschwindigkeiten des Viergelenks

</figure>

Die Betrachtung der Geschwindigkeit des Punkts $C$ als Punkt der Koppel sowie als Punkt der Schwinge muss zu demselben Ergebnis führen und kann gleichgesetzt werden.

$$\bm v_B + \omega_2 \bm{\tilde r}_2 = \omega_3 \bm{\tilde r}_3$$

Die Multiplikation dieser Vektorgleichung einmal mit $\bm r_3$ und zum anderen mit $\bm r_2$ liefert die Winkelgeschwindigkeiten

> $$\begin{aligned}
\omega_2 &= -\omega_1\frac{\bm{\tilde r}_1}{\bm{\tilde r}_2\bm r_3}\bm r_3\\\\
\omega_3 &= -\omega_1\frac{\bm{\tilde r}_1}{\bm{\tilde r}_2\bm r_3}\bm r_2
\end{aligned}$$(1.19)

Die fehlende Geschwindigkeit des Punktes $C$ erhalten wir vorzugweise über die Schwinge unter Verwendung der bereits ermittelten Größen zu 

$$\bm v_C = \omega_3\bm{\tilde r}_3$$

Die Geschwindigkeit jedes weiteren Gliedpunkts kann durch erneute Anwendung des *Euler'schen Satzes* berechnet werden.