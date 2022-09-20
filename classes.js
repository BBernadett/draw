class Person {
    constructor(fname, lname, born) {
        this.fname = fname;
        this.lname = lname;
        this.born = born
    }
    get FullName() {
        return this.lname + " " + this.fname;
    }
    get Age() {
        return (new Date()).getFullYear() - this.born;
    }
    createCard() {
        var div = `
        <h2>${this.FullName}</h2>
        <p><strong>Született:</strong>${this.born}</p>
        <p><strong>Kora:</strong>${this.Age} éves</p>
        <br>
        `;
        return div;
    }
}

var people = [];
people.push(new Person("Bernadett", "Balázs", 1990));
people.push(new Person("Tamás", "Bodnár", 1992));
people.push(new Person("Zsófi", "Sütő", 2015));

var div = '<section>';

for (var personName of people) div += personName.createCard();
div += '</section>';

console.log(personName.FullName);
console.log(personName.Age);
document.body.innerHTML = div;