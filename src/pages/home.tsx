import homeLogo from '../assets/BlogPessoal.jpg'

export function Home() {
  return (
    <div className=' w-full h-full bg-white'>
      <h1 className='text-8xl text-blue-600'>Home</h1>
      <img src={homeLogo} alt="" />
    </div>
  )
}
