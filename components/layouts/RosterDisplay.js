import React from "react";
import router from "next/router";
import CovidCount from "./CovidCount";
import CovidGraphic from "../../images/covid.jpeg";
import Image from "next/image";

class RosterDisplay extends React.Component {
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
    markClear(name){
        console.log('clear')
        fetch('http://localhost:3000/api/student/mark_clear?class=Test&student=' + name)
        .then(response => response.json())
        .then(data => this.setState({ classRoster: data['Students']}));
        fetch('http://localhost:3000/api/class/get_roster?class_id=Test')
            .then(response => response.json())
            .then(data => this.setState({ classRoster: data['Students']
    }));
    }
    markExposure(name){
        console.log('exp')
        fetch('http://localhost:3000/api/student/mark_exposed?class=Test&student=' + name)
        .then(response => response.json())
        .then(data => this.setState({ classRoster: data['Students']}));
        fetch('http://localhost:3000/api/class/get_roster?class_id=Test')
            .then(response => response.json())
            .then(data => this.setState({ classRoster: data['Students']
        }));
    }
    markPositive(name){
        console.log('pos')
        fetch('http://localhost:3000/api/student/mark_covid?class=Test&student=' + name)
        .then(response => response.json())
        .then(data => this.setState({ classRoster: data['Students']}));
        fetch('http://localhost:3000/api/class/get_roster?class_id=Test')
            .then(response => response.json())
            .then(data => this.setState({ classRoster: data['Students']
        }));
    }
    // saveNote(name){
    //     console.log('note')
    //     fetch('http://localhost:3000/api/student/mark_covid?class=Test&student=' + name)
    //     .then(response => response.json())
    //     .then(data => this.setState({ classRoster: data['Students']}));
    // }
    handleInput = event => {
        this.setState({ name: event.target.value });
    };
    
    logValue(name){
        console.log('log')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
				Note: this.state.name
			}),
        };
        console.log(requestOptions)
        fetch('http://localhost:3000/api/student/note?class=Test&student=' + name, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        fetch('http://localhost:3000/api/class/get_roster?class_id=Test')
            .then(response => response.json())
            .then(data => this.setState({ classRoster: data['Students']
        }));
    }

  render() {
      const classRoster = this.state.classRoster;
      console.log(classRoster)
      var classes = ["Parson's Elementary 4th Grade"];
      let counter = 0;
      for (let i = 0; i < classRoster.length; i++){
          if (classRoster[i]['covid']){
              counter++;
          }
      }
      var covidCount = counter;
      return(
        <div>
        <div className="flex justify-between mt-8">
        <div className="flex">
            {classes.map((classIn) => (
                <p className="font-bold text-lg text-yellow-500 mr-8">{classIn}</p>
            ))}
        </div>
        <div className="flex">
            <p className="font-bold text-lg mr-2">{covidCount}</p>
            <Image alt="Gitlab" src={CovidGraphic} width={30} height={10}/>
        </div>
        </div>

        <p className="font-bold text-blue-500 mt-8">Class Roster</p>
        <hr className="mt-2"/>    
        <div>
            {classRoster.map((student) => (
                <div className="flex border-2">
                    <div className="border-2 w-1/4">
                        <p>{student.Name}</p>
                    </div>
                    <div className="border-2 w-3/4">
                        <div className="flex items-center">
                            <p className="mr-10">Notes: {student.Note}</p>
                            <input type="text" placeholder="Insert text here" onChange={this.handleInput}></input>
                            <button className="w-32 py-2 bg-blue-500"  onClick={() => this.logValue(student.Name)}>Save</button>
                        </div>
                    </div>
                    <div className="border-2 w-1/4">
                        {
                            student.covid ?
                                <div className="flex items-center">
                                    <button onClick={() => this.markClear(student.Name)} className="w-32 py-2 bg-blue-500">
                                        <p className="text-white">Mark Clear</p>
                                    </button>
                                    <p className="font-bold text-red-600 ml-2">Positive</p>
                                </div>
                                : student.exposed ?
                                    <div className="flex items-center">
                                        <button onClick={() => this.markPositive(student.Name)} className="w-32 py-2 bg-blue-500">
                                            <p className="text-white">Mark Positive</p>
                                        </button>
                                        <p className="font-bold text-orange-300 ml-2">Exposed</p>
                                </div>
                                :
                                <div className="flex items-center">
                                    <button onClick={() => this.markExposure(student.Name)} className="w-32 py-2 bg-blue-500">
                                        <p className="text-white">Mark Exposure</p>
                                    </button>
                                    <p className="font-bold text-blue-300 ml-2">Negative</p>
                                </div>
                                
                        }
                    </div>
                </div>
            ))}
        </div>
        </div>
      );
  }
};

export default RosterDisplay;
