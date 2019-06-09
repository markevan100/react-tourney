import React, { Component } from 'react';
import Match from './Match/Match';
import './App.css';

class App extends Component {
  state = {
    Rnd1: [
      ["RastaModak",
      "TeamTomo"],
      ["Kirby",
      "JackKevbo"],
      ["TakeOnTwo",
      "Tomo&AC"],
      ["SavQuinne",
      "KatieJeff"]
    ],
    Rnd2One: [],
    Rnd2Two: []
  }

  teamWinsHandler = (index, team) => {
    console.log(index, team)
    const RndTwoOne = [...this.state.Rnd2One];
    const Rnd2Two = [...this.state.Rnd2Two];
    const teamName = this.state.Rnd1[index][team]
    if (index <= 1) {
      RndTwoOne.push(teamName);
      this.setState({Rnd2One: RndTwoOne});
    } else {
      Rnd2Two.push(teamName);
      this.setState({Rnd2Two: Rnd2Two});
    }
  }


  render() {

  let matches = (
    <div className="RoundOne">
      {this.state.Rnd1
        .map((match, index) => {
          return <Match
            team1={match[0]}
            team2={match[1]}
            click0={() => this.teamWinsHandler(index, 0)}
            click1={() => this.teamWinsHandler(index, 1)}/>
      })}
    </div>
  );

    return (
      <div className="App">
        <body className="App-body">

          <h1 className="App-title">Spikeball Bracket: June 9th</h1>
          {matches}

          <div className="RoundTwo">
            <Match
              team1={this.state.Rnd2One[0]}
              team2={this.state.Rnd2One[1]}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Match
              team1={this.state.Rnd2Two[0]}
              team2={this.state.Rnd2Two[1]}/>
          </div>
          <div className="RoundThree">
            <Match />
          </div>


        </body>

      </div>
    );
  }
}

export default App;
