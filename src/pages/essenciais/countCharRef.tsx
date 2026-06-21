import Display from '@/components/template/Display';
import Pagina from '@/components/template/Pagina';
import { useRef, useState } from 'react';

export default function CountChar() {
  const qtdChar = 400;
  const [remainingChar, setRemainingChar] = useState(qtdChar);

  const refText = useRef<HTMLTextAreaElement>(null);
  const count = useRef(0);

  function handleChange() {
    clearTimeout(count.current);
    count.current = setTimeout(() => {
      if (refText.current) {
        const text = refText.current.value.length;
        setRemainingChar(qtdChar - text);
      }
    }, 1000);
  }

  return (
    <Pagina
      titulo="Contar Caracteres"
      subtitulo="Usando referencia para acessar o valor do textarea"
    >
      <Display
        texto="Digite o texto"
        textoComplementar={`${remainingChar} caracteres restantes`}
      />
      <textarea
        ref={refText}
        className={`h-72 w-3/5 rounded-md border border-zinc-700 bg-zinc-700 p-5 text-2xl text-white`}
        onInput={handleChange}
      />
    </Pagina>
  );
}
