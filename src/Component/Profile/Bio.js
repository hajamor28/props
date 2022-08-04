import React from 'react'

const Bio = ({Gender,Intersres}) => {
    console.log (Gender,Intersres )
  return (
    <div>
      <h5> {Gender} </h5>
      <h6> {Intersres} </h6>
    </div>
  )
}

export default Bio
