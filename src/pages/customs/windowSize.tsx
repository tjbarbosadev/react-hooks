import Display from '@/components/template/Display';
import Pagina from '@/components/template/Pagina';
import useWindowSize from '@/hooks/useWIndowSize';

export default function WindowSize() {
  const size = useWindowSize();

  return (
    <Pagina
      titulo="Tamanho da Janela"
      subtitulo="Usando hook personalizado para detectar o tamanho da janela"
    >
      <Display texto={size} />
      <div className="h-40 w-40 bg-blue-500 sm:bg-blue-300 md:bg-pink-400 lg:bg-green-400 xl:bg-yellow-400"></div>
    </Pagina>
  );
}
