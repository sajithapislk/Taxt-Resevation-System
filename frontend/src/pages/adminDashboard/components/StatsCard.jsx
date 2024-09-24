import React from 'react'


export const StatsCard = () => {
  return (
    <div className="col-md-4">
    <div className="card text-white bg-primary mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h2>{value}</h2>
      </div>
    </div>
  </div>
  )
}
