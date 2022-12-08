import React, { Component } from "react";
import axios from "axios";


class Puntos extends Component {constructor(props) {
  super(props);
  this.state = {
    viewCompleted: false,
    todoList: [],
    modal: false,
    value: '',

    activeItem: {
      title: "",
      description: "",
      completed: false,
    },
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
  this.refreshList();

}

refreshList = () => {
  axios
    .get("/api/ejemplo")
    .then((res) => this.setState({ todoList: res.data }))
    .catch((err) => console.log(err));
};


renderItems = () => {
  const newItems = this.state.todoList;
  console.log('newItems', newItems)
  return newItems.map((item) => (
    <li
      key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span
        className={`todo-title mr-2`}
        title={item.campo}
      >
        {item.campo}
      </span>

    </li>
  ));
};

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  // alert('A name was submitted: ' + this.state.value);
  var item = {
    "campo": this.state.value
  }
  axios
    .post("/api/ejemplo/", item)
    .then((res) => this.refreshList());

  event.preventDefault();
}

rendefForm = () => {
  return(
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

render() {
  return (
    <main className="container">
      <h1 className="text-uppercase text-center my-4">renderizando la data</h1>
      <div security="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <ul className="list-group list-group-flush border-top-0">
              {this.renderItems()}
            </ul>
          </div>
        </div>
      </div>
        {this.rendefForm()}
    </main>
  );
}
}

export default Puntos;