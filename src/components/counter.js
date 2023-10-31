import React, {Component, useState} from "react";

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    Increment() {
        // this.state.count = this.state.count + 1
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div>
                count - {this.state.count}
                </div>
                <button onClick={() => this.Increment()}>Increment</button>
            </div>
        )
    }
}


function MyApp() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    );
  }
  
  function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }
  

export default Counter;

export {MyApp, MyButton};