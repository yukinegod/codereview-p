import styles from './styles.module.css'

export default function CompanyInfo() {
  return (
    <p
      className={`text-[#232325] text-[18px] font-medium ${styles.companyInfo}`}
    >
      Компания IT_ONE запускает стажировку для будущих Java разработчиков, целью
      которой является подготовка специалистов уровня от Junior+ до Middle-.
      <br />
      <br />
      Наши стажеры смогут получить опыт работы в профессиональной среде, развить
      свои навыки под руководством высококвалифицированных специалистов и
      открыть новые возможности для своей карьеры в IT-индустрии.
    </p>
  )
}
