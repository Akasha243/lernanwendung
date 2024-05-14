# Nutzerverhalten

Wenn es darum geht, gute KI-Anwendungen zu gestalten und umzusetzen, stellt sich die Frage, was mit *gut* gemeint ist und was man dafür beachten sollte. Als ein wesentliches Merkmal guter Anwendungen wird eine **positive User Experience** (kurz: UX, dt. Nutzererlebnis) verstanden. Dieser Begriff wird unterschiedlich definiert, meint aber im Allgemeinen, wie ein Nutzer ein Produkt oder einen Service vor, während und nach der Nutzung erlebt. Damit dieses Erlebnis positiv ausfällt, sollte die Anwendung den Nutzer zum einen dabei unterstützen, seine Ziele effektiv, effizient und zufriedenstellend zu erreichen. Diese drei Aspekte werden auch unter dem Begriff Usability (dt. Gebrauchstauglichkeit) zusammengefasst. Zum anderen sollte sie ihm positive Qualitäten bieten, wie Vergnügen, Wohlbefinden oder ein besonders beeindruckendes Gefühl.

Um diese Ziele zu erreichen, werden unter anderem **bewährte Gestaltungsrichtlinien** eingesetzt. Diese bieten Orientierung und erklären, worauf es häufig ankommt und was es dementsprechend zu beachten gilt. Nachfolgend werden drei solcher Richtlinien für die Interaktion zwischen Mensch und KI vorgestellt. In diesem Artikel geht es um ausgewählte Richtlinien im Bereich »Nutzerverhalten«, womit kurzgefasst gemeint ist: KI-Systeme sollten in der Lage sein, aus dem Verhalten von Nutzern zu lernen und sich dieses zu merken, damit zukünftige Interaktionen einfacher und effizienter ablaufen.

Angenommen du möchtest nach Tokio verreisen und hast dazu gerade mehrere Male nach entsprechenden Flügen gesucht. Nun möchtest du dich nach Unterkünften erkundigen und gibst dafür »Tokio Hotel« in deine Suchmaschine ein. Leider wird dir anstelle von Hotelempfehlungen die gleichnamige Band *Tokio Hotel* als bestes Ergebnis vorgeschlagen, was zu **Frustrationen** führt. Hier kommt auch schon die erste Gestaltungsrichtlinie ins Spiel.


## Erinnere an kürzliche Interaktionen des Nutzers

Wenn es die Anwendung und der Nutzungskontext anbietet, sollten zuvor geschehene Interaktionen zwischen dem Nutzer und der KI-Anwendung verfügbar gemacht werden. Dadurch ist es dem Nutzer möglich, sich effizient (d.h. wirksam und mit geringem (Zeit-)Aufwand) auf vergangene Aktionen zu beziehen. Die KI-Anwendung muss dafür einen **kurzfristigen Speicher** aufrechterhalten, damit für das System klar ist, worauf sich der Nutzer bezieht.

Hier ein Beispiel: In einer Situation, in welcher ein Nutzer einen KI-gesteuerten <span class="md-colored-highlight">**Sprachassistenten**</span> benutzt, wird erwartet, dass der Sprachassistent das Gespräch aufrechterhält. Der Nutzer hat dem System gegenüber – wie bei einer echten Unterhaltung zwischen zwei Menschen – die Erwartungshaltung, dass sich vorangegangene Aussagen gemerkt werden, damit man sich auf diese nachfolgend beziehen kann. Fragt der Nutzer beispielsweise »Wer hat mich angerufen?« und der Sprachassistent antwortet mit »Max M.«, dann sollte auf den neuen Befehl »Rufe ihn zurück« der Sprachassistent wissen, wer mit _ihn_ gemeint ist und nicht nachfragen müssen.

In dem genannten Beispiel geschieht daher eine **Referenz auf eine vorherige Interaktion**, indem der Kontext und der Zustand der Anwendung von einer Interaktion zur nächsten übertragen wird. Würde dies nicht geschehen und der Assistent würde jede Äußerung des Nutzers als unabhängig voneinander betrachten, wäre der Nutzer sehr wahrscheinlich frustriert und würde eine schlechte User Experience erleben.


## Lerne aus dem Verhalten von Nutzern

Des Weiteren kann das Nutzererlebnis **personalisiert** werden, indem aus den Aktionen des Nutzers im Laufe der Zeit **gelernt** wird. Dadurch ist es der KI-Anwendung möglich, ihre Dienste zu verbessern, indem diese an die Bedürfnisse und Präferenzen des Nutzers angepasst werden. Mit Personalisierung ist hier gemeint, dass dem Nutzer bestimmte Inhalte empfohlen werden (z. B. Produkte beim Online-Shopping basierend auf Interessen) oder bestimmte Aktionen nahegelegt werden (z. B. die drei wichtigsten Kommandos, die dieser Nutzer in seiner Situation am ehesten benötigt).

Ein KI-gestützter <span class="md-colored-highlight">**Schreibassistent**</span> kann beispielsweise den bevorzugten Schreibstil (Formulierungen, Wortwahl, Satzlänge, etc.) eines Nutzers erlernen und den Nutzer beim Schreiben adäquat unterstützen. Konträr dazu steht eine Anwendung, die dem Nutzer ungeeignete Inhalte empfiehlt, die der Nutzer wiederholt abgelehnt oder ignoriert hat.


## Füge Kontext aus menschlichen Quellen hinzu

Werden dem Nutzer Empfehlungen von der KI-Anwendung angezeigt, weiß er dabei manchmal nicht, wie diese zu bewerten sind. Um sie richtig einschätzen zu können, kann es sinnvoll sein, kontextbezogene **Informationen aus Drittquellen** bereitzustellen. Werden diese als vertrauenswürdig eingestuft, können sie den Nutzer dabei unterstützen, den Wert der Empfehlungen zu bestimmen. Dies ist insbesondere dann nützlich, wenn viel auf dem Spiel steht (z. B. bei sicherheitskritischen Anwendungen) oder es sich um Novizen handelt.

Wenn beispielsweise ein Nutzer einen <span class="md-colored-highlight">**Chatbot**</span> nach guten Geschichtsbüchern zum Ersten Weltkrieg fragt, kann der Chatbot darauf verweisen, dass seine Antwort auf Empfehlungen der Princeton University basiert. Hier findet also ein Verweis auf eine **Expertenquelle** statt, wie einer angesehenen Universität, die ein gewisses Maß an Vertrauen genießt. Dieser zusätzliche Kontext kann in Verbindung mit Erklärungen und Konfidenzangaben dazu beitragen, die Erwartungen des Nutzers an die Qualität der Empfehlungen festzulegen.

Weiterhin kann der Kontext auch **von anderen Nutzern oder Communitys** stammen und als eine Art _Sozialer Beweis_ (engl. Social Proof) nützen. Die Plattform X (ehemals Twitter) z. B. hat ein Feature eingebaut, bei dem Beiträge durch _Community Notes_ kommentiert werden können, um so wichtigen Kontext zu ergänzen und beispielsweise Falschinformationen abzuschwächen. Eine weitere Möglichkeit besteht darin, **Verhaltensmuster** von relevanten anderen Nutzern dem aktuellen Nutzer zu empfehlen. So könnte eine Social-Media-Plattform dem Nutzer einen bestimmten Account vorschlagen, basierend darauf, dass Freunde des Nutzers ebenfalls diesem Account folgen. Es könnte sich dabei also um ähnliche Interessen oder Freundesgruppen handeln. Wird dem Nutzer nun kommuniziert, dass sechs seiner Freunde diesem Account folgen, stärkt dies das Vertrauen und Interesse des Nutzers. In allen Fällen sorgen die zusätzlichen Informationen dazu, dass sich Empfehlungen besser verstehen, einordnen und bewerten lassen.


## <span class="summary-heading">Kurzgefasst</span>

Bewährte Gestaltungsrichtlinien können dabei helfen, gute KI-Anwendungen zu gestalten. Die vorgestellten Richtlinien beziehen sich alle auf das Verhalten des Nutzers, damit seine Interaktionen in Zukunft effizient ablaufen, und lassen sich wie folgt verdichten: Erinnere an Vergangenes, Lerne über die Zeit, Kontextualisiere durch Drittquellen.