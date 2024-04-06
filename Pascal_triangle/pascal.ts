#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function Pascals_triangle(num:number) 
{
    let p = 1
    console.log(chalk.greenBright(p,"\n"))
    for (var i = 1; i <= num; i ++)
        {         
            process.stdout.write(chalk.greenBright(p + " "));
            for (var j = 0; j < i; j ++)
            {
                p = p * (i - j) / (j + 1)
                process.stdout.write(chalk.greenBright(p + ' '));
            }
        console.log("\n")  
        }    
}

let answer = await inquirer.prompt([
    {
        message:"Enter any number to areate Floyd's Triangle",
        name:"Number",
        type:"input"
    },
])

const num = parseInt(answer.Number)

if (isNaN(num) || num < 1)
{
    console.log("Wrong input: Try Again")
}
else
{
    console.log(chalk.yellowBright("\t GENERATING PASCAL'S TRIANGLE"))
    await Pascals_triangle(num)
}