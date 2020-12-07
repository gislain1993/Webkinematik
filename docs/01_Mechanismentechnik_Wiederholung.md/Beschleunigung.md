---
"layout": "page",
"lang": "de",
"title": "Mechanismentechnik Wiederholung",
"subtitle": "Beschleunigung",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Wiederholung der Lehrinhalte des Wahlpflichtmoduls Mechanismentechnik",
"tags": ["Mechanismentechnik","Bewegungs- und Kraftübertragung","Getriebekinematik","Schleifengleichung","Viergelenk","Lageanalyse","Übertragungsfunktion","Koppelkurven","Geschwindigkeit","Beschleunigung","g2","mec2"],
"math": true
---

## 1.7 Beschleunigung

Beim Vorliegen der Übertragungsgleichung oder -funktion kann die Beschleunigung der Übertragungsgröße unmittelbar aus Gleichung 1.17 ermittelt werden. Üblicherweise werden jedoch auch hier die Beschleunigungen der Glieder in ausgezeichneten Stellungen mittels des *erstens Satzes von Euler* bestimmt.

> #### Erster Satz von Euler für die Beschleunigung
>
> *Jede ebene, beschleunigte Bewegung eines starren Körpers setzt sich zusammen aus der Translation eines Körperpunkts sowie einer Rotation des Körpers um eben diesen Punkt. Die rotatorische Beschleunigung kann wiederum in einen radialen und einen zirkularen Anteil zerlegt werden.*

Die Vorgehenweise sei wiederum an einer Kurbelschwinge demonstriert.

<figure>
<img src="../Bilder/Beschl_Viergelenk.png">

#### **Abb. 1.7:** Beschleunigung des Viergelenks

</figure>

Die Gliedgeometrie und die Geschwindigkeitsverhältnisse liegen uns bereits vor. Wir benötigen nun die Winkelbeschleunigungen von Koppel und Schwinge, sowie die Beschleunigungen der Punkte $B$ und $C$. Wir beginnen auch hier mit der Anwendung des *ersten Euler'schen Satzes* auf die Kurbel und erhalten

$$\bm a_B = \dot\omega_1 \bm r_1 - \omega_1^2 \bm r_1$$

Die Beschleunigung von $C$ als Punkt der Koppel und gleichzeitig als Punkt der Schwinge führt zur Bedingung

$$\bm a_B + \dot\omega_2 \bm{\tilde r}_2 - \omega_2^2 \bm r_2 = \dot\omega_3 \bm{\tilde r}_3 - \omega_3^2 \bm r_3$$

Die Multiplikation dieser Vektorgleichung mit $\bm r_3$ und $\bm r_2$ liefert die Winkelbeschleunigungen

> $$\begin{aligned}\dot\omega_2 &= -\ \frac{\dot\omega_1 \bm{\tilde r}_1 - \omega_1^2 \bm r_1 - \omega_2^2 \bm r_2 + \omega_3^2 \bm r_3}{\bm{\tilde r}_2\bm r_3}\ \bm r_3\\\\
\dot\omega_3 &= -\ \frac{\dot\omega_1 \bm{\tilde r}_{1} - \omega_1^2 \bm r_1 - \omega_2^2 \bm r_2 + \omega_3^2 \bm r_3}{\bm{\tilde r}_2\bm r_3}\ \bm r_2\end{aligned}$$(1.20)

Mit den bereits ermittelten Beziehung für $\omega_2$ und $\omega_3$ lauten die Bestimmungsgleichungen

> $$\begin{aligned}
\dot\omega_2 &= \dot\omega_1\,\frac{(\bm{\tilde r}_1\bm r_3)}{\bm{\tilde r}_2\bm r_3} - \omega_1^2\, \frac{(\bm{\tilde r}_2\bm r_3)(\bm r_1\bm r_3)+(\bm{\tilde r}_1\bm r_3)(\bm r_2\bm r_3)- (\bm{\tilde r}_1\bm r_2)\bm r_3^2}{(\bm{\tilde r}_2\bm r_3)^2}\\\\
\dot\omega_3 &= \dot\omega_1\,\frac{(\bm{\tilde r}_1\bm r_2)}{\bm{\tilde r}_2\bm r_3} - \omega_1^2\, \frac{(\bm{\tilde r}_2\bm r_3)(\bm r_1\bm r_2)+(\bm{\tilde r}_1\bm r_3)\bm r_2^2- (\bm{\tilde r}_1\bm r_2)(\bm r_2 \bm r_3)}{(\bm{\tilde r}_2\bm r_3)^2}\end{aligned}$$(1.21)

Die noch fehlende Beschleunigung des Punkts $C$ erhalten wir wiederum über die Schwinge unter Verwendung der bis hierher ermittelten Größen zu

$$\bm a_C =\dot\omega_3\bm{\tilde r}_3 - \omega_3^2\bm r_3$$

Die Beschleunigung jedes weiteren Gliedpunkts kann hier auch durch erneute Anwendung des Euler'schen Satzes gesucht und gefunden werden.