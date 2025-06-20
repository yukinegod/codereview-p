import SubscribeToChannelsButton from '@/features/SubscribeToChannels/ui/SubscribeToChannelsButton'

export default function SubscribeToChannelsForm() {
  return (
    <div className='flex flex-col p-[30px] h-[532px]'>
      <p className='text-black text-[24px] font-bold leading-[28px] tracking-[-1px] mb-[20px]'>
        Ты успешно авторизовался!
      </p>
      <p className='text-[#232325] text-[18px] leading-[22px] tracking-[-0.5px] mb-auto'>
        На нашем сервисе собрано больше 1.000 вопросов с собеседований, сотни
        тестовых заданий, контакты рекрутеров и многое другое.
        <br />
        <br />
        Все это мы отдаем тебе бесплатно, взамен на подписку на наши телеграм
        каналы. Именно они помогают монетизировать нашу платформу и обновлять
        весь наш контент.
      </p>
      <SubscribeToChannelsButton />
    </div>
  )
}
