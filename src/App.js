import './App.css';
import Options from './Components/Options';
import Banner from './Components/Banner';
import Card from './Components/Card';
import { useState } from 'react';

function App() {

  const firstList = [
    {
      userName: "Tomtom",
      zombie: "Zombie 1",
      weapon: "Weapon 1",
      img: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/02/pjimage---2022-02-06T182522393.jpg",
      weaponImg: "https://3dvf.com/wp-content/uploads/2022/07/image-4-1536x912.jpg",
      userImg: "https://image.cachorrogato.com.br/textimages/gato-vira-lata.jpg"
    }
  ]

  const [userList, setUserList] = useState(firstList)

  const handleOptions = (dados) => {

    const newUser =
      {
        userName: dados.userName,
        zombie: dados.zombie,
        weapon: dados.weapon,
        img: dados.img,
        weaponImg: dados.weaponImg,
        userImg: `http://github.com/${dados.userImg}.png`
      }

    const updatedUserList = [...userList, newUser]
    setUserList(updatedUserList)
    console.log(updatedUserList);
  }

  function imprimiruser(user){
    //console.log(user)
  } 

  return (
    <>
      <Banner />
      <Options options={handleOptions} />
      {userList.map((user) => {
        imprimiruser(user)
         return <Card user={user} />
      })}
    </>
  )
}

export default App