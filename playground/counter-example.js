class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // Set default state object
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    //  NO !!
    // this.state.count = this.state.count + 1;
    console.log(this.state);
    
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    console.log(this.state);

    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    console.log(this.state);
    
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>        
      </div>
    );
  }
}




ReactDOM.render(<Counter />, document.getElementById('app'));