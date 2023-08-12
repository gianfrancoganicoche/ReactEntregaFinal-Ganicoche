import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import db from '../Firebase/Config'
import Spinner from 'react-bootstrap/Spinner'


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState()
    const [load, setLoad] = useState(true)
    const getSelected = async (idItem) => {
        try {
            const document = doc(db, "productos", idItem)
            const response = await getDoc(document)
            const result = { id: response.id, ...response.data() }
            setSelectedItem(result)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSelected(id)
    }, [id])

    return (
        <>
            {load ? <div className='pt-3'><Spinner animation="grow" variant="warning" size="5"/></div> : <ItemDetail item={selectedItem} />}
        </>
    )
}

export default ItemDetailContainer