const openLink = require('open');
const input = require('input');


(async () => {
    console.log("╔═╦╦══╦═╦╗╔╦══╗╔═╦╦═╦╦═╦══╗");
    console.log("║║║╠║║╣╔╣╚╝║╔╗║║║║║║║║╔╩╗╔╝");
    console.log("║║║╠║║╣╚╣╔╗║╠╣║║║║║║║║╚╗║║");
    console.log("╚╩═╩══╩═╩╝╚╩╝╚╝╚╩═╩╩═╩═╝╚╝");
    console.log("");

    console.log("    _   ______________  _____       _   ___   ______________");
    console.log("   / | / /  _/ ____/ / / /   |     / | / / | / / ____/_  __/");
    console.log("  /  |/ // // /   / /_/ / /| |    /  |/ /  |/ / /     / /   ");
    console.log(" / /|  // // /___/ __  / ___ |   / /|  / /|  / /___  / /    ");
    console.log("/_/ |_/___/\____/_/ /_/_/  |_|  /_/ |_/_/ |_/\____/ /_/     ");


    console.log("");
    console.log("Welcome to nicha-nnct-cli!");
    const option = await input.select("Please select login method.", [
        { name: "Sign in via your account (I'm sorry but not supported yet)", value: "account", disabled: true },
        { name: "Sign in via personal token", value: "token", default: true },
        { name: "Exit", value: "exit" }
    ]);

    console.log(option, "selected!");
    await ({
        account: () => {
            console.log("Please open link below to login.\n");
            const link: string = "https://auth.nicha-nnct.web.app/";
            console.log(link);
            openLink(link);
        },
        token: async () => {
            const link: string = "https://docs.nicha-nnct.web.app/auth/personal-token";
            console.log(`You can login via your token. Learm more: ${link}`);
            const token = input.password("Input token here: ")
        },
        exit: () => {
            process.exit(0);
        }
    })[option]();
})();