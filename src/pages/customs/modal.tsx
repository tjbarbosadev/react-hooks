import Botao from '@/components/template/Botao';
import Flex from '@/components/template/Flex';
import Pagina from '@/components/template/Pagina';
import useToggle from '@/hooks/useToggle';
import { IconX } from '@tabler/icons-react';

export default function Modal() {
  const [state, toggle] = useToggle();

  return (
    <Pagina
      titulo="Modal"
      subtitulo="Usando hook personalizado para controlar a abertura do modal"
    >
      <Botao texto="Abrir" cor="bg-cyan-500" onClick={toggle} />
      {state && (
        <Flex
          center
          col
          className={`m-4 h-80 w-80 rounded-md bg-gray-500 p-4 text-2xl text-white`}
        >
          <Botao
            icone={<IconX />}
            tamanho="xl"
            cor="bg-red-700"
            onClick={toggle}
          />
          <h1 className="mt-5">Clique em x para sair</h1>
        </Flex>
      )}
    </Pagina>
  );
}
