import React, { useState } from 'react'
// import { Form, Button, Card} from 'react-bootstrap';
import Formulario from './Formulario';
// import { Modal, Button } from 'react-bulma-components'
// import 'bulma/css/bulma.css'


const InitialPage = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const State = () => {
    //     setIsModalOpen(!isModalOpen)
    // }

    return (
        <div>
            {/* <div className={`modalBackground  modalShowing-${isModalOpen}`}> */}
            
           <Formulario />
             
{/* </div>
            <button onClick={() => State()}>Open modal</button> */}
        </div>
        
    )
}

export default InitialPage
