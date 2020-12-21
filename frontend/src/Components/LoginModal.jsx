import React from 'react'
import Modal from 'react-awesome-modal'
import {Form,Button} from 'react-bootstrap'

const styles = {
    backgroundColor: {
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(90deg, rgba(246,51,51,1) 0%, rgba(190,86,163,1) 100%)'
    },
    headerText: {
        textAlign: 'center',
    },
    form: {
        width: '50%',
        marginLeft: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row'
    }
}

const LoginPopup = (props) => {
    const {modalVisible,setModalVisible,setEmail,setPassword,submit} = props
    return (
        <Modal
            visible= {modalVisible}
            width="20%"
            height="50%"
            effect="fadeInUp"
            onClickAway={() => setModalVisible(false)}
        >
            <div style = {styles.backgroundColor}>
                <div style = {{height: '5%'}}></div>
                <h3 style = {styles.headerText}>Login Form</h3>
                <Form style = {styles.form}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange = {
                                (e) => setEmail(e.target.value)
                            }
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange = {
                                (e) => setPassword(e.target.value)
                            } />
                    </Form.Group>
                    <div style = {styles.buttons}>
                        <Button onClick = {submit}variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button
                            style = {{marginLeft: '25%'}}
                            variant = 'danger'
                            onClick = {() => setModalVisible(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </div>
        </Modal>
    )
}

export default LoginPopup