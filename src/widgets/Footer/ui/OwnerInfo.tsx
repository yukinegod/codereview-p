import Copyright from './Copyright'
import styles from './styles.module.css'

export default function OwnerInfo() {
  return (
    <div className='flex justify-between w-full h-[40px]'>
      <div className='w-[320px]'>
        <p className={`text-[#86888E] text-[16px] ${styles.ownerText}`}>
          ИП Примак Максим Андреевич ИНН 772142877813 ОГРН 322774600410191
        </p>
      </div>
      <Copyright />
    </div>
  )
}
