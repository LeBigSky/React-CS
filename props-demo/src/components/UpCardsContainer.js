import React from "react"
import Article from "./Article";
import data from "../assets/data/data.json"
import '../css/Upcards.css'


class Upcards extends React.Component{

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
    console.log(this.currentpage)
        return (
            <section id="Upcard">
                <div className="container">
                    {
                        this.props.time.day=="week" &&
                        <div className="articles">
                        <Article titre={Title[0]} class="work article" datatime= {weekly[0]} previous={previous[0]}/> 
                        <Article titre={Title[1]} class="play article" datatime= {weekly[1]} previous={previous[1]}/>
                        <Article titre={Title[2]} class="study article" datatime= {weekly[2]} previous={previous[2]}/>
                        </div>
                    }
                    {
                        this.props.time.day =="day" &&
                        <div className="articles">
                        <Article titre={Title[0]} class="work article" datatime= {daily[0]} previous={previousD[0]}/> 
                        <Article titre={Title[1]} class="play article" datatime= {daily[1]} previous={previousD[1]}/>
                        <Article titre={Title[2]} class="study article" datatime= {daily[2]} previous={previousD[2]}/>
                        </div>
                    }
                    {
                        this.props.time.day =="month" &&
                        <div className="articles">
                        <Article titre={Title[0]} class="work article" datatime= {monthly[0]} previous={previousM[0]}/> 
                        <Article titre={Title[1]} class="play article" datatime= {monthly[1]} previous={previousM[1]}/>
                        <Article titre={Title[2]} class="study article" datatime= {monthly[2]} previous={previousM[2]}/>
                        </div>
                    }
                </div>
            </section>
        )
    }
}

export default Upcards