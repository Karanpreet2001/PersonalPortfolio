import "./testimonial.scss";

const Testimonial = () => {

    const data =[
        {
            id:1,
            name:"Sahil Sharma",
            icon:"https://www.dcrc.co/wp-content/uploads/2019/04/blank-head-profile-pic-for-a-man.jpg",
            desc:"Karanpreet is a critical member for the development of the android application. His coding performance was accurate on every task, and came up with great ideas. He is a responsible person with his tasks and creative person with his contributions."
        },
        {
            id:2,
            name:"Utkrash Singh",
            icon:"https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg",
            desc:"I know Karan is one of those rare developers who spend hours every single day after work or school trying to be better at creating software. He was highly productive while helping us develop an API for our college.He is also calm and kind guy.I enjoyed to work with him"
        },
        {
            id:3,
            name:"Chloe",
            icon:"https://cdn5.vectorstock.com/i/thumb-large/80/84/person-gray-photo-placeholder-woman-vector-22808084.jpg",
            desc:"During his time at Funpun Interview, Karan was very proactive and result-oriented. He was diligent and also picked up the capacity of his role in no time. His honesty and prompt Introspection bonded team unity. I was so lucky to work with him."
        }

    ];


    return ( <div className="testomonial" id='testimonial'>
        
        <h1>Past Project Member</h1>
        <div className="container">

            {data.map((p)=>(

           
            <div key={p.id} className="card">
                <div className="top">
                    <img src={p.icon} alt="" srcSet="" />
                </div>
                <div className="center"><b>{p.name}</b></div>
                <div className="bottom">{p.desc}</div>
            </div>
             ))}
        </div>

    </div> );
}
 
export default Testimonial;