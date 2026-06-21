import {
  IconArrowsLeftRight,
  IconLetterCase,
  IconMathGreater,
  IconNumbers,
  IconRefreshAlert,
  IconUsers,
} from '@tabler/icons-react';
import Logo from './Logo';
import MenuPrincipalItem from './MenuPrincipalItem';
import MenuPrincipalSecao from './MenuPrincipalSecao';
import Flex from './Flex';
import { MenuSecao } from '@/models/MenuSecao';
import { MenuItem } from '@/models/MenuItem';

export default function MenuPrincipal() {
  const secoes = [
    {
      titulo: 'Essenciais',
      aberta: true,
      itens: [
        {
          titulo: 'Contador',
          url: '/essenciais/contador',
          tag: 'useState',
          icone: <IconNumbers />,
        },
        {
          titulo: 'Votação',
          url: '/essenciais/votacao',
          tag: 'useState',
          icone: <IconUsers />,
        },
        {
          titulo: 'Requisição à API',
          url: '/essenciais/consultaApi',
          tag: 'useEffect',
          icone: <IconArrowsLeftRight />,
        },
        {
          titulo: 'Maior',
          url: '/essenciais/maior',
          tag: 'useEffect',
          icone: <IconMathGreater />,
        },
        {
          titulo: 'Contar Caracteres',
          url: '/essenciais/countChar',
          tag: 'useEffect',
          icone: <IconLetterCase />,
        },
        {
          titulo: 'State vs Ref',
          url: '/essenciais/stateVsRef',
          tag: 'useRef',
          icone: <IconRefreshAlert />,
        },
      ],
    },
  ];
  const mini = false;
  function renderizarSecoes() {
    return secoes.map((secao: MenuSecao) => (
      <MenuPrincipalSecao
        key={secao.titulo}
        titulo={secao.titulo}
        mini={mini}
        aberta={secao.aberta}
      >
        {renderizarItens(secao)}
      </MenuPrincipalSecao>
    ));
  }

  function renderizarItens(secao: MenuSecao) {
    return secao.itens.map((item: MenuItem) => (
      <MenuPrincipalItem
        key={`${item.titulo}-${item.tag}`}
        icone={item.icone}
        titulo={item.titulo}
        tag={item.tag}
        url={item.url}
        mini={mini}
      />
    ));
  }

  return (
    <aside
      className={`flex scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 flex-col overflow-x-hidden overflow-y-scroll bg-black shadow-md shadow-zinc-800 ${mini ? 'w-32.5 items-center' : 'w-92.5'} `}
    >
      <Flex center className="m-7">
        {!mini && <Logo />}
      </Flex>
      <nav className="m-7 flex flex-col gap-4">{renderizarSecoes()}</nav>
    </aside>
  );
}
