import "./contact.scss";
import emailjs from '@emailjs/browser';

import {useState, useRef} from 'react';

const Contact = () => {

    const formRef= useRef();

    const [message, setMessage]= useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();

        
        emailjs.sendForm('service_jha010k', 'template_jz0hq1g', formRef.current, '9lPWEp9oVSVr_5gp5')
        .then((result) => {
            console.log(result.text);
            setMessage('Thanks, I will reply ASAP :)');
        }, (error) => {
            console.log(error.text);
        });
        
    }

    return ( <div className="contact" id="contact">


<div className="left">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.6711436707296!2d-123.1170211!3d49.2257635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867464ef2222b9%3A0xda0295992624e5bb!2s6537%20Cambie%20St%2C%20Vancouver%2C%20BC%20V6P%203G9!5e0!3m2!1sen!2sca!4v1651061020137!5m2!1sen!2sca" width="600" height="450"></iframe> 
</div>
<div className="right">
    <h2>Contact</h2>
    <form ref={formRef} onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" name="user_name"/>
    <input type="text" placeholder="Subject" name="user_subject"/>
        <input type="text" placeholder="Email" name="user_email"/>
        <textarea placeholder="Message" name="message"></textarea>
        <button type="Submit">Send</button>
        <h3>{message}</h3>
    </form>


</div>
    </div> );
}
 
export default Contact;