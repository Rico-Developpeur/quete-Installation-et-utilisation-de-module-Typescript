import { cpus } from "os";
import chalk from "chalk";

console.log(chalk.red(JSON.stringify(cpus())));
