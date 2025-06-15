import styles from './styles.module.css'

export default function QuestionTitle() {
  return (
    <div className='flex flex-col justify-between w-[660px] h-[92px]'>
      <p className={`text-[#636469] text-[18px] font-semibold ${styles.info}`}>
        Avito.tech <span className='text-[#ACAEB2] mx-[7px]'>•</span>
        27.01.2025
        <span className='text-[#ACAEB2] mx-[7px]'>•</span>Java
      </p>
      <h1 className={`text-[26px] font-bold text-[#232325] ${styles.title}`}>
        В чем разница передачи параметров по ссылке и значению?
      </h1>
    </div>
  )
}
