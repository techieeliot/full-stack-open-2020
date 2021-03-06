import React from 'react'
import FieldBox from './FieldBox'

const PersonForm = ({ addPerson, newName, handlePersonNameChange, newNumber, handlePersonNumberChange }) => (
    <>
        <form onSubmit={addPerson}>
            <FieldBox htmlFor="name"
                type="text"
                autoComplete="name"
                value={newName}
                handleFunction={handlePersonNameChange} />
            <FieldBox htmlFor="number"
                type="tel"
                autoComplete="tel"
                value={newNumber}
                handleFunction={handlePersonNumberChange} />
            <section style={{width: "225px"}}>
                <button type="submit" 
                    style={
                        {width: "100%", 
                        backgroundColor: "#FAE601", 
                        color: "#37549D", 
                        fontWeight: "900", 
                        fontSize: "1.5rem",
                        padding: "0.25rem"}
                    }>
                    add
                </button>
            </section>
        </form>
    </>
)

export default PersonForm

