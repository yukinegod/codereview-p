import Question from '@/pages/Question'

export default function QuestionPage({ params }: { params: { id: string } }) {
  return <Question params={params} />
}
