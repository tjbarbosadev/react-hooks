import { IconCode } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuItemProps {
  icone?: any;
  titulo: string;
  tag?: string;
  url: string;
  mini?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  const { icone, titulo, tag, url, mini } = props;

  const router = useRouter();
  const ativo = url === router.asPath;

  return (
    <Link
      id={titulo}
      href={url}
      className={`flex items-center gap-2 rounded-md px-3 py-2 hover:bg-zinc-800 ${
        ativo ? 'bg-zinc-900 text-blue-500' : 'text-zinc-400'
      }`}
    >
      {icone ?? <IconCode />}
      {!mini && titulo}
      {!mini && tag && (
        <span
          className={` ${ativo ? `bg-blue-500` : 'bg-zinc-700'} rounded-full px-2 text-[11px] text-white`}
        >
          {tag}
        </span>
      )}
    </Link>
  );
}
