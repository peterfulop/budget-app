Specifikáció

Készíts egy böngészőben futtatható webes kiadás-bevétel kezelő alkalmazást, amelynek az alábbi funkciói vannak:

- Az alkalmazás legyen reszponzív a kapott design szerint
  - Nem várunk pixelpontos megoldást, de az app hozza a design szerinti layout-ot
- Az alkalmazás tudja listázni a kiadásokat és bevételeket
  - Az “Expenses” gombra kattintva csak a kiadásokat listázza
  - Az “Incomes” gombra kattintva csak a bevételeket listázza
  - Az “All” gomba kattintva az összes tételt listázza
  - Jelezze az aktív state-et
- A “Type to search” mezőbe gépelve reaktívan szűrje a listát
- A “Cash flow” form-ban a tételeknek lehessen megadni nevet és összeget
  - A mezők validáltak legyenek
    - Mindkét mező kötelező
    - Az összeg mező csak egész számot fogadjon el
    - A hibás mező üzenete dobjon fel egy natív alert dialog-ot
- Új bevételi tételt az Income gombot megnyomva adhatunk hozzá
  - Új bevételi tétel esetén növekedjen a “Budget” összege
  - A tétel kerüljön az Income listába
  - A tételt mentsd le adatbázisba
- Új kiadási tételt az Expense gombot megnyomva adhatunk hozzá
  - Új kiadási tétel esetén csökkenjen a “Remaining“ összege
  - Új kiadási tétel esetén növekedjen a “Spent so far” összege
  - A tétel kerüljön az Expense listába
  - A tételt mentsd le adatbázisba
- A “Most expensive action ever” blokkban mindig a valaha történt legnagyobb költés kerüljön kimutatásra
  - Jelenjen meg a tétel neve és az összeg is
- A tétel neve melletti × gombra kattintva törölje az aktuális tételt

Extra pontért

- Számold ki hány százaléka a kiadás a bevételednek.
- Jelenítst meg a három értéket (Budget, Remaining, Spent so far) egy pie charton.
- A legmagasabb költés helyett irasd ki a top 3 kiadást és bevételt

Követelmények

- Git linket várunk vissza
- ES6
- React.js
- Tailwind
- Node.js
- Express
- MySQL

Az alábbiakkal kiváltható vagy bővíthető a fenti stack.

Frontend opciók

- Typescript
- Vue.js
- HTML5 / CSS3
- Bootstrap 4+
- Next.js
- Reactstrap
- Material UI
- Formik
- Final Form
- Yup
- Chart.js
- Redux Toolkit / RTK Query

Backend opciók

- Postgres
- Nest.js
- Firebase
- Supabase
