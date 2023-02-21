import React from 'react'
import { MdGrade } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai'

import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="articles">
            <div className="container">
                <h2>Top articles</h2>
                <div className="top__articles">
                    <div className="article">
                        <h3><Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum.</Link></h3>
                        <div className="details">
                            <p className='detail__item'><MdGrade className='grade' /> 2</p>
                            <p className='detail__item'><AiFillHeart className='like' /> 1249</p>
                        </div>
                        <small><Link to="/">by Anonymous</Link></small>
                    </div>
                    <div className="article">
                        <h3><Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum.</Link></h3>
                        <div className="details">
                            <p className='detail__item'><MdGrade className='grade' /> 2</p>
                            <p className='detail__item'><AiFillHeart className='like' /> 1249</p>
                        </div>
                        <small><Link to="/">by Anonymous</Link></small>
                    </div>
                    <div className="article">
                        <h3><Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum.</Link></h3>
                        <div className="details">
                            <p className='detail__item'><MdGrade className='grade' /> 2</p>
                            <p className='detail__item'><AiFillHeart className='like' /> 1249</p>
                        </div>
                        <small><Link to="/">by Anonymous</Link></small>
                    </div>
                    <div className="article">
                        <h3><Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum.</Link></h3>
                        <div className="details">
                            <p className='detail__item'><MdGrade className='grade' /> 2</p>
                            <p className='detail__item'><AiFillHeart className='like' /> 1249</p>
                        </div>
                        <small><Link to="/">by Anonymous</Link></small>
                    </div>
                </div>
            </div>
        </div>
    )
}
