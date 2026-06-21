import Botao from '@/components/template/Botao';
import Display from '@/components/template/Display';
import Flex from '@/components/template/Flex';
import Pagina from '@/components/template/Pagina';
import { useRef, useState } from 'react';

export default function StateVsRef() {
  const [state, setState] = useState(0);
  const ref = useRef(0);

  function incRef() {
    ref.current++;
    return ref.current;
  }

  return (
    <Pagina
      titulo="State vs Ref"
      subtitulo="Entendendo as diferenças entre useState e useRef"
    >
      <Display texto={`R: ${ref.current} | S: ${state}`} />
      <Flex gap={5}>
        <Botao
          redondo
          tamanho="2xl"
          cor="bg-pink-500"
          texto="R+"
          onClick={() => incRef()}
        ></Botao>
        <Botao
          redondo
          tamanho="2xl"
          cor="bg-green-500"
          texto="S+"
          onClick={() => setState(state + 1)}
        ></Botao>
      </Flex>
    </Pagina>
  );
}
