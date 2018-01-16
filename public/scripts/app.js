'use strict';

console.log('App.js is running!');

// JSX = JavaScript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options.length > 0 ? "Here are your options" : "No options",
  React.createElement(
    'p',
    null,
    app.options.length
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  ),
  React.createElement(
    'form',
    { onSubmit: onFormSubmit },
    React.createElement('input', { type: 'text', name: 'option' }),
    React.createElement(
      'button',
      null,
      'Add Option'
    )
  )
);
// Create "Remove All" button above list
// on click -> wipe the array -> rerender
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    app.options.length > 0 ? "Here are your options" : "No options",
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item One'
      ),
      React.createElement(
        'li',
        null,
        'Item Two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
