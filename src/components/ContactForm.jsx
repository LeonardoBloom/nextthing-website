import { useState } from 'react';

import './ContactForm.css';



const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // preform any action with the form data, like sending it to a server
        console.log(formData);
    };

    return (
        <>
            <div>
                <form className='contact-form-box' onSubmit={handleSubmit}>
                    <div className="name-input">
                        <h3>Name:</h3>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name} 
                            onChange={handleChange}
                            
                            required
                        />
                    </div>
                    <div className="email-input">
                        <h3>Email:</h3>
                        <input 
                            type="text" 
                            name="email"
                            value={formData.email} 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="tel-input">
                        <h3>Telefone:</h3>
                        <input 
                            type="text" 
                            name="telephone"
                            value={formData.telephone} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="msg-input">
                        <h3>Mensagem:</h3>
                        <textarea 
                            type="text" 
                            name="message"
                            value={formData.message} 
                            onChange={handleChange}
                            rows={5}
                            cols={50}
                            required
                        />
                    </div>

                    <button type="submit">Enviar</button>

                </form>
            </div>
        </>
    )

}

export default ContactForm;