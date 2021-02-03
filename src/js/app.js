import CollapseWidget from './collapseWidget';

// eslint-disable-next-line no-console
console.log('Module started!');

const myWidget = new CollapseWidget({
  buttonText: 'Collapse',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
});

myWidget.bindToDOM();
