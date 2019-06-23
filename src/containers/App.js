import React from 'react';
import Header from '../components/Header';
import FormApp from '../components/Form';
import Item from '../components/Item';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newTask: "",
      myTasks: [],
      error: ""
    }
  }

  NewTaskInput = (e) => {
    this.setState({
      newTask: e.target.value,
      error: ""
    })
  }

  AddTask = (e) => {
    e.preventDefault();
    if(this.state.newTask === ""){
      this.setState({
        error: true
      })
    }
    else{
      const list = [...this.state.myTasks, this.state.newTask];
      this.setState({
        myTasks: list,
        newTask: "",
      })
    }
  }

  RemoveTask = (index) => {
    this.setState({
      myTasks: [...this.state.myTasks.slice(0, index), this.state.myTasks.slice(index + 1)]
    })
  }

  render(){
    return (
      <div className="container">
        <Header title="Tasks" />
        <FormApp error={this.state.error} input={this.NewTaskInput} addTask={this.AddTask} value={this.state.newTask}/>
        <ul className="list-group mt-2">
            {this.state.myTasks.map((item, index) => 
              <Item key={index} removeTask={() => this.RemoveTask(index)} task={item}/>
            )}
          </ul>
      </div>
    );
  }
}
export default App;
