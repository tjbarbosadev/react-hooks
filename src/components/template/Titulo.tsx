interface TituloProps {
  titulo: string;
  subtitulo?: string;
}

export default function Titulo(props: TituloProps) {
  return (
    <div>
      <h1 className={`text-3xl font-black text-gray-300`}>{props.titulo}</h1>
      {props.subtitulo && (
        <h2 className={`text-md font-light text-gray-400`}>
          {props.subtitulo}
        </h2>
      )}
    </div>
  );
}
