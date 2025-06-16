import Question from '@/pages/Question'

interface PageProps {
  params: {
    id: string
  }
}

export default function QuestionPage({ params }: { params: { id: string } }) {
  return <Question params={params} />
}
