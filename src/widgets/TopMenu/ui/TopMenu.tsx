import Logo from '@/shared/ui/Logo/Logo'
import LoginButton from '@/features/Auth/ui/LoginButton'
import Specialization from '@/features/Specialization/ui/Specialization'
import type { TopMenuType } from '@/shared/types/types'
import AutoResponsesButton from '@/shared/ui/AutoResponsesButton/AutoResponsesButton'
import BackArrow from '@/shared/ui/BackArrow/ui/BackArrow'
import QuestionSimulatorButton from '@/shared/ui/QuestionSimulatorButton/ui/QuestionSimulatorButton'
import styles from './styles.module.css'

type Props = {
  type?: TopMenuType
  buttonType?: 'autoResponses' | 'questionSimulator'
  href?: string
}

export default function TopMenu({
  type = 'main',
  buttonType,
  href = '/',
}: Props) {
  const renderButton = () => {
    if (buttonType === 'autoResponses') {
      return <AutoResponsesButton />
    }
    if (buttonType === 'questionSimulator') {
      return <QuestionSimulatorButton />
    }
    return null
  }

  if (type === 'main') {
    return (
      <nav
        role='navigation'
        aria-label='Главное меню'
        className={`flex h-[56px] rounded-[18px] gap-5 py-[17px] px-5 select-none fixed z-[1000] bg-[rgba(255, 255, 255, 0.92)] ${styles.topBar}`}
      >
        <div className='flex items-center' aria-hidden='false'>
          <Logo type={type} />
        </div>
        <div className='flex items-center' aria-hidden='false'>
          <Specialization />
        </div>
        <LoginButton />
      </nav>
    )
  }

  if (type === 'secondary' || type === 'arrow') {
    return (
      <nav
        role='navigation'
        aria-label='Навигация по разделу'
        className='flex fixed z-[1000] gap-[10px] items-center '
      >
        {type === 'arrow' && <BackArrow href={href || '/'} />}

        <div
          className={`flex h-[56px] rounded-[18px] gap-5 py-[17px] px-5 select-none ${styles.topBar}`}
        >
          <div className='flex items-center' aria-hidden='false'>
            <Logo type={type} />
          </div>
          <div className='flex items-center' aria-hidden='false'>
            <Specialization type={type} />
          </div>
          <LoginButton />
        </div>

        {renderButton()}
      </nav>
    )
  }

  return null
}
