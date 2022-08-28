
import './portfolioList.scss';

const PortfolioList = ({id, title, active, setSelected}) => {
    var i=1;
    return ( <li 
        key={(new Date().getTime().toString()+ i++)}
    className={active ? "portfolioList active": "portfolioList"} 
    onClick={()=>setSelected(id)}>
            {title}
    </li> );
}
 
export default PortfolioList;