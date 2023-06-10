import React from 'react'
export function Person({ name, nickName, images }) {
  const img = images?.[0]?.small?.url
  return (
    <div>
      <section>
        <h4>{name}</h4>
        {nickName && <p>NickName: {nickName}</p>}
      </section>
      {images && <img style={{ width: '150px' }} src={img} alt={name} />}
    </div>
  )
}
