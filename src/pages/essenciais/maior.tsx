import Botao from '@/components/template/Botao';
import Display from '@/components/template/Display';
import Flex from '@/components/template/Flex';
import Pagina from '@/components/template/Pagina';
import { useEffect, useState } from 'react';

export default function Maior() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [maior, setMaior] = useState(0);

  useEffect(() => {
    function calcularMaior() {
      return n1 > n2 ? n1 : n2;
    }
    setMaior(calcularMaior());
  }, [n1, n2]);

  useEffect(() => {
    console.log(`N1: ${n1} | N2: ${n2} | Maior: ${maior}`);
  }, [n1, n2, maior]);

  return (
    <Pagina titulo="Maior" subtitulo="Exemplo de useeffect ">
      <Display
        texto={`N1: ${n1} | N2: ${n2}`}
        textoComplementar={` Maior: ${maior}`}
      />
      <Flex gap={5}>
        <Botao redondo texto="N1" tamanho="2xl" onClick={() => setN1(n1 + 1)} />
        <Botao redondo texto="N2" tamanho="2xl" onClick={() => setN2(n2 + 1)} />
      </Flex>
    </Pagina>
  );
}
