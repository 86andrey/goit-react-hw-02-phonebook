import React from 'react';
import ContactForm from './ContactForm';
import styled from 'styled-components';


class Phonebook extends React.Component {
    state = {
        contacts: [],
        
    };

    formSubmitHandler = data => {
        console.log(data);
        
    };
    
    
    render() {
        return (
            <SectionPhonebook>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={ this.formSubmitHandler} />
                <h2>Contacts</h2>
                {/* <Filter/>
                <ContactList/> */}
                
                <section>
                    <ul>
                        <li>
                            <span></span>
                            <p ></p>
                        </li>
                        <li >
                            <span ></span>
                            <p></p>
                        </li>
                    </ul>
                </section>
        
            </SectionPhonebook>)
        
    };
};

const SectionPhonebook = styled.div`
width: 200px;
margin: auto;
`

    
export default Phonebook;