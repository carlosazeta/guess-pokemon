import './Watermark.css'

export function Watermark () {
  return (
    <a href='https://github.com/carlosazeta' target='_blank' rel='noopener noreferrer' className='watermark-container'>
      <div className='watermark-img' />
      <div className='watermark-textBox'>
        <div className='watermark-textContent'>
          <p className='watermark-p'>Created by <span>@carlosazeta</span></p>
        </div>
      </div>
    </a>
  )
}
