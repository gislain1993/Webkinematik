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

### Übertragungsgleichung und Übertragungsfunktion

Bei den hier betrachteten, ungleichförmig übersetzende Mechnismen liegt nichtlineares
Übertragungsverhalten vor. Es genügt also nicht ein zahlenmässiges Verhältnis zur Angabe
der Übersetzung wie bei der gleichförmig übersetzenden Getrieben.Vielmehr ist ein 
funktionaler Zusammenhang zwischen Eingangsgröß(en) und Ausgangsgröße(n) anzugeben
-eben die *Übertragungsfunktion*. Zur Ermittlung dieser *Übertragungsfunktion* eines Getriebes bietet sich die Aufstellung der Maschengleichung(en) an.

In Weiterführung der vorangegangenen Beispiels des Viergelenkgetriebes bestimmen wir nun dessen Übertragungsverhalten. Mit den Gleichungen (6.8)und (6.9) haben wir gewissermaßen bereits die Übertragungsfunktion 0. Ordnung $\theta ~=~ f(\varphi)$ und $\xi ~=~ f(\varphi)$ vorliegen.

>$$\theta ~=~ arctan(\frac{sin\theta}{cos\theta})$$
>$$\psi ~=~ arctan(\frac{sin\psi}{cos\psi})$$ (6.10)

Die zugehörigen Übertragungsfunktionen 1. und 2. Ordnung bzw. die Winkelgeschwindigkeiten und -beschleunigungen können wir einerseits formal durch Abteilung der Beziehungen (6.10) ermitteln.

Anderseits bietet der Weg über die vektorielle Maschengleichung des Gelenkvierecks nach Bild 8.3 eine etwas einfache Lösung. Diesen wollen wir hier nun gehen. Die Maschengleichung lautet:
>$$a\,e_\varphi + b\,e_{\theta} - c\,e_\psi + d\,e_{x} ~=~ 0$$ (6.11)
Wir erhalten daraus die Winkelgeschwindigkeiten direkt durch die Ableitung nach der Zeit.
>$$a\,\dot\varphi\,\tilde e_{\varphi} + b\,\dot \theta \,\tilde e_{\theta} - c\,\dot \psi \,\tilde e_{\psi} ~=~ 0$$ (6.11)

Die Multiplikation dieser Vektorgleichung einmal mit $e_{\psi}$ und zum anderen mit $e_\theta$ lifert die skalaren Beziehung:
> $\dot \theta ~=~ \theta'\, \dot \varphi$ und $\dot \psi ~=~ \psi'\, \dot \varphi$ (6.13)

mit 
>$$\theta' ~=~ \frac{a}{b} \cdot \frac{e_\varphi \, \tilde e_\psi}{\tilde e_\theta \,e_\psi}$$
>$$\psi' ~=~ \frac{a}{c} \cdot \frac{e_\varphi \, \tilde e_\theta}{\tilde e_\theta \,e_\psi}$$ (6.14)
Zu den Winkelbeschleungungen führt die weitere Abteilung von (6.12) nach der Zeit.
>$$a\,\ddot\varphi\,\tilde e_{\varphi} - a\,\dot \varphi^2\,e_{\varphi} + b\, \ddot \theta\, \tilde e_{\theta} - b\,\dot \theta^2\,e_{\theta} - c\,\ddot \psi \, \tilde e_{\psi} + c\,\dot \psi^2\,e_{\psi} ~=~ 0$$ (6.15)

Im analogen Vorgehen zu den Geschwindigkeiten resultiert die Multiplikation dieser Gleichung mit $e_{\psi}$ und $e_{\psi}$ schließlich in der Beziehung.

>$\dot \theta ~=~ \theta'\,\ddot \varphi + \theta''\dot \varphi^2$
>$\dot \psi ~=~ \psi'\,\dot \varphi + \psi''\dot \varphi^2$ (6.16)

mit

>$$\theta'' ~=~ \frac{a}{b}\cdot \frac{(e_{\theta} \, \tilde e_{\psi})^2 (e_{\varphi} \, e_{\psi}) + \frac{a}{b}(e_{\varphi} \, \tilde e_{\psi})^2(e_{\theta} \, e_{\psi}) - \frac{a}{c}(e_{\varphi} \, \tilde e_{\theta})^2}{(e_{\theta} \, \tilde e_{\psi})^3}$$
>$$\psi'' ~=~ \frac{a}{c}\cdot \frac{(e_{\theta} \, e_{\psi})^2 (e_{\varphi} \, \tilde e_{\psi}) + \frac{a}{b}(e_{\varphi} \, \tilde e_{\psi})^2 - \frac{a}{c}(e_{\varphi} \, \tilde e_{\theta})^2 (e_{\theta} \, e_{\psi})}{(e_{\theta} \, \tilde e_{\psi})^3}$$ (6.17)

Gleichungen (6.14) und (6.17) bilden nunmehr die Übertragungsfunktionen 1. und 2.Ordnung.