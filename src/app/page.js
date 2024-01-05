import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <nav className='flex justify-end bg-[#3B5795] h-[90px] text-white outline outline-offset-2 outline-1 gap-6 px-32 py-3'>
        <h1 className='text-bold text-4xl mr-auto py-3'>Facebook</h1>
        <label>E-mail ou telefone<input className='flex text-black' type='email' name='Email ou telefone' required/></label>
        <label>Senha<input className='flex text-black' type='password' name='Senha' required/></label>
        <button className='flex justify-center bg-[#657AAC] h-[30px] w-[60px] mt-5 hover:bg-[#5870A0]' type='submit'>Logar</button>
      </nav>

      <div className='mr-auto py-6'>
        <h1 className='flex justify-end text-5xl px-[500px] py-12'>Crie a sua conta</h1>
        <div className='flex justify-end text-black gap-6 px-[360px] h-10 '>
          <input className='border-2 border-[#D2D8E5] rounded-md px-2' placeholder='Primeiro nome' type='email' name='Email ou telefone' required/>
          <input className='border-2 border-[#D2D8E5] rounded-md px-2' placeholder='Segundo nome' type='email' name='Email ou telefone' required/>
        </div>
        <div className='flex justify-end text-black px-[360px] h-10 mt-[10px]'>
          <input className='border-2 border-[#D2D8E5] rounded-md w-[505px] px-2' placeholder='Email ou número de telefone' type='email' required/>  
        </div>
        <div className='flex justify-end text-black px-[360px] h-10 mt-[10px]'>
          <input className='border-2 border-[#D2D8E5] rounded-md w-[505px] px-2' placeholder='E-mail ou número de telefone' type='email' required/>  
        </div>
        <div className='flex justify-end text-black px-[360px] h-10 mt-[10px]'>
          <input className='border-2 border-[#D2D8E5] rounded-md w-[505px] px-2' placeholder='Nova senha' type='password' required/>  
        </div>


        <h1 className='flex justify-end mr-[780px] py-6'>Aniversário</h1>
        <div className='flex justify-end text-black px-[360px] h-8 mt-[10px] mt-auto'>
          <input className='border-2 border-[#D2D8E5] rounded-md w-[505px] px-2' placeholder='Email ou número de telefone' type='date' required/>  
        </div>
        <div className='flex justify-end px-[750px] py-6'>
          <button className='bg-[#67A54B] h-12 w-28 text-white hover:bg-[#609946]'>Criar conta</button>
        </div>
      </div>
    </main>
  )
}
