import { FIRST_COLUMN_ITEMS, SECOND_COLUMN_ITEMS } from '../config/config'
import NavList from './NavList'
import NavLink from './NavLink'
import TestBlock from './TestBlock'

export default function FooterNavigation() {
  return (
    <div className='flex gap-[50px] h-[158px] w-[947px] z-10'>
      <NavList>
        {FIRST_COLUMN_ITEMS.map((item) => (
          <NavLink to={item.to} text={item.text} key={item.id} />
        ))}
      </NavList>
      <NavList>
        {SECOND_COLUMN_ITEMS.map((item) => (
          <NavLink to={item.to} text={item.text} key={item.id} />
        ))}
      </NavList>
      <TestBlock />
    </div>
  )
}
