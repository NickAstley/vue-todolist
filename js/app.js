/*
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item una “x”.
Cliccando su di essa, senza chiedere all’utente conferma, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale (sempre visibile) e un pulsante “aggiungi”.
Cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
che quindi viene aggiunto alla lista dei todo esistenti.
BONUS:
1 - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2 - cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

/*
Creo un array di oggetti. Ogni oggetto rappresenta un toDo e sarà formato da:
- text che ne indica il testo;
- done, che indica se è stato fatto o meno
*/
const toDoList = [
    {
        text : "Fare la spesa",
        done: false
    },
    {
        text : "Pulire la camera",
        done: true
    },
    {
        text : "Fare l'esercizio di Boolean",
        done: false
    },
    {
        text : "Dare da mangiare al gatto",
        done: true
    },
    {
        text : "Chiamare nonna",
        done: false
    }
];

// Avvio Vue
const appVue = new Vue({
    el : "#app",
    data : {
        // Metto nei data l'array
        toDoList : toDoList,
        // Metto nei data una variabile stringa che controlla il valore dell'input che serve per aggiungere una voce all'array
        toDoToAdd : ""
    },
    methods : {
        removeToDo(index) {
            // Rimuovo il toDo all'indice corrispondente a quello della X cliccata
            this.toDoList.splice(index, 1);
        },
        addToDo() {
            if (this.toDoToAdd.trim()) {
                // Se il campo input non è vuoto(o comunque composto da soli spazi), pusho un nuovo oggetto nell'array
                this.toDoList.push(
                    {
                        text : this.toDoToAdd,
                        done : false
                    }
                );
                // Resetto il campo input
                this.toDoToAdd="";
            }
        },
        completeToDo(index) {
            // Inverto il valore di done al click su un toDo
            if (!this.toDoList[index].done) {
                this.toDoList[index].done = true;
            } else if (this.toDoList[index].done) {
                this.toDoList[index].done = false;
            }
        }
    }
});