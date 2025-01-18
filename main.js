const userName = prompt("Enter your name");
const surName = prompt("Enter your surname");
const userAge = prompt("Enter your Age");

const age = parseInt(userAge);


const objest = {
    ism: userName,
    surname: surName,
    age: age,
};

if (isNaN(age) || age <= 0) {
    alert("Please enter a valid age.");
} else {
    const newTag = document.createElement("h1");
    newTag.textContent = `Hello, ${objest.ism} ${objest.surname}! You are ${objest.age} years old.`;
    document.body.append(newTag);
}

