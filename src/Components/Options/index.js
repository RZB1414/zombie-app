import './Options.css';
import Weapons from '../Weapons';
import Zombies from '../Zombies';
import { useState } from 'react';

const Options = () => {

    const [selectedZombie, setSelectedZombie] = useState("")
    const [selectedWeapon, setSelectedWeapon] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setSelectedZombie("")
        setSelectedWeapon("")
        console.log(selectedZombie, selectedWeapon)
    }

    const handleZombieChange = (event) => {
        setSelectedZombie(event.target.value)
    }

    const handleWeaponChange = (event) => {
        setSelectedWeapon(event.target.value)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <select className='list' value={selectedZombie} onChange={handleZombieChange} required>
                <option className='option' value="">Select a zombie</option>
                {Zombies.map((zombie) => {
                    return <option value={zombie.name} key={zombie.name}>{zombie.name}</option>
                })}
            </select>

            <select className='list' value={selectedWeapon} onChange={handleWeaponChange} required>
                <option className='option' value="">Select a weapon</option>
                {Weapons.map((Weapon) => {
                    return <option key={Weapon.name}>{Weapon.name}</option>
                })}
            </select>

            <button type="submit">Choose</button>
        </form>
    );
};

export default Options;
