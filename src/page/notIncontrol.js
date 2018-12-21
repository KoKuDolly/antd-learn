const MyInput = ({ value = '', onChange }) => (
  <input value={value} onChange={onChange} />
);

class Demo extends React.Component {
  state = {
    text: ''
  }
  onTextChange = (event) => {
    // console.log(event.target.value);
    this.setState({ text: event.target.value });
  }

  onTextReset = () => {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <MyInput value={this.state.text} onChange={this.onTextChange} />
        <button onClick={this.onTextReset}>Reset</button>
      </div>
    );
  }
}

export default Demo;
