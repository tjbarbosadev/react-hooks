interface DisplayProps {
  texto: any;
  textoComplementar?: string;
}

export default function Display(props: DisplayProps) {
  return (
    <>
      <p className={`m-4 text-6xl text-gray-300`}>{props.texto}</p>
      {props.textoComplementar ? (
        <p className={`m-4 text-4xl text-gray-300`}>
          {props.textoComplementar}
        </p>
      ) : (
        ''
      )}
    </>
  );
}
