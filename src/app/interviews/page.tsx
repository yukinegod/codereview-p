import Interviews from '@/pages/Interviews'

type PageProps = {
  searchParams: Promise<{ page?: string }>
}

export default async function InterviewsPage({ searchParams }: PageProps) {
  const { page } = await searchParams
  return <Interviews pageNumber={page} />
}
