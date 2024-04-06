#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function Floyd (num:number)
{  
    for (var i = 1; i <= num; i ++)
    {
        for (var j = 1; j < i + 1; j ++)
        {
            let p = i * (i - 1) / 2 + j
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
    console.log(chalk.yellowBright("\t GENERATING FLOYD'S TRIANGLE"))
    await Floyd(num)
}
