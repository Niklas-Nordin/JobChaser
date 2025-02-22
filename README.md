JobChaser

--------Vecka 1...

Allmänt om ramverket React: Hur/Varför uppkom det? Vad är centralt i React?

Svar:
React är ett ramverk / bibliotek, där man har både HTML, CSS och javascript samlat till en klumpad komponent. React är en open-source miljö och syftet med React är att effektivisera heneteringen av UI komponenter och uppdateringar. Det utveckades av några utvecklare på Facebook, då de behövde lösa deras problem på ett bättre sätt.

Centralt i React:

- JSX och komponenter
- Virtuell DOM
- One way data flow
- State och props

Vad är JSX?

Svar:
JSX står för Javascript XML. Det är ett Javascript syntax. Det låter en blanda Javascript kod och liknande HTML kod tillsammans i React, vilket ger en bättre struktur i koden.

Vad är en komponent?

Svar:
En komponent kan man säga i jämförelse, är en funktion. En komponent är en del av UI:et på hemsidan och är återanvändbar i sin applikation. Med flera delar (komponenter) bygger man upp en större applikation. Man kan säga att det är som mindre byggstenar.

Vad är props?
Svar:
Props är data som skickas från en komponent till en annan, så man kan återanvända funktionaliteterna i de olika komponenterna.

Vad menas med one-way-dataflow?
Svar:
Det menas med att man bara kan föra över data från förälderkomponenten till barnkomponenten och inte tvärt om. Barnkomponenter kan inte ändra eller updatera datan av sig själva.

Hur kan man använda sig av konditionell rendering i React?
Svar:
Man kan använda sig av ternary operator, för att rendera fram saker, beroende på om påståendet är sant eller falskt. Som exempel kan det vara att man vill ha en text som säger, välkommen Niklas, om inloggningen lyckas.

Vad menas med en återanvändbar komponent?
Svar:
Att man skapar en komponent som är designad för att kunna användas på flera olika ställen i applikationen, så att man slipper dubbelkod.

-------Vecka 2...

Vad är state i React?
Svar:
En komponents dator, det innefattar styling, data och logik. State är nuvarande läget för en komponent. Ett exempel är om man har en kopp kaffe. Statet är att kaffet är varmt, men efter ett tag, då ändras statet till kallt. Beroende på vad statet är så renderas komponenten på nytt, när statet väl uppdateras.

Vad är det för skillnad mellan state och props?
Svar:
En state hanterar datan i själva komponenten, medans props skickar datan vidare till andra komponenter. Med andra ord är state - internt, och props är externt.

Vad menas med en kontrollerad komponent i React?
Svar:
Att det är de komponenters state och beteenden hanteras av React-komponenter m.h.a. states.

Vad är en callback handler?
Svar:
En callback handler är en funktion som skickas som en prop, för att kunna användas i en annan komponent.

Vad menas med "lifting state up"?
Svar:
Det menas med att man lyfter upp statet högre upp i komponent-trädet så att flera barnkomponenter kan ta del av statet. Det finns tillfällen där flera komponenter behöver ta del av statet, då gör man detta.

Vad är syftet med useEffect-hook i React?
Vad är syftet kring den s.k dependency-arrayen i useEffect?

--------Vecka 3...

Vilka fördelar finns det med att använda NextJS? Nackdelar?
Vad menas med Routing? På vilket sätt löser NextJS Routing v.s "vanliga React"?
Vad menas med Reacts ekosystem? Nämn några viktiga bibliotek i Reacts ekosystem?
Vad är syftet med useContext? Vilket problem med props löser den?

-------Vecka 4....

Vad är Redux Toolkit?
När, i vilka situationer vill man använda Redux Toolkit?
