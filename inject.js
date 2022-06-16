window.addEventListener('error', (event) => {
  console.error(event);
})

function typeErrorGenerator() {
  const obj = Object.create({});

  Object.defineProperty(obj, "takeitboi", {value: "hmm"});

  Object.defineProperty(obj, "takeitboi", {value: "assa"});
}

typeErrorGenerator();
