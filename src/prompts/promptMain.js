import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta (1 - Gerador de QR Code ou 2 - Gerador de Senhas)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Escolha apenas entre 1 ou 2"),
        require: true
    },
];

export default mainPrompt;