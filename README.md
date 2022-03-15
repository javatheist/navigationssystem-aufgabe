# Navigationsystem

* Implementierung eines Navigationskonzepts für die vier Komponenten A-D

* Mit Klick auf einen Tab erfolgt eine direkte Navigation zur entsprechenden Komponente

* Navigation zwischen den Komponenten mittels “vor”- und “zurück“-Button

* Die Buttons befinden sich rechts unterhalb der entsprechenden Komponente

* Keine Navigation vor der ersten und nach der letzten Komponente

* Entsprechendes Styling, welches dem Nutzer diese Logik intuitiv vermittelt

* Aktive Komponente wird in der URL dargestellt (Single Page Application)

* Anzahl der Komponenten soll zukünftig beliebig skaliert werden können

* NavigationService.getNavigationItems() sollte abschließend genutzt werden um die Navigationselemente abzurufen. Diese Funktion möchte aber noch implementiert werden und sollte ein Array von Navigationselementen gesäubert und sortiert nach Titel zurückliefern. Die zwei Observables staticNavigationItems$: und dynamicNavigationItems$: enthalten bereits die Daten, wie sie vorliegen bzw. vom "backend" kommen.
