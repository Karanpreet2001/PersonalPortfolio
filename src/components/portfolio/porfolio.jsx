import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss";

import {featuredPortfolio, webPortfolio, mobilePortfolio, htmlPortfolio} from "../../data.js";

const Portfolio = () => {


    var i=0;
    const [selected, setSelected]= useState("featured");
    const [data, setData]= useState();
    const list=[
        {
            id:"featured",
            title:"Featured"
        },
        { 
            id:"web",
        title:"MERN or Web Apps"
        },
        {
            id:"mobile",
            title:"Mobile App"
        },{
            id:"html",
            title:"HTML,CSS,JS"

        }
    ];


    console.log(data);
    

    useEffect(()=>{

        switch(selected){
            case "featured": setData(featuredPortfolio);
            break;
            case "web": setData(webPortfolio);
            break;
            case "mobile": setData(mobilePortfolio);
            break;
            case "html": setData(htmlPortfolio);
            break;
            default:setData(featuredPortfolio);
            
        }

        

    },[selected]);

    return ( <div className="portfolio" id='portfolio'>

        <h1>Portfolio</h1>
        <ul>
           {list.map(item=>(<PortfolioList title={item.title}  
           active={selected===item.id} 
           setSelected={setSelected} 
           
           id={item.id}/>))}
        </ul>
        <div className="container">

            {data?.map(d=>(
            <div className="item" key= { (new Date().getTime().toString()+ i++)}>
                {console.log(new Date().getTime().toString()+ i++)}
                <img src={d.img} alt=""/>
                <h3>{d.title}</h3>
            </div>
            

            ))}

           
        </div>
    </div> );
}
 
export default Portfolio;