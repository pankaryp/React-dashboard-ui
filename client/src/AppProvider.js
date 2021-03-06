import React, { Component } from 'react';

// Create Context (store)
export const AppContext = React.createContext();

// Create AppProvider
export default class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kg:0,
            date:"",
            quotes: [
                "Sleep. Work. Train. Repeat.",
                "Pain is temporary, pride is forever",
                "When my body shouts ‘STOP’, my mind screams ‘NEVER’",
                "Train like a beast, look like a beauty"
            ],
            pickedQuote: ""
        };
    }

        componentDidMount() {
            // Fetch latest weight
            fetch('http://localhost:5000/api/weights/last')
              .then(res => {
                  console.log(res);
                  return res.json()
                })
                // Response from the server with the latest weight
              .then(latestWeight => { 
                if(latestWeight[0].kg==='undefined') {
                    console.log('no weight to show')
                } else {
                    //update the state with the current weight
                    this.setState(() => {
                        return {
                            kg: latestWeight[0].kg,
                            date: latestWeight[0].date
                        }
                    });
                }   
            })
            .catch(() => console.log("Cant access server due to broswer!"));

            // Pick a random quote
            let randomQuote = Math.floor(Math.random() * 5);
            this.setState(() => {
                return {
                    pickedQuote: this.state.quotes[randomQuote]
                }
            });
        }
    
    // Set value as the state of the context
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
