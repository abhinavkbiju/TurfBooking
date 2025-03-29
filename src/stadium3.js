import React from 'react'
import './stadium.css'
import { useNavigate } from 'react-router-dom'

function Stadium3() {
    const navigate=useNavigate();
    const onhandle7 =()=>{
        navigate('/')
    }
    const onhandle8 =()=>{
        navigate('/north')
    }
    return (
        <div className='stadiu'>
            <div>
                <img className='image95' src='https://keralablastersfc.in/wp-content/uploads/2023/09/Stadium-1536x916.jpg' />
            </div>
            <button className='button95'onClick={onhandle7}>BACK</button>
            <button className='button95' onClick={onhandle8}>BOOK NOW</button>
        </div>
    )
}

export default Stadium3