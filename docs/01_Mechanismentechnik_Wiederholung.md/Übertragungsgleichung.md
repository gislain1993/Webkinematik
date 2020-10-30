---
"layout": "page",
"lang": "de",
"title": "Mechanismentechnik Wiederholung",
"subtitle": "Übertragungsgleichung und Übertragungsfunktion",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Wiederholung der Lehrinhalte des Wahlpflichtmoduls Mechanismentechnik",
"tags": ["Mechanismentechnik","Bewegungs- und Kraftübertragung","Getriebekinematik","Schleifengleichung","Viergelenk","Lageanalyse","Übertragungsfunktion","g2","mec2"],
"math": true
---

## 1.4 Übertragungsgleichung und Übertragungsfunktion

Bei den hier betrachteten, ungleichförmig übersetzenden Mechanismen liegt nichtlineares Übertragungsverhalten vor. Es genügt also nicht ein zahlenmäßiges Verhältnis zur Angabe der Übersetzung wie bei den gleichförmig übersetzenden Getrieben. Vielmehr ist ein funktionaler Zusammenhang zwischen Eingangsgröße(n) und Ausgangsgröße(n) anzugeben &ndash; eben die *Übertragungsfunktion*. Zur Ermittlung dieser *Übertragungsfunktion* eines Getriebes bietet sich die Aufstellung der Maschengleichung(en) an.

In Weiterführung des vorangegangenen Beispiels des Viergelenkgetriebes bestimmen wir nun dessen Übertragungsverhalten. Mit den Gleichungen (1.8) und (1.9) haben wir gewissermaßen bereits die Übertragungsfunktion 0. Ordnung $\theta = f(\varphi)$ und $\xi = f(\varphi)$ vorliegen.

> $$\begin{aligned}
\theta=\arctan\frac{\sin\theta}{\cos\theta}\\\\
\psi=\arctan\frac{\sin\psi}{\cos\psi}
\end{aligned}$$(1.10)

Die zugehörigen Übertragungsfunktionen 1. und 2. Ordnung bzw. die Winkelgeschwindigkeiten und -beschleunigungen können wir einerseits formal durch Abteilung der Beziehungen (1.10) ermitteln.

Anderseits bietet der Weg über die vektorielle Maschengleichung des Gelenkvierecks nach Bild 1.3 eine etwas einfachere Lösung. Diesen wollen wir hier nun gehen. Die Maschengleichung lautet:

> $$a\,\bm e_\varphi + b\,\bm e_{\theta} - c\,\bm e_\psi + d\,\bm e_x = \bm 0$$ (1.11)

Wir erhalten daraus die Winkelgeschwindigkeiten direkt durch die Ableitung nach der Zeit.

> $$a\,\dot{\varphi}\,\bm{\tilde e}_{\varphi} + b\,\dot{\theta}\,\bm{\tilde e}_{\theta} - c\,\dot{\psi}\,\bm{\tilde e}_{\psi} = \bm 0$$ (1.12)

Die Multiplikation dieser Vektorgleichung einmal mit $\bm e_{\psi}$ und zum anderen mit $\bm e_\theta$ liefert die skalaren Beziehung:

> $$\dot{\theta} = \theta'\,\dot{\varphi}\quad und\quad \dot{\psi} = \psi\, \dot{\varphi}$$(1.13)

mit 

> $$\begin{aligned}
\theta' &= \frac{a}{b}\ \frac{\bm e_\varphi \bm{\tilde e}_\psi}{\bm{\tilde e}_\theta\bm e_\psi}\\\\
\psi' &= \frac{a}{c}\frac{\bm e_\varphi\bm{\tilde e}_\theta}{\bm{\tilde e}_\theta\bm e_\psi}
\end{aligned}$$(1.14)

Zu den Winkelbeschleunigungen führt die weitere Ableitung von (1.12) nach der Zeit.

> $$a\,\ddot\varphi\,\bm{\tilde e}_{\varphi} - a\,\dot \varphi^2\,\bm e_{\varphi} + b\, \ddot \theta\,\bm{\tilde e}_{\theta} - b\,\dot \theta^2\,\bm e_{\theta} - c\,\ddot \psi \,\bm{\tilde e}_{\psi} + c\,\dot \psi^2\,\bm e_{\psi} = \bm 0$$(1.15)

Im analogen Vorgehen zu den Geschwindigkeiten resultiert die Multiplikation dieser Gleichung mit $\bm e_{\varphi}$ und $\bm e_{\psi}$ schließlich in der Beziehung:

> $$\dot\theta = \theta'\ddot\varphi + \theta''\dot\varphi^2 \quad und \quad \dot\psi = \psi'\dot\varphi + \psi''\dot\varphi^2$$(1.16)

mit

> $$\begin{aligned}
\theta'' = \frac{a}{b}\frac{(\bm e_\theta \bm{\tilde e}_\psi)^2(\bm e _\varphi\bm e_\psi)+\frac{a}{b}(\bm e_\varphi\bm{\tilde e}_\psi)^2(\bm e_\theta\bm e_\psi)-\frac{a}{c}(\bm e_\varphi\bm{\tilde e}_\theta)^2}{(\bm{\tilde e}_\theta\bm e_\psi)^3}\\\\
\psi'' = \frac{a}{c}\frac{(\bm e_\theta \bm{\tilde e}_\psi)^2(\bm e _\varphi\bm e_\psi)+\frac{a}{b}(\bm e_\varphi\bm{\tilde e}_\psi)^2-\frac{a}{c}(\bm e_\varphi\bm{\tilde e}_\theta)^2(\bm e_\theta\bm e_\psi)}{(\bm{\tilde e}_\theta\bm e_\psi)^3}
\end{aligned}$$(1.11)

Gleichungen (1.14) und (1.17) bilden nunmehr die Übertragungsfunktionen der 1. und 2. Ordnung.