import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data}) => {
    return (
        <div className='row p-4'>
            {data.map (item=>
                <div className='col-md-4'
                key = {item.id}>
                <Item item={item}/>
                </div>
            )
            }
        </div>
    )
}

export default ItemList