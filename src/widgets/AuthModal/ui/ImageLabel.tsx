import clsx from 'clsx'

type Props = {
  label: string
  rotate?: string
  position?: string
}

export default function ImageLabel({ label, rotate, position }: Props) {
  return (
    <div
      className={clsx(
        'absolute flex items-center justify-center px-[5px] py-[2px] bg-[#0560C9]/95 rounded-[6px]',
        rotate,
        position
      )}
    >
      <p className='text-white text-[16px] font-medium leading-[20px] tracking-[-1px]'>
        {label}
      </p>
    </div>
  )
}
