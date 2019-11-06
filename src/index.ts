document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  keySeqInit();

  // select the target node
  var target = document.body;

  // create an observer instance
  var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          console.log(mutation);
      });
  });

  // configuration of the observer:
  var config = { attributes: true, childList: true, characterData: true }

  // pass in the target node, as well as the observer options
  observer.observe(target, config);

  // later, you can stop observing
  // observer.disconnect();


  document.execCommand("defaultParagraphSeparator", false, "p");

  console.log('The Ultimate Note Taker is ready');
});

function keySeqInit() {
  let buffer: string = '';
  let lastKeyTime: number = Date.now();

  document.addEventListener('keydown', event => {
    const charList = 'abcdefghijklmnopqrstuvwxyz0123456789tabenterspace#/*_-[]{}().,<>+=';
    const key = event.key.toLowerCase();

    //whitelist keystrokes only
    if (charList.indexOf(key) === -1) return;

    const currentTime: number = Date.now();

    //one second margin between keystrokes
    if (currentTime - lastKeyTime > 1000) {
        buffer = '';
    }

    buffer += key;
    lastKeyTime = currentTime;

    console.log(buffer);
  });
}

