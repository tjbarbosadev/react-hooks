import Pagina from '@/components/template/Pagina';
import { useEffect, useState } from 'react';

export default function ConsultaApi() {
  const [url, setUrl] = useState<string | null>();

  useEffect(() => {
    console.log('Requisição à API');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setUrl(data.message));
  }, []);

  return (
    <Pagina titulo="Requisição à API" subtitulo="Exemplo de requisição à API">
      {url && <img src={url} className="max-w-sm" alt="Imagem da API" />}
    </Pagina>
  );
}
