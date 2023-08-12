import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner'

const ItemListContainer = () => {
  const { id } = useParams()
  const [item, setItems] = useState() 
  const [load, setLoad] = useState(true) 
  const getData = async (category) => {
    setLoad(true)
    const db = getFirestore()
    const queryCollection = category ? query(collection(db, 'productos'), where('categoria', "==", category))
                          : collection(db, 'productos')
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map(p => ({ id: p.id, ...p.data() }))
    setItems(datos)
    setLoad(false)
  }

  useEffect(() => {
    getData(id)
  }, [id])

  return (
  <>
    {load ? <div className='pt-3'><Spinner animation="grow" variant="warning" size="5"/></div> 
          :<><h2 className='pt-3'>Bienvenido a PizzaClub!</h2>
    <ItemList data={item} /></>}
  </>
  )
}

export default ItemListContainer