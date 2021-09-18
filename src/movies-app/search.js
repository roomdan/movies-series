import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap"

import "./main.scss";

const SearchMovie = ({form})=>{

    const [dataForm, setDataForm] = useState({name:'', type:'Serie'});

    const setForm = ()=>{
        form(dataForm);
        setDataForm({name:'', type:'Serie'})
    }

    return (
        <div className='form-on-search'>
            <span className='movie-svg'></span>
            <div className='on-search-movie'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Movies, Series & More"
                    className="mb-3">
                <Form.Control value={dataForm.name} onChange={e=>{setDataForm({...dataForm, name:e.target.value})}} type="text" placeholder="Super Man" />
                </FloatingLabel>
            </div>
            <button onClick={setForm} className='button-search'></button>
        </div>

    )
}

export default SearchMovie