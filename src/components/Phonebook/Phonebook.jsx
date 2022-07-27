import React from 'react';
import styled from 'styled-components';


class Phonebook extends React.Component {
    state = {
        contacts: [],
        name: '',
        number: ''
    };

    onInputChange = e => {
        const { name, value } = e.currentTarget;
            this.setState({[name] : value})
    };
    
    render() {
        return (
            <SectionPhonebook>
                <form>
                    <h2>Phonebook</h2>
                    <label>Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.onInputChange}
                        />
                    </label>
                    <label>Number
                    <input
                         type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                            value={this.state.number}
                            onChange={this.onInputChange}
                        />
                        </label>                    
                    <button type="submit">Add contact</button>
                </form>
                <section>
                    <h2>Contacts</h2>
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
width: 90px;
margin: auto;
`

    
export default Phonebook;