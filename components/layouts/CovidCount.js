import React from "react";
import router from "next/router";
import CovidGraphic from "../../images/covid.jpeg";
import Image from "next/image";

class CovidCount extends React.Component {
    constructor(props) {   
        super(props);  
        this.state = {
            classRoster: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/api/class/get_roster?class_id=Test')
            .then(response => response.json())
            .then(data => this.setState({ classRoster: data['Students']
    }));
    }
  render() {
      const classRoster = this.state.classRoster;
      let counter = 0;
      for (let i = 0; i < classRoster.length; i++){
          if (classRoster[i]['covid']){
              counter++;
          }
      }
      var covidCount = counter;
      return(
        <div className="flex">
            <p className="font-bold text-lg mr-2">{covidCount}</p>
            <Image alt="Gitlab" src={CovidGraphic} width={30} height={10}/>
        </div>
      );
  }
};

export default CovidCount;
