import React from "react"
import Article from "./Article";
import data from "../assets/data/data.json"
import '../css/Upcards.css'


class Upcards extends React.Component{
    currentpage= 'week'
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
                            <Article titre="Work" class="work" datatime= {weekly[0]} previous={previous[0]}/>
                            <Article titre="Play" class="play" datatime= {weekly[1]} previous={previous[1]}/>
                            <Article titre="Study" class="study" datatime= {weekly[2]} previous={previous[2]}/>
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


export default Upcards