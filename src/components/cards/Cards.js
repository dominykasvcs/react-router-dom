import React from 'react'
import './cards.css'

const data = [
    {
        id: 1,
        title: "Pirmas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam illum quod recusandae veniam magnam.",
    },
    {
        id: 2,
        title: "Antras",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam illum quod recusandae veniam magnam.",
    },
    {
        id: 3,
        title: "Trecias",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam illum quod recusandae.",
    }
]

const Cards = () => {
    return (
        <div className='cards'>
            <div className="container">
                {
                    data.map(({ id, title, description }) => {
                        return (
                            <div className="card" key={id}>
                                <div className="card-head"></div>
                                <div className="card-body">
                                    <h1>{ title }</h1>
                                    <p>{ description }</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards