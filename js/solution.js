// str of words seperated by dash/underscore
// str of words in camel case
// "the-stealth-warrior" => "theStealthWarrior" // "The_Stealth_Warrior" => "TheStealthWarrior" // "The_Stealth-Warrior" => "TheStealthWarrior"

function toCamelCase(str){
    let result = str.split('-').join('_').split('_')
    for(let i = 1; i < result.length; i++){
        result[i] = result[i][0].toUpperCase() + result[i].slice(1)
    }
    return result.join('');
}   

console.log(toCamelCase("the-stealth-warrior"), "theStealthWarrior")
console.log(toCamelCase("The_Stealth_Warrior"), "TheStealthWarrior")
console.log(toCamelCase("The_Stealth-Warrior"), "TheStealthWarrior")