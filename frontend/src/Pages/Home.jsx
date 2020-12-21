import React, {useState} from 'react'
import NavBar from '../Components/Navbar'
import Popover from '../Components/LoginModal'

const HomePage = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalVisible,setModalVisible] = useState(false)

    const submit = () => {
        console.log({email,password});
    }

    return (
        <React.Fragment>
            <NavBar setModalVisible = {setModalVisible} />
            <Popover
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                setEmail = {setEmail}
                setPassword = {setPassword}
                submit = {submit}
            />
        </React.Fragment>

        )


}

export default HomePage