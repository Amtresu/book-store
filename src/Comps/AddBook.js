import React from "react";

const AddBook = () =>{ 
    return(
        <div>
            <form>
                <ul>
                    <input type="text" placeholder="Title"></input>
                    <input type="text" placeholder="Author"></input>
                    <button type="button">Add</button>
                </ul>
            </form>
        </div>
    )
}

export default AddBook