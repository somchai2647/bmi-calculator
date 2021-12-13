import React from 'react'

export default function Image({ BMI }) {


    return (
        <div>
            {BMI ? <img src={`./assets/images/${BMI}.png`} alt="body" width={500} /> : null}
        </div>
    )
}
