import Botao from '@/components/template/Botao';
import Display from '@/components/template/Display';
import Flex from '@/components/template/Flex';
import Pagina from '@/components/template/Pagina';
import { useState } from 'react';

export default function Votacao() {
  const [data, setData] = useState({
    verde: 0,
    roxo: 0,
  });

  // usamos prev para pegar o estado anterior e atualizar apenas a propriedade roxo, mantendo a propriedade verde inalterada
  function votoRoxo() {
    setData((prev) => ({ ...prev, roxo: prev.roxo + 1 }));
  }

  function votoVerde() {
    setData((prev) => ({ ...prev, verde: prev.verde + 1 }));
  }

  return (
    <Pagina titulo="Votação" subtitulo="Usando estado com objeto">
      <Flex col center>
        <Display
          texto="Qual a melhor cor?"
          textoComplementar={`Verde: ${data.verde} | Roxo: ${data.roxo}`}
        />
        <Flex gap={5}>
          <Botao
            cor="bg-green-600"
            texto="Verde"
            redondo
            tamanho="2xl"
            onClick={votoVerde}
          />
          <Botao
            cor="bg-purple-600"
            texto="Roxo"
            redondo
            tamanho="2xl"
            onClick={votoRoxo}
          />
        </Flex>
        <Botao
          texto="Zerar Votos"
          cor="bg-gray-700"
          tamanho="lg"
          onClick={() => setData({ verde: 0, roxo: 0 })}
        />
      </Flex>
    </Pagina>
  );
}
