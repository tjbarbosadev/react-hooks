import Display from '@/components/template/Display';
import Pagina from '@/components/template/Pagina';
import { useEffect, useState } from 'react';

export default function CountChar() {
  const qtdChar = 400;
  const [remainingChar, setRemainingChar] = useState(qtdChar);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemainingChar(qtdChar - texto.length);
    }, 300);
    return () => clearTimeout(timer);
  }, [texto]);

  return (
    <Pagina
      titulo="Contar Caracteres"
      subtitulo="Entendendo funções de limpeza de texto"
    >
      <Display
        texto="Digite o texto"
        textoComplementar={`${remainingChar} caracteres restantes`}
      />
      <textarea
        value={texto}
        onInput={(e) => setTexto(e.currentTarget.value)}
        maxLength={qtdChar}
        className={`h-72 w-3/5 rounded-md border border-zinc-700 bg-zinc-700 p-5 text-2xl text-white`}
      />
    </Pagina>
  );
}
