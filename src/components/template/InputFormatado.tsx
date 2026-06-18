interface InputFormatadoProps {
  label?: string;
  tipo: string;
  valor: string | number;
  onInput?: (e: any) => any;
  className?: string;
}

export default function InputFormatado(props: InputFormatadoProps) {
  return (
    <>
      <label className="m-1">{props.label}</label>
      <input
        type={props.tipo}
        value={props.valor}
        onInput={props.onInput}
        className={`h-11 w-40 rounded-md px-2 text-gray-600 ${props.className ?? ''} `}
      />
    </>
  );
}
