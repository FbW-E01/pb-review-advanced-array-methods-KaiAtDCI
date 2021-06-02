// 1 Create an array with 10 objects, each of them should have a "name" property and
// a "URL" property and a "number" property.
interface Person {
    number: number;
    name: string;
    url: string;
}
const persons : Person[] = [
    { number: 0, name: 'Albert', url: 'http://albert.de' },
    { number: 1, name: 'Babsi', url: 'babsi.com' },
    { number: 2, name: 'Zahphod', url: 'zaphod.org' },
    { number: 3, name: 'Xenia', url: 'Xenias-page.de' },
    { number: 4, name: 'Rocket', url: 'rocket.de' },
];
console.log(persons);

// 2. Then based on the array, create a new array that contains just the names.
const names : string[] = persons.map(person => person.name);
console.log(names);

// 3. Go through the array and check each individual URL property - if the URL starts with "http",
//    print the URL. Otherwise, print "Invalid URL for" and the value of the name property.
persons.forEach((person : Person, index : number) => {
    if (String(person.url.toLowerCase()).startsWith('http')) console.log(`${index}) ${person.url}`);
    else console.log(`${index}) Invalid URL for ${person.name}`);
});

// 4. Sort the array based on the "number" property to a random order.
console.log(persons.sort(() => Math.random() - 0.5));

// 5. Sort the array based on the "number" property, with the lowest number first.
console.log(persons.sort((a : Person, b : Person) => a.number - b.number));

// 6. Sort the array based on the "number" property, with the highest number first.
console.log(persons.sort((a : Person, b : Person) => b.number - a.number));

// 7. Based on the array, create a string with all of the names of the people in the array separated
// by a comma and then replace the last comma with the string " and ".
let joinedPersons : String = '';
persons.forEach((entry, index, arr) => {
    if (index < arr.length - 1) joinedPersons += entry.name + ','
    else joinedPersons += entry.name + '.'
})
console.log(joinedPersons);