
import './portfolioList.scss';
import {useNavigate} from "react";

const PortfolioList = ({id, title,link, active, setSelected}) => {
    var i=1;
    return ( <li 
        key={(new Date().getTime().toString()+ i++)}
    className={active ? "portfolioList active": "portfolioList"} 
    onTouchMove={()=>setSelected(id)}>
            {title}
    </li> );
}
 
export default PortfolioList;