import React from 'react'
import Item from './Item'

const Persons = ({ itemsToShow }) => (
    <>
        <section>
            <ul>
            {itemsToShow.map(person => 
                <Item key={person.id} name={person.name} number={person.number} />
            )}
            </ul>
        </section>
    </>
)

export default Persons

