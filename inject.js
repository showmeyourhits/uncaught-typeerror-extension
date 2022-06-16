function addscript() {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('./error-script.js');

  document.head.appendChild(script);
}

addscript();