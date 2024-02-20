import React from 'react'
// 6.Reusable Components: Scenario: Design a reusable card component that can be used to display information with atitle, description, and an optional image.
const Card = () => {
const data=[
{id:1,title:"Heading",image:"favicon.ico",description:"Lorem ipsum dolor sit ametconsectetur adipisicing elit. Id,omnis! Obcaecati labore quos omnis corporis."}
]
return (
<div className='col-4 card'>
    <h2>Reusable Components</h2>
    {
    data.map((tvDetails)=>{
    return(
    <div key={tvDetails.id}>
        <h3>{tvDetails.title}</h3>
        <img src={tvDetails.image} alt={tvDetails.image} />
        <p>{tvDetails.description}</p>

    </div>
    )
    })
    }
</div>
)
}

export default Card