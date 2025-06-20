import Banner from './Banner'
import CloseModal from './CloseModal'
import FormRenderer from './FormRenderer'

export default function AuthModal() {
  return (
    <div className='fixed inset-0 z-[9999] bg-black/15 flex items-center justify-center'>
      <div className='flex items-start w-[838px]'>
        <div className='flex items-center w-[800px] min-h-[522px] bg-white rounded-[24px]'>
          <Banner />
          <FormRenderer />
        </div>
        <CloseModal />
      </div>
    </div>
  )
}
