import React from 'react'
import { v4 as uuidV4 } from 'uuid'

import { Link, useNavigate } from 'react-router-dom'

import { HiOutlineDocumentText } from 'react-icons/hi'
import { HiOutlineDocumentPlus } from 'react-icons/hi2'

export default function Write() {
    const navigate = useNavigate()

    const handleCreate = () => {
        return navigate(`/write/${uuidV4()}`)
    }

    return (
        <div className='container'>
            <div className="user__articles">
                <div className="create__article">
                    <h2>Your articles</h2>
                    <button onClick={handleCreate}><HiOutlineDocumentPlus className='add__icon' />Create new article</button>
                </div>
                <div className="user__articles__list">
                    <ul>
                        <li><Link to='/'><HiOutlineDocumentText className='doc__icon' />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, nobis.</Link></li>
                        <li><Link to='/'><HiOutlineDocumentText className='doc__icon' />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, nobis.</Link></li>
                        <li><Link to='/'><HiOutlineDocumentText className='doc__icon' />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, nobis.</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
