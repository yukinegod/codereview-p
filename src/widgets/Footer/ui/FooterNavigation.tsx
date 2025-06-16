import { FIRST_COLUMN_ITEMS, SECOND_COLUMN_ITEMS } from '../config/config'
import NavList from './NavList'
import NavLink from './NavLink'
import TestBlock from './TestBlock'

export default function FooterNavigation() {
  return (
    <nav
      aria-label='Навигация в футере'
      className='flex gap-[50px] h-[158px] w-[947px] z-10'
    >
      <NavList>
        {FIRST_COLUMN_ITEMS.map((item) => (
          <li key={item.id}>
            <NavLink to={item.to} text={item.text} />
          </li>
        ))}
      </NavList>

      <NavList>
        {SECOND_COLUMN_ITEMS.map((item) => (
          <li key={item.id}>
            <NavLink to={item.to} text={item.text} />
          </li>
        ))}
      </NavList>

      <TestBlock />
    </nav>
  )
}
