const getVacancyId = (params: string) =>
  Number(params.split('-')[params.split('-').length - 1])

export default getVacancyId
