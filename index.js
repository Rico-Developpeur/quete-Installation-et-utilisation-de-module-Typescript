"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.red(JSON.stringify((0, os_1.cpus)())));
