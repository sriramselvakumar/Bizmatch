import React, {useState} from 'react'
import RegisterModal from "../Components/RegisterModal";
const styles = {
    background: {
        backgroundImage: 'linear-gradient(90deg, rgba(246,51,51,1) 0%, rgba(190,86,163,1) 100%)',
        height: '100vh'
    }
}
const RegisterPage = () => {
    const [userType,setUserType] = useState('')
    const [showModal, setShowModal] = useState(true)




    return (
        <div style = {styles.background}>
            <RegisterModal
                showModal = {showModal}
                setShowModal = {setShowModal}
                setUserType = {setUserType}
            />
        </div>


    )



}

export default RegisterPage