import styles from './styles.module.css'

export default function Contacts() {
  return (
    <div className='flex flex-col justify-between w-[233px] h-[141px] z-10'>
      <p
        className={`text-[#86888E] text-[30px] text-right font-semibold ${styles.logo}`}
      >{`<codereview />`}</p>
      <div className='flex flex-col w-full h-[51px] gap-[3px]'>
        <p
          className={`text-[#F6F6F6] text-[24px] text-right font-semibold ${styles.phone}`}
        >
          +7 (499) 110-82-76
        </p>
        <p
          className={`text-[#86888E] text-[18px] text-semibold ${styles.email}`}
        >
          yourcodereview@gmail.com
        </p>
      </div>
    </div>
  )
}
