import Link from 'next/link';
import Flex from './Flex';
import { IconFishHook } from '@tabler/icons-react';

interface LogoProps {
  subtitulo?: string;
  grande?: boolean;
  col?: boolean;
  className?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <Link href="/" className="cursor-pointer">
      <Flex col={props.col} centerCross className={props.className}>
        <div
          className={`flex items-center justify-center rounded-lg bg-blue-500 ${props.grande ? 'h-37.5 w-37.5' : 'h-12.5 w-12.5'} `}
        >
          <IconFishHook size={props.grande ? 100 : 30} />
        </div>
        <Flex col centerCross gap={0}>
          <div
            className={` ${props.grande ? 'text-4xl' : 'text-2xl'} font-black`}
          >
            React Hooks
          </div>
          {props.subtitulo && (
            <div className="text-sm text-zinc-500">{props.subtitulo}</div>
          )}
        </Flex>
      </Flex>
    </Link>
  );
}
