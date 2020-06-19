function checkMagazine(note, magazine) {
return note.filter(w => magazine.indexOf(w) > -1 ? magazine.splice(magazine.indexOf(w), 1).length : 0).length === note.length ? 'Yes' : 'No';

}

let answer = checkMagazine("please give me water", "give me one water to go please");
console.log(answer);