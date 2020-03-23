import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ['aa']
  };

/*
  CICLO DE VIDA
*/

//Executado assim que o componente aparece em tela
componentDidMount(){
  console.log('inn');
}

//Executado sempre que houver alterações na props ou state
componentDidUpdate(_, prevState){

  console.log('mudou');
  console.log(prevState.techs + "  -  " + this.state.techs);
if(prevState.techs !== this.state.techs){
  localStorage.setItem('techs', JSON.stringify(this.state.techs));
}

  
}

//Executado quando o componente deixa de existir
componentWillUnmount(){

}

  handleInputChange = e => {
     console.log(e.target.value);
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">ENVIAR</button>
      </form>
    );
  }
}

export default TechList;
