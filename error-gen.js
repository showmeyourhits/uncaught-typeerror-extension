// @ts-check
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('errbtn');

  btn.addEventListener('click', function handleErrBtnClick() {
    console.log('Generating error');

    typeErrorGenerator();

    console.log('This console log should not work');
  });
});

function typeErrorGenerator() {
  const obj = Object.create({});

  Object.defineProperty(obj, "takeitboi", {value: "hmm"});

  Object.defineProperty(obj, "takeitboi", {value: "assa"});
}

window.typeErrorGenerator = typeErrorGenerator;

console.log('start');
window.typeErrorGenerator();
console.log('end');