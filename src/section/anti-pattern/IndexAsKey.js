import React, { useEffect } from "react";

const ToDo = (props) => {
  useEffect(() => {
    console.log("Simulate DidMount!");
  }, []);

  return (
    <tbody>
      <tr>
        <td>
          <label>{props.id}</label>
        </td>
        <td>
          <input />
        </td>
        <td>
          <label>{props.createdAt.toTimeString()}</label>
        </td>
      </tr>
    </tbody>
  );
};

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const todoCounter = 1;
    this.state = {
      todoCounter: todoCounter,
      list: [
        {
          id: todoCounter,
          createdAt: date,
        },
      ],
    };
  }

  sortByEarliest() {
    const sortedList = this.state.list.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }

  sortByLatest() {
    const sortedList = this.state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }

  addToEnd() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [...this.state.list, { id: nextId, createdAt: date }];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }

  addToStart() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [{ id: nextId, createdAt: date }, ...this.state.list];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }

  render() {
    return (
      <div>
        <code>key=index</code>
        <br />
        <button onClick={this.addToStart.bind(this)}>Add New to Start</button>
        <button onClick={this.addToEnd.bind(this)}>Add New to End</button>
        <button onClick={this.sortByEarliest.bind(this)}>
          Sort by Earliest
        </button>
        <button onClick={this.sortByLatest.bind(this)}>Sort by Latest</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th />
              <th>created at</th>
            </tr>
          </thead>
          {this.state.list.map((todo, index) => (
            // - ควรใช่ uniq key เพราะ React จะใช้ key ในการเปรียบเทียบ current tree กับ new tree
            // - มักจะเกิดกับ uncontrol input (mutate DOM ตรงๆ) เพราะค่ายังไม่ได้จะถูกเก็บไปใน state
            <ToDo key={index} {...todo} />

            // - ค่าจะหายหมด เพราะ key จะถูกเปลี่ยนใหม่ เมื่อทีการ rerender React จึงสร้าง node ใหม่ขึ้นมาเลย
            // <ToDo key={Math.random()} {...todo} />

            // Key ต้อง unique, stable, predictable
            // <ToDo key={todo.id} {...todo} />
          ))}
        </table>
      </div>
    );
  }
}

export default ToDoList;
