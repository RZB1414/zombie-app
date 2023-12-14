import React from 'react';
import './Card.css';

function Card({ user }) {
    return (
                <div className='card'>
                    <div className='user'>
                        <h2 className='user-name'>{user.userName}</h2>
                        <img className='user-picture' src={user.userImg} alt='user' />
                    </div>
                    <div className='zombie'>
                        <h2 className='zombie-name'>{user.zombie}</h2>
                        <img className='zombie-picture' src={user.img} alt='zombie' />
                    </div>
                    <div className='weapon'>
                        <h2 className='weapon-name'>{user.weapon}</h2>
                        <img className='weapon-picture' src={user.weaponImg} alt='weapon' />
                    </div>
                </div>
    )
}

export default Card;
