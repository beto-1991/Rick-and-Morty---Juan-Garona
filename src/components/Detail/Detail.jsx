import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'


  function Detail (props) {
    const {id} = useParams()

    const [character, setCharacter] = useState({});

useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  
    return (
        
      <div className={styles.detailDiv}> 
        <div>
        <h1 className={styles.title}>{character.name}</h1>
        <h3 className={styles.subtitle}>Especie: {character.species}</h3>
        <h3 className={styles.subtitle}>Género: {character.gender}</h3>
        <h3 className={styles.subtitle}>Status: {character.status}</h3>
        <h3 className={styles.subtitle}>Origen: {character.origin?.name}</h3>
        </div>
        <div>
            <img className= {styles.detailImg} src={character.image} alt="" />
        </div>
      </div>

    
    )
  }
  
  export default Detail
  