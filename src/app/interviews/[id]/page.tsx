import Question from '@/pages/Question'

export default async function QuestionPage({
  params,
}: {
  params: { id: string }
}) {
  const id = params.id
  return <Question id={id} />
}
