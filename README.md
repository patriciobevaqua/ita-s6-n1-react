# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Tasca sprint 6. React

- Exercici 1
Com ja hem indicat, una aplicació amb React està composta de components, diguem que cada component és una peça del puzle, tenint aquests components un propòsit únic i obvi.

Pots crear tants components com vulguis, i sempre que ho consideris necessari, pots utilitzar un o diversos component dins d'un altre. 

Per exemple, si féssim una landing page amb React, dins del component principal (base de la web) podríem importar el component header, menú, formulari de contacte….

En aquest primer exercici, crearem un component que s'encarregarà de renderitzar una frase, i l’importarem i usarem en el component principal App.



Has de dur a terme els següents passos:

1. Crear la carpeta components.

2. Crear la carpeta escena dins de la carpeta components.

3. Dins de la carpeta escena implementarem el primer component. Per a això has de crear el fitxer Escena.js. Aquest primer component només ha de retornar el següent string:

"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"

4. Ja tenim el nostre primer component creat, però encara no es mostrarà la frase. Per a això farem servir el nostre flamant component Escena. En el return del component app has d'utilitzar el component Escena.



El resultat ha de ser:



Ajuda: En aquest enllaç tens un repàs de com crear i utilitzar el teu primer component en React ->Creando el primer componente reutilizable con React



- Exercici 2
GENIAL!, ja tens el primer component creat i funcionant. De moment només es mostra una frase, en aquest exercici farem que es mostrin totes les frases de la història. 

Per a això, has de dur a terme les següents tasques:

1. Llegirem les dades d'un arxiu JSON o JS, amb els textos de la història en el component App:

[
  "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
  "L'heroi va decidir travessar la porta que el portava a casa",
  "Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
]
2. S'ha de passar per props cadascun dels textos de la història al component Escena. (El component escena renderitzarà una sola línia de text).

3. Modificarem el component Escena per a mostrar totes les línies de text obtingudes del component pare App mitjançant props.



L’exercici hauria de quedar així:

Captura joc història

- Exercici 3
És moment d'aplicar estils al nostre component Escena. Has de maquetar aquest component utilitzant styled-components:




- Exercici 4
Mostrarem totes les línies de l’aplicació, però ressaltarem només una de cada vegada, que anirà canviant a mesura que premem els botons d’avançar o retrocedir:

