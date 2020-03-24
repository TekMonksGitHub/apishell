/* 
 * shell.js, Runs local shell scripts or commands
 * 
 * (C) 2018 TekMonks. All rights reserved.
 */

const spawn = require("child_process").spawn;

exports.runShell = command => {
    return new Promise((resolve, reject) => {
        const shellProcess = spawn(command[0], command[1]);

        let stdOut = ""; let stdErr = "";

        shellProcess.stdout.on("data", data => {stdOut += String.fromCharCode.apply(null, data);});

        shellProcess.stderr.on("data", data => {stdErr += String.fromCharCode.apply(null, data);});

        shellProcess.on("exit", exitCode => {if (exitCode) reject({stdOut, stdErr}); else resolve({stdOut, stdErr});});
    });
}