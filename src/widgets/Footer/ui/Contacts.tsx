export default function Contacts() {
  return (
    <address
      aria-label='Контактная информация'
      className='flex flex-col justify-between w-[233px] h-[141px] z-10 not-italic'
    >
      <p className='text-[#86888E] text-[30px] font-semibold'>{`<codereview />`}</p>
      <div className='flex flex-col gap-[3px]'>
        <a
          href='tel:+74991108276'
          className='text-[#F6F6F6] text-[24px] font-semibold'
        >
          +7 (499) 110-82-76
        </a>
        <a
          href='mailto:yourcodereview@gmail.com'
          className='text-[#86888E] text-[18px]'
        >
          yourcodereview@gmail.com
        </a>
      </div>
    </address>
  )
}
