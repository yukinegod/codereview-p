import JobsList from './JobsList'
import styles from './styles.module.css'

export default function SimilarJobs() {
  return (
    <div className='flex flex-col w-[300px] h-[270px] p-[20px] rounded-[8px]'>
      <p
        className={`text-[#232325] text-[18px] font-bold mb-[20px] ${styles.similarJobs}`}
      >
        Похожие вакансии
      </p>
      <JobsList />
    </div>
  )
}
