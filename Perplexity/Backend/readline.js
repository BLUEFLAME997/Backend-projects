import readline from 'readline';

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question("What is your name? ",(read)=>{
  console.log(`Hello ${read}`)
  rl.close();
})