import Botao from '@/components/template/Botao';
import Display from '@/components/template/Display';
import Flex from '@/components/template/Flex';
import Pagina from '@/components/template/Pagina';
import { IconMinus, IconPlus, IconZeroConfig } from '@tabler/icons-react';
import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <Pagina titulo="Contador" subtitulo="Entendendo o que é um estado">
      <Display texto={count} />
      <Flex gap={5}>
        <Botao
          redondo
          cor="bg-blue-500"
          tamanho="2xl"
          icone={<IconMinus />}
          onClick={() => setCount(count - 1)}
        />
        <Botao
          redondo
          texto="0"
          cor="bg-red-500"
          tamanho="2xl"
          onClick={() => setCount(0)}
        />
        <Botao
          redondo
          cor="bg-green-500"
          tamanho="2xl"
          icone={<IconPlus />}
          onClick={() => setCount(count + 1)}
        />
      </Flex>
    </Pagina>
  );
}
