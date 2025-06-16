import Question from '@/pages/Question'

type Params = Promise<{ id: string }>

export default async function QuestionPage({ params }: { params: Params }) {
  const { id } = await params
  return <Question id={id} />
}
