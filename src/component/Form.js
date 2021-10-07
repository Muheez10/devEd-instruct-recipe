import React from "react";


const Form = ({transfer,transfer2,transfer3}) => (   
    <form className='search-form' onSubmit={transfer3}>
        <input type='search' className='search-bar' value={transfer} onChange={transfer2}/>
        <button type='button' className='btn btn-primary'>search</button>
    </form>
)

export default Form;

