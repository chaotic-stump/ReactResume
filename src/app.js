console.log('App.js is running!');
// if statements
// ternary operators
// logical and operators


// JSX = JavaScript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
    <li>Item One</li>
    <li>Item Two</li>
    </ol>
  </div>
);

var user = {
  name: "Sean",
  age: 30,
  location: "Arlington, VA"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);