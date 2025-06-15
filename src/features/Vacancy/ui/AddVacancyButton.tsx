import styles from './styles.module.css'

export default function AddVacancyButton() {
  return (
    <button
      type='button'
      className={`flex items-center justify-center rounded-[12px] px-[15px] py-3 text-[18px] w-[198px] text-[#232325] font-medium ${styles.button}`}
    >
      Добавить вакансию
    </button>
  )
}
