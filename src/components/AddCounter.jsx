// import React, { useState } from 'react';
import React, { Component } from 'react'

class AddCounter extends Component {

    // const [title, setTitle] = useState("")
    // const [desc, setDesc] = useState("")
    // const submit = (e) => {
    //     e.preventDefault();
    //     if(!title || !desc) {
    //         alert("Title or Description cannot be blank");
    //     }

    //     else
    //     {
    //         props.addNote(title,desc);
    //         setTitle("");
    //         setDesc("");
    //     }
    // }
    render() {
        return (
            <div>
                <form className="m-3">
                    <label htmlFor='title' className="form-label">Product</label>
                    <input type='text' className="form-control" placeholder="Enter the Product" autoComplete="off"/>
                    <br />
                    <label htmlFor='Note' className="form-label">Quantity</label>
                    <input type='textarea' className="form-control" placeholder="Enter the Quantity"/>
                    <br />
                    <input type='submit' className="btn btn-outline-primary"/>
                    <br />
                    <br />
                </form>
            </div>
        );
    }
}

export default AddCounter;