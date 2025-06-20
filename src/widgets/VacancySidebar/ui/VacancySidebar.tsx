import SophiPromoBlock from '@/shared/ui/SophiPromoBlock/SophiPromoBlock'
import CompanyActions from './CompanyActions'
import SimilarJobs from './SimilarJobs'

type Props = {
  image: string
  companyName: string
  location: string
  url: string
}

export default function VacancySidebar({
  image,
  companyName,
  location,
  url,
}: Props) {
  return (
    <div className='flex flex-col w-[300px] h-[737px] shrink-0 gap-[10px]'>
      <CompanyActions
        image={image}
        companyName={companyName}
        location={location}
        url={url}
      />
      <SophiPromoBlock type='vacanciesSide' />
      <SimilarJobs />
    </div>
  )
}
