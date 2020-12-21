import React from 'react'
import Modal from 'react-awesome-modal'
import {Button} from 'react-bootstrap'

const styles = {
    backgroundColor: {
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(90deg, rgba(64,93,237,1) 0%, rgba(70,187,252,1) 100%)'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row'
    },
    heading: {
        width: '80%'

    }
}

const RegisterModal = (props) => {
    const {showModal,setShowModal,setUserType} = props
    
    const submit = (accountType) => {
        setShowModal(false)
        setUserType(accountType)
    }

    return (
        <Modal
            visible= {showModal}
            width="20%"
            height="50%"
            effect="fadeInUp"
            onClickAway={() => setShowModal(false)}
        >
            <div style = {styles.backgroundColor}>

                <h1>Are you an influencer or businessman?</h1>

                <div style = {styles.buttons}>
                    <Button
                        variant = 'danger'
                        onClick = {() => submit('Business')}
                    > Businessman
                    </Button>
                    <Button 
                        variant = 'info'
                        onClick = {() => submit('Influencer')}
                    >
                        Influencer
                    </Button>
                </div>
            </div>

        </Modal>
    )
}

export default RegisterModal