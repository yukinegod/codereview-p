import QuestionItem from './QuestionItem'
import AccessBanner from '@/widgets/AccessBanner/ui/AccessBanner'
import SophiPromoBlock from '@/shared/ui/SophiPromoBlock/SophiPromoBlock'
import { Fragment } from 'react'

type Props = {
  questions: any
}

export default function QuestionList({ questions }: Props) {
  return (
    <div className='relative flex flex-col gap-[10px] mt-[25px] w-[1020px]'>
      {questions &&
        questions.map((question: any, index: number) => (
          <Fragment key={question.id || index}>
            <QuestionItem
              question={question.question}
              stack={question.stack}
              frequency={question.freq}
              id={question.id}
            />
            {index === 2 && <SophiPromoBlock type='questions' />}
          </Fragment>
        ))}
      <AccessBanner type='interviews' />
    </div>
  )
}
