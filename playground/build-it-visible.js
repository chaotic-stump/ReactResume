// Visibility Toggle
let visible = false;

let toggleVisibility = () => {
  visible = !visible;
  renderVisibleToggle();
}

// Declare render container
const appRoot = document.getElementById('app');

const renderVisibleToggle = () => {
  const visibleTemplate = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visible ? "Hide Words" : "Show Words"}
      </button>
      <p>{visible && "WORDS!"}</p>

    </div>
  );
    
  ReactDOM.render(visibleTemplate, appRoot)
};

renderVisibleToggle();