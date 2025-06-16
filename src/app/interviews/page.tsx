import Interviews from '@/pages/Interviews'

type SearchParams = Promise<{ page?: string }>

export default async function InterviewsPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { page } = await searchParams
  const pageNumber = page
  return <Interviews pageNumber={pageNumber} />
}
