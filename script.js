console.log('Hello!');

let model = {};

let view = {
  testButton: document.querySelector('#testButton'),
  init: function () {
    view.testButton.addEventListener('click', (evt) => {
      console.log('click testButtonll');
      changeHistroy();
    });
  },
};

function changeHistroy() {
  //only change url not reload
  const stateObj = { foo: 'bar' };
  history.pushState(stateObj, '', 'test1');
}

view.init();
