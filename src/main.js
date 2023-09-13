import string from "./workCss.js";

const showWorks = {
  codeLen: string.length,
  n: 0,
  time: 10,
  intervalId: undefined,
  running: true,
  worksCSS: document.querySelector("#worksCSS"),
  worksCodeArea: document.querySelector("#showWorksCode>.worksCodeArea"),
};

showWorks.reStart = function () {
  showWorks.n = 0;
  showWorks.start();
};

showWorks.start = function () {
  clearInterval(showWorks.intervalId);
  showWorks.intervalId = setInterval(() => {
    if (showWorks.n <= showWorks.codeLen) {
      const tempCode = string.substring(0, showWorks.n++);
      showWorks.worksCSS.innerHTML = tempCode;
      showWorks.worksCodeArea.innerText = tempCode;
      showWorks.worksCodeArea.scrollTop = showWorks.worksCodeArea.scrollHeight;
    } else {
      clearInterval(showWorks.intervalId);
    }
  }, showWorks.time);
  showWorks.resBtnState(true, "暂停");
};

showWorks.pause = function () {
  clearInterval(showWorks.intervalId);
  showWorks.resBtnState(false, "继续");
};

showWorks.resBtnState = function (state, text) {
  showWorks.running = state;
  document.querySelector("#worksButtons>.startOrStop").innerText = text;
};

showWorks.startOrStop = function () {
  if (showWorks.running) {
    showWorks.pause();
  } else {
    showWorks.start();
  }
};

showWorks.tooFast = function () {
  showWorks.time = 0;
  showWorks.start();
};

showWorks.fast = function () {
  showWorks.time = 10;
  showWorks.start();
};

showWorks.normal = function () {
  showWorks.time = 30;
  showWorks.start();
};

showWorks.slow = function () {
  showWorks.time = 60;
  showWorks.start();
};

showWorks.btnBind = function () {
  const hashMap = ["reStart", "startOrStop", "tooFast", "fast", "normal", "slow"];
  for (let btn in hashMap) {
    document.querySelector(`#worksButtons>.${hashMap[btn]}`).onclick = showWorks[hashMap[btn]];
  }
};

showWorks.btnBind();
showWorks.start();
