// VIsibility Toggle - render, constructor, handleToggleVisibility
// visibility -> false
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visible: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return{
        visible: !prevState.visible

      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visible ? "Hide Words" : "Show Words"}
        </button>
        <p>{this.state.visible && ("WORDS!")}</p>

      </div>
    );
  }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));