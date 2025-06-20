import CardList from '@/entities/Card/ui/CardList'
import CategorySwitcher from '@/features/CategorySwitcher/ui/CategorySwitcher'
import Assistant from '@/widgets/Assistant/ui/Assistant'
import Footer from '@/widgets/Footer/ui/Footer'
import RecruitmentSection from '@/widgets/RecruitmentSection/ui/RecruitmentSection'
import TopMenu from '@/widgets/TopMenu/ui/TopMenu'

export default function Main() {
  return (
    <div
      className='w-screen h-screen bg-white flex flex-col items-center pt-[20px] overflow-x-hidden'
      style={{
        backgroundImage: `url('./bgShades.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
      }}
    >
      <TopMenu />
      <Assistant />
      <CategorySwitcher />
      <CardList />
      <RecruitmentSection />
      <Footer />
    </div>
  )
}
