'use client'

import Image from 'next/image'
import copy from '../../../../../public/copy.svg'
import styles from './styles.module.css'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

type Props = {
  title: string
  lang: 'java' | 'js'
  code: string
  marginTop?: number
}

SyntaxHighlighter.registerLanguage('java', java)
SyntaxHighlighter.registerLanguage('js', js)

export default function CodeExample({
  title,
  lang,
  code,
  marginTop = 30,
}: Props) {
  return (
    <div
      className='flex flex-col w-[660px]'
      style={{ marginTop: `${marginTop}px` }}
    >
      <h2
        className={`text-[#232325] text-[22px] font-bold mb-3 ${styles.title}`}
      >
        {title}
      </h2>
      <div className='flex flex-col p-5 pt-[16px] bg-[#F9F9F9] rounded-[12px]'>
        <div className='flex items-center justify-between h-[20px]'>
          <p className='text-[#232325] text-[14px] font-medium'>{lang}</p>
          <div className='flex items-center gap-[5px]'>
            <Image
              width={18}
              height={18}
              src={copy}
              alt='copy icon'
              className='w-[18px] h-[18px]'
            />
            <button
              type='button'
              className={`text-[#636469] text-[14px] font-medium ${styles.copy}`}
              onClick={() => navigator.clipboard.writeText(code)}
            >
              Копировать
            </button>
          </div>
        </div>
        <div className='mt-[20px] overflow-x-auto'>
          <SyntaxHighlighter
            language={lang}
            style={atomOneLight}
            customStyle={{
              background: 'transparent',
              fontSize: 14,
              fontFamily: 'Menlo, monospace',
              lineHeight: '22px',
              padding: 0,
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
