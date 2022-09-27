import React from "react"
import data from '../assets/data/data.json'
import Article from "./Article";
import '../css/Article.css'



class Downcards extends React.Component{
    render() {
    let Title = data.map( element => {
                return( <div>{ element.title }</div>)
        }) 

        let weekly = data.map(element => {
            return( <div>{ element.timeframes.weekly.current }</div>)
    } )
        let previous = data.map(element => {
            return( <div>Last Week - { element.timeframes.weekly.previous }hrs</div>)
    } )
        let daily = data.map(element => {
            return( <div>{ element.timeframes.daily.current }</div>)
        })
        let previousD = data.map(element => {
            return( <div>Last Day - { element.timeframes.daily.previous }hrs</div>)
    } )
    let monthly = data.map(element => {
        return( <div>{ element.timeframes.monthly.current }</div>)
    })
    let previousM = data.map(element => {
        return( <div>Last Month - { element.timeframes.monthly.previous }hrs</div>)
} )
console.log(this.props.time.day)
        return (
            <section id="Upcard">
                <div className="container">
                    {
                        this.props.time.day== "week" &&
                        <div className="articles">
                            <Article titre={Title[3]} class="exercise article" datatime= {weekly[3]} previous={previous[3]}/>
                            <Article titre={Title[4]} class="social article" datatime= {weekly[4]} previous={previous[4]}/>
                            <Article titre={Title[5]} class="selfcare article" datatime= {weekly[5]} previous={previous[5]}/>
                        </div>
                    }
                    {
                        this.props.time.day=="day" &&
                        <div className="articles">
                        <Article titre={Title[3]} class="exercise article" datatime= {daily[3]} previous={previousD[3]}/>
                        <Article titre={Title[4]} class="social article" datatime= {daily[4]} previous={previousD[4]}/>
                        <Article titre={Title[5]} class="selfcare article" datatime= {daily[5]} previous={previousD[5]}/>
                    </div>
                    }
                    {
                        this.props.time.day=="month" &&
                        <div className="articles">
                        <Article titre={Title[3]} class="exercise article" datatime= {monthly[3]} previous={previousM[3]}/>
                        <Article titre={Title[4]} class="social article" datatime= {monthly[4]} previous={previousM[4]}/>
                        <Article titre={Title[5]} class="selfcare article" datatime= {monthly[5]} previous={previousM[5]}/>
                    </div>
                    }

                </div>
            </section>
        )
    }
}

export default Downcards