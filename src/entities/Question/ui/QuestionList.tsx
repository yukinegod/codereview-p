import { fetchQuestions } from '@/shared/api/questions/fetchQuestions'
import QuestionItem from './QuestionItem'

export default async function QuestionList() {
  const questions = await fetchQuestions()
  return (
    <div className='flex flex-col gap-[10px] mt-[25px] w-[1020px]'>
      {questions &&
        questions.map((question: any, index: number) => (
          <QuestionItem
            question={question.question}
            stack={question.stack}
            frequency={question.freq}
            id={question.id}
            key={index}
          />
        ))}
    </div>
  )
}
