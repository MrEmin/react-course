import React from 'react'
import avatar from '../../../assets/default-avatar.svg'

export function Person({ name, nickName, images }) {
  //const img = images && images[0] && images[0].small && images[0].small.url

  // Optional Chaining and Or operator
  // const img = images?.[0]?.small?.url || avatar

  // Nullish coalescing operator
  const img = images?.[0]?.small?.url ?? avatar
  return (
    <div>
      <section>
        <h4>{name}</h4>
        {nickName && <p>NickName: {nickName}</p>}
      </section>
      <img style={{ width: '150px' }} src={img} alt={name} />
    </div>
  )
}
