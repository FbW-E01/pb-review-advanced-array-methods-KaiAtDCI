var persons = [
    { number: 0, name: 'Albert', url: 'http://albert.de' },
    { number: 1, name: 'Babsi', url: 'babsi.com' },
    { number: 2, name: 'Zahphod', url: 'zaphod.org' },
    { number: 3, name: 'Xenia', url: 'Xenias-page.de' },
    { number: 4, name: 'Rocket', url: 'rocket.de' },
];
console.log(persons);
// 2. Then based on the array, create a new array that contains just the names.
var names = persons.map(function (person) { return person.name; });
console.log(names);
// 3. Go through the array and check each individual URL property - if the URL starts with "http",
//    print the URL. Otherwise, print "Invalid URL for" and the value of the name property.
persons.forEach(function (person, index) {
    if (String(person.url.toLowerCase()).startsWith('http'))
        console.log(index + ") " + person.url);
    else
        console.log(index + ") Invalid URL for " + person.name);
});
// 4. Sort the array based on the "number" property to a random order.
var randomlySortedPersons = persons.sort(function () { return Math.random() - 0.5; });
console.log(randomlySortedPersons);
// 5. Sort the array based on the "number" property, with the lowest number first.
var ascendingSortedPersons = persons.sort(function (a, b) { return a.number - b.number; });
console.log(ascendingSortedPersons);
// 6. Sort the array based on the "number" property, with the highest number first.
var descendingSortedPersons = persons.sort(function (a, b) { return b.number - a.number; });
console.log(descendingSortedPersons);
// 7. Based on the array, create a string with all of the names of the people in the array separated
// by a comma and then replace the last comma with the string " and ".
var joinedPersons = '';
persons.forEach(function (entry, index, arr) {
    if (index < arr.length - 1)
        joinedPersons += entry.name + ',';
    else
        joinedPersons += entry.name + '.';
});
console.log(joinedPersons);
