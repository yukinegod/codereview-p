import Interviews from '@/pages/Interviews'

export default async function InterviewsPage({ searchParams }: any) {
  const pageNumber = searchParams.page
  return <Interviews pageNumber={pageNumber} />
}
