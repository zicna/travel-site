import '../styles/styles.css';
import Person from './modules/Person';

if (module.hot) {
    module.hot.accept()
}

/*lesson example code below this line */



// let john = {
//  name: "John Doe",
//  favoriteColor: "blue",
//  greet: function() {
//      console.log("Hello my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//  }
// }

// john.greet();
class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owns zero taxes.");
    }

}

let john = new Person("John Doe", "purple");
john.greet();

let jane = new Adult("Jane Doe", "red");
jane.greet();
jane.payTaxes();


// person(John.name, John.favoriteColor);
// person ("Jane Smith", "green");
