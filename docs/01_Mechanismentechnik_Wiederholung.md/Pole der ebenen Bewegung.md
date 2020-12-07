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

## 1.9 Pole der ebenen Bewegung

### 1.9.1 Momentanpol

<aside>
<g-2 width="250" height="230" x0="30" y0="25" cartesian>
{ 
"main": [
    { "c": "bar", "a": { "x1":0, "y1":50, "x2":0, "y2":100, "label":{"str":"a", "off": -5 }}},
    { "c": "bar", "a": { "x1":0, "y1":100, "x2":70, "y2":100, "label":{"str":"b", "off": -5 }}},
    { "c": "bar", "a": { "x1":70, "y1":100, "x2":150, "y2":0, "label":{"str":"c", "off": 5 }}},
    { "c": "nodfix", "a": { "x":0, "y":50, "label":{"str":"A0", "loc": "sw", "off": 15 } } },
    { "c": "nodfix", "a": { "x":150, "y":0, "label":{"str":"B0", "loc": "e", "off": 5 } } },
    { "c": "nod", "a": { "x":70, "y":100, "label":{"str":"B", "loc": "e", "off": 5 } } },
    { "c": "nod", "a": { "x":0, "y":100, "label":{"str":"A", "loc": "nw", "off": 5 } } },
    { "c": "lin", "a": { "x1":0, "y1":0, "x2":0, "y2":250, "ld":[8,4,1,4]}},
    { "c": "lin", "a": { "x1":170, "y1":-25, "x2":-50, "y2":250, "ld":[8,4,1,4]}},
    {"c":"avec","a":{"x":0,"y":50,"r":20,"dw":3.2,"ls":"green","label":{"str":"&omega;"}}},
    { "c": "pol", "a": { "x":0, "y":188, "label":{"str":"P", "loc": "w", "off": 5 } } }
    ]
}
</g-2>

#### **Abb. 1.9:** Momentanpol eines Viergelenks

</aside>

Der Momentan- bzw. Geschwindigkeitspol ist der augenblicklich geschwindigkeitslose Punkt einer Gliedebene, welcher seine Position im Verlaufe der Zeit in Abhängigkeit von der Bewegung des Gliedes verändert. Er ist dadurch gekennzeichnet, dass sich alle Bahnnormalen in ihm schneiden. Die Bewegungsart eines Kreises kann durch die Lage des Momentanpols charakterisiert werden, hierbei ergibt sich durch den Abstand von Momentanpol und Winkelgeschwindigkeit ein Geschwindigkeitsvektor. Der Momentanpol $P$ eines Punktes $A$ liegt immer auf einer Geraden mit seinem Krümmungsmittelpunkt $A0$. Betrachtet man nun ein Viergelenk, liegt der Momentanpol $P$ im Schnittpunkt der verlängerten Geraden der Kurbel $a$ und Schwinge $c$.

### 1.9.2 Wendepol

Sobald Körperpunkte einen krümmungsfreien Punkt wie Wende- oder Flachpunkt auf ihrer Bahn durchlaufen, haben sie jeweils gleichgerichtete Beschleunigungs- und Geschwindigkeitsvektoren. Sie besitzen somit ausschließlich Tangentialbeschleunigung, keine Normalbeschleunigung. 

> *„Der Wendekreis ist der geometrische Ort aller Punkte einer bewegten Gliedebene, die augenblicklich einen Wendepunkt ihrer Bahn durchlaufen und daher keine Normalbeschleunigung besitzen. Momentanpol und Beschleunigungspol liegen auf dem Wendekreis.“*
>
> [(vgl. Gössner 2017, S.146)](#goessner2017)

Der auf dem Wendekreis dem Momentanpol $P$ gegenüberliegende Körperpunkt wird als Wendepol $W$ bezeichnet.

<figure>
<img src="../Bilder/Lage des Wendepols.png">

#### **Abb. 1.10:** Lage des Wendepols W eines Viergelenks

</figure>

### 1.9.3 Tangentialpol

Nur Normalbeschleunigung besitzende Körperpunkte zeigen orthogonal zueinander gerichtete Beschleunigungs- und Geschwindigkeitsvektoren. Der Wechsel- oder auch 

> „Tangentialkreis ist der geometrische Ort aller Punkte einer bewegten Gliedebene, die momentan keine Tangentialbeschleunigung, sondern ausschließlich Normalbeschleunigung aufweisen. Momentanpol und Beschleunigungspol liegen auf dem Tangentialkreis.“
>
> [(vgl. Gössner 2017, S.149)](#goessner2017)

Der auf dem Tangentialkreis dem Momentanpol $P$ gegenüberliegende Körperpunkt wird als Tangentialpol $T$ bezeichnet.

<figure>
<img src="../Bilder/Lage des Tangentialpols.png">

#### **Abb. 1.11:** Lage des Tangentialpols T eines Viergelenks

</figure>

### 1.9.4 Beschleunigungspol

Im Beschleunigungspol eines Körpers erlischt die Beschleunigung, er liegt im Schnittpunkt der Bresse'schen Kreise und ist jener Teil der Gliedebene, der weder Tangential- noch Normalbeschleunigung besitzt. Der Beschleunigungspol wird hier mit $Q$ bezeichnet.

<figure>
<img src="../Bilder/Lage des Beschleunigungspol.png">

#### **Abb. 1.12:** Lage des Beschleunigungspols Q eines Viergelenks

</figure>

### 1.9.5 Bresse'sche Kreise

Zur Bestimmung von Bewegungszuständen allgemein bewegter Ebenen wird vor allem die Krümmung von Bahnkurven betrachtet. Um ein gewünschtes Verhalten der Gliedmaße von Getrieben zu erreichen, können verschiedene Modelle konstruiert werden. Im Folgenden wird die Darstellung mittels Bresse'scher Kreise betrachtet.

Bresse'sche Kreise, benannt nach dem französischen Professor der Mechanik Jacques Antoine Charles Bresse (1822-1883), ist die gemeinsame Bezeichnung für Wendekreis und Tangentialkreis. 

> „Wendekreis und Tangentialkreis gemeinsam werden als Bressesche Kreise bezeichnet. Sie schneiden sich stets im Momentanpol und Beschleunigungspol. Ihre Mittelpunkte liegen &ndash; vom Pol aus gesehen &ndash; in orthogonaler Ausrichtung auf der Polbahnnormalen und der Polbahntangenten
>
> [(vgl. Gössner 2017, S.150)](#goessner2017)

### 1.9.6 Ball'scher Punkt

Der Ball'sche Punkt oder auch Undulationspunkt ist im zweiten Schnittpunkt des Wendekreises erster und zweiter Ordnung zu finden. Der erste Schnittpunkt der Wendekreise ist der Momentanpol $P$, dieser ist gegenüberliegend zum Ball'schen Punkt (s. Abbildung 1.13). Dieser Punkt ist beschleunigungsunabhängig, obwohl dieser mit abhängigen und beschleunigungssensitiven Größen vektoriell ermittelt wird. Der Ball'sche Punkt wird in der vorliegenden Arbeit mit $U$ gekennzeichnet.

<figure>
<img src="../Bilder/Ball'sher Punkt.png">

#### **Abb. 1.13:** Ball'scher Punkt

</figure>

## References

<span id="goessner2017">Gössner, S., 2017. Mechanismentechnik: Vektorielle Analyse ebener Mechanismen. Berlin: Logos