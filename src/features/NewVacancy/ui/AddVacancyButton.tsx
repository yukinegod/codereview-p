import styles from './styles.module.css'

export default function AddVacancyButton() {
  return (
    <button
      type='button'
      className={`h-[46px] px-[15px] py-3 rounded-[12px] text-[18px] text-[#232325] font-medium leading-[22px] tracking-[-0.5px] mb-[100px] cursor-pointer select-none ${styles.addVacancyButton}`}
    >
      Добавить вакансию
    </button>
  )
}
