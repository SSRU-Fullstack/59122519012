for (let i = 0; i < 10; i++) {
    console.log("Hello World "+(i+1))
}
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

rl.on('line', (input) => {
    console.log(`Received: ${input}`);
    rl.close();
  });

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
})
