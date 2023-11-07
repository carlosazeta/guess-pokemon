export function Lives ({ lives }) {
  const heartIcons = []

  // Llena el array con los iconos de corazones completos al inicio
  for (let i = 0; i < 3; i++) {
    if (i < lives) {
      // Iconos de corazones completos si quedan vidas
      heartIcons.push(<i key={i} className='nes-icon is-large heart' />)
    } else {
      // Iconos de corazones vacíos si no quedan vidas
      heartIcons.push(<i key={i} className='nes-icon is-large is-transparent heart' />)
    }
  }

  return (
    <section className='icon-list'>
      {heartIcons}
    </section>
  )
}
