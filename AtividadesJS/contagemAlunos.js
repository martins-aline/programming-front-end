let alunos = 15;

for (let i = 0; i <= alunos; i++) {
  if (i == 0) {
    console.log(`Zero: ${i}`);
  } else if (i % 2 == 0) {
    console.log(`${i}: Esse é um número par.`);
  } else {
    console.log(`${i}: Esse é um número Ímpar.`);
  }
}
