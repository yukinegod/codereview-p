import Interviews from '@/pages/Interviews'

interface PageProps {
  searchParams: {
    page?: string
  }
}

export default async function InterviewsPage({ searchParams }: PageProps) {
  return <Interviews pageNumber={searchParams.page} />
}
