import { useState, useEffect } from "react";

interface minhaProps {
  title: string;
  description: string; 
}

export function Home(props:minhaProps) {
  const [valor, setValor] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState(String);

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! você concluiu a tarefa!')
    }
  },[completed])

  function handleClick() {
    setValor(valor + 1);
  }

  return (
    <div className=' w-full h-[720px] gap-3 flex flex-col items-center justify-center bg-white'>
      <h2 className='text-blue-600'>{props.title}</h2>
      <p>{props.description}</p>
      <button className='w-20 border-solid border-2 border-[#000] rounded-lg' onClick={handleClick}>Soma 1</button>
      <p>O valor é: {valor}</p>
      <button className='w-20 border-solid border-2 border-[#000] rounded-lg' onClick={() => setCompleted(true)}>Concluir</button>
      <p>{tarefa}</p>
    </div>
  )
}
