import React from "react";

class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 0 };
  // }
  //constructor olmadan da aşağıdaki gibi state tanımlayabiliriz.
  state = { count: 0 };

  increase = () => this.setState({ count: this.state.count + 1 });
  decrease = () => this.setState({ count: this.state.count - 1 });
  hello = () => this.setState({ say: "Component Did Mounted" });

  componentDidMount() {
    console.log("Class Comp Mounted 2");
    this.increase(); //component render olduktan sonra DidMount çalıştı ve sayacı bir arttırdı.
    this.hello(); //aynı şekilde render olduktan sonra burası doğuyor.
    //sadece ilk oluşumda çalışır.
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Class Component Updated!!");
    console.log(prevState.count); //bi önceki state değerini tutar.
    prevState.count !== this.state.count &&
      console.log("Class Component Updated!!"); //state değişince clg olan kısmı çalıştır komutu.
  }

  render() {
    console.log("Class Comp Rendered 1");
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>count:{this.state.count}</h3>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <h3> Say : {this.state.say}</h3>
      </div>
    );
  }
}

export default ClassComponent;
