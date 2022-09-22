import React from "react"
import data from '../assets/data/data.json'
import Article from "./Article";


class Downcards extends React.Component{
    nombreArticles = "3";
    render() {
       let Title = data.map( element => {
                return( <div>{ element.timeframes.daily.current }</div>)
        }) 
        let weekly = data.map(element => {
            return( <div>{ element.timeframes.weekly.current }</div>)
    } )
        let previous = data.map(element => {
            return( <div>Last Week { element.timeframes.weekly.previous }</div>)
    } )
    
        return (
            <section id="Upcard">
                <div className="container">
                    {
                        this.nombreArticles >= 3 &&
                        <div>
                            <Article titre="Work" class="exercise" datatime= {weekly[3]} previous={previous[3]}/>
                            <Article titre="Play" class="social" datatime= {weekly[4]} previous={previous[4]}/>
                            <Article titre="Study" class="selfcare" datatime= {weekly[5]} previous={previous[5]}/>
                        </div>
                    }
                    {
                        this.nombreArticles < 3 &&
                        <h1>Il n'y a pas d'articles </h1>
                    }

                </div>
            </section>
        )
    }
}

export default Downcards