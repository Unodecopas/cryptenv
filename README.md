# CRYPTENV

## Description

Script to encrypt/decrypt .env files of projects with node.

This way you will never forget what values you set in your project.

Generate an envCrypt file with all variables encrypted with a secret word that you can define in the script.

## Installation

Clone the repository

    git@github.com:Unodecopas/cryptenv.git

Install the dependencies with your favourite manager

    pnpm i
    npm i
    yarn

**ROOT WAY**

Put your file .env or envCrypt in this root folder and type in terminal

    pnpm start -c //to encrypt .env file
    pnpm start -d //to decrypt envCrypt file

The script will generate the file corresponding to the chosen option.

**ALIAS WAY**

Create an alias in your terminal like

    alias cryptenv='node C:\\Users\\jesus\\pruebas\\envs\\index.js'

And just run the alias in the folder of your choice

    cd my_project_folder
    cryptenv -c //to encrypt .env file
    cryptenv -d //to decrypt envCrypt file
