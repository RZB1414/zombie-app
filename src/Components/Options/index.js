import './Options.css';
import Weapons from '../Weapons';
import Zombies from '../Zombies';
import { useState } from 'react';

const Options = (options) => {

    const [zombie, setZombie] = useState("")
    const [weapon, setWeapon] = useState("")
    const [img, setImg] = useState("")
    const [weaponImg, setWeaponImg] = useState("")
    const [userName, setUserName] = useState("")
    const [userList, setUserList] = useState([])
    const [userImg, setUserImg] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            userName,
            zombie,
            weapon,
            img,
            weaponImg,
            userImg
        }
        options.options(data)
        setUserList([...userList, data])
        setZombie("")
        setWeapon("")
        setUserName("")
        setUserImg("")
    }

    const handleZombieChange = (event) => {
        setZombie(event.target.value)
        setImg(Zombies.find((zombie) => zombie.name === event.target.value).img)
    }

    const handleWeaponChange = (event) => {
        setWeapon(event.target.value)
        setWeaponImg(Weapons.find((weapon) => weapon.name === event.target.value).img)
    }

    const handleUserNameChange = (event) => {
        setUserName(event.target.value)
    }

    const handleUserImgChange = (event) => {
        setUserImg(event.target.value)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <select className='list' value={zombie} onChange={handleZombieChange} required>
                <option className='option' value="">Select a zombie</option>
                {Zombies.map((zombie) => {
                    return <option key={zombie.name}>{zombie.name}</option>
                })}
            </select>

            <select className='list' value={weapon} onChange={handleWeaponChange} required>
                <option className='option' value="">Select a weapon</option>
                {Weapons.map((Weapon) => {
                    return <option key={Weapon.name}>{Weapon.name}</option>
                })}
            </select>

            <input
                className='input'
                type='text'
                placeholder='Enter your name'
                required
                value={userName}
                onChange={handleUserNameChange}
            />

            <input
                className='input'
                type='text'
                placeholder='User name of github'
                required
                value={userImg}
                onChange={handleUserImgChange}
            />

            <button type="submit">Choose</button>
        </form>
    );
};

export default Options;
