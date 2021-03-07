import { optionChooser } from './src/optionChooser';
const open = require('open');


(async () => {

    console.log("╔═╦╦══╦═╦╗╔╦══╗╔═╦╦═╦╦═╦══╗");
    console.log("║║║╠║║╣╔╣╚╝║╔╗║║║║║║║║╔╩╗╔╝");
    console.log("║║║╠║║╣╚╣╔╗║╠╣║║║║║║║║╚╗║║");
    console.log("╚╩═╩══╩═╩╝╚╩╝╚╝╚╩═╩╩═╩═╝╚╝");
    console.log("");
    console.log("Welcome to nicha-nnct-cli!\nPlease select login method.")
    const a = new optionChooser(["Sign in via your account(default)", "Sign in via personal token"], (index: number, name: string) => {
        console.log(name, "selected!");
        if(index === 0){
            console.log("Please open link below to login.\n");
            const link: string = "https://auth.nicha-nnct.com/";
            console.log(link);
            open(link);
        }
    })
})();