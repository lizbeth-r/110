import { useState } from 'react';
import "./Contact.css";

function Contact() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleContact(e) {
        const text = e.target.value;
        const name = e.target.name;

        const copy = { ...contact };
        copy[name] = text;
        setContact(copy);
    }

    function send() {
        console.log(contact)
    }

    return (
        <div className="contact page">
            <h1>Contact Us!!</h1>
            <div className="form">
                <h3>Have a Question?</h3>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name:</label>
                    <input type="text" class="form-control" placeholder="" onBlur={handleContact} name="name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Email:</label>
                    <input type="email" class="form-control" placeholder="" onBlur={handleContact} name="email" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                    <textarea type="message" class="form-control" placeholder="" onBlur={handleContact} name="message" />
                </div>
                <div className="controls">
                    <button className="btn btn-outline-dark" rows="5" onClick={send}>Send a message</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;