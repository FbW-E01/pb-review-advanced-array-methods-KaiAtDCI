// 1 Create an array with 10 objects, each of them should have a "name" property and
// a "URL" property and a "number" property.
const originalArray = [
    { number: 0, name: 'Albert', URL: 'http://albert.de' },
    { number: 1, name: 'Babsi', URL: 'babsi.com' },
    { number: 2, name: 'Zahphod', URL: 'zaphod.org' },
    { number: 3, name: 'Xenia', URL: 'Xenias-page.de' },
    { number: 4, name: 'Rocket', URL: 'rocket.de' },
];

// 2. Then based on the array, create a new array that contains just the names.
const namesArray = originalArray.map(entry => entry.name);
console.log(namesArray);

// 3. Go through the array and check each individual URL property - if the URL starts with "http",
//    print the URL. Otherwise, print "Invalid URL for" and the value of the name property.
originalArray.forEach((entry, index) => {
    if (entry.URL.toLowerCase().startsWith('http')) console.log(`${index}) ${entry.URL}`);
    else console.log(`${index}) Invalid URL for ${entry.name}`);
})

// 4. Sort the array based on the "number" property to a random order.
const randomSortedArray = originalArray.sort(() => Math.random() > 0.5);
console.log(randomSortedArray);

// 5. Sort the array based on the "number" property, with the lowest number first.
const numberSortedArray1 = originalArray.sort((a, b) => a.number > b.number);
console.log(numberSortedArray1);

// 6. Sort the array based on the "number" property, with the highest number first.
const numberSortedArray2 = originalArray.sort((a, b) => a.number < b.number);
console.log(numberSortedArray2);

// 7. Based on the array, create a string with all of the names of the people in the array separated
// by a comma and then replace the last comma with the string " and ".

let string = '';
originalArray.forEach((entry, index, arr) => {
    if (index < arr.length -1) string += entry.name + ','
    else string += entry.name + '.'
})
console.log(string);




