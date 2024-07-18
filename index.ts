
import inquirer from "inquirer";

const userAns = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words:"
    }
]);


const words = userAns.sentence.split(/\s+/).filter(Boolean);
const wordCount = words.length;

console.log(`Word count: ${wordCount}`);



