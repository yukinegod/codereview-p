// export const API_URL = 'http://jobs.yourcodereview.com:8005'
export const API_URL = 'http://localhost:3001'

export const VACANCIES_TITLE = 'Вакансии по'
export const VACANCIES_SUBTITLE =
  'На этой странице агрегируются junior-вакансии и стажировки из различных источников: hh.ru, Habr Career, LinkedIn, Telegram-каналы и многие другие'

export const INTERVIEWS_TITLE_FIRST = 'Вопросы по'
export const INTERVIEWS_TITLE_SECOND = 'на собеседовании'
export const INTERVIEWS_SUBTITLE =
  'Раздел помогает пользователям подготовиться к техническим и поведенческим интервью. Здесь собраны реальные вопросы, которые задают работодатели, а также готовые ответы и пояснения. Вопросы сгруппированы по стеку и уровню сложности'

export const VACANCIES_SEO_TAGS = {
  default: [
    { label: 'стажировка без опыта', id: 0 },
    { label: 'вакансии джуниор', id: 1 },
    { label: 'как откликнуться на вакансию', id: 2 },
    { label: 'примеры вакансий junior', id: 3 },
  ],
  withFilter: [
    {
      label: 'стажировки по Python',
      id: 0,
      filter: 'Python',
    },
    {
      label: 'стажировки по Java',
      id: 1,
      filter: 'Java',
    },
    {
      label: 'стажировки по JavaScript',
      id: 2,
      filter: 'JavaScript',
    },
    {
      label: 'стажировки по Data Science',
      id: 3,
      filter: 'Data Science',
    },
    {
      label: 'стажировки по QA',
      id: 4,
      filter: 'QA',
    },
    {
      label: 'стажировки по C#',
      id: 5,
      filter: 'C#',
    },
    {
      label: 'Junior Python Developer',
      id: 6,
      filter: 'Python',
    },
    {
      label: 'Junior Java Developer',
      id: 7,
      filter: 'Java',
    },
    {
      label: 'Junior JavaScript Developer',
      id: 8,
      filter: 'JavaScript',
    },
    {
      label: 'Junior Data Science',
      id: 9,
      filter: 'Data Science',
    },
    {
      label: 'Junior QA',
      id: 10,
      filter: 'QA',
    },
    {
      label: 'Junior C# Developer',
      id: 11,
      filter: 'C#',
    },
    {
      label: 'Вакансии Python без опыта',
      id: 12,
      filter: 'Python',
    },
    {
      label: 'Вакансии Java без опыта',
      id: 13,
      filter: 'Java',
    },
    {
      label: 'Вакансии JavaScript без опыта',
      id: 14,
      filter: 'JavaScript',
    },
    {
      label: 'Вакансии Data Science без опыта',
      id: 15,
      filter: 'Data Science',
    },
    {
      label: 'Вакансии QA без опыта',
      id: 16,
      filter: 'QA',
    },
    {
      label: 'Вакансии C# без опыта',
      id: 17,
      filter: 'C#',
    },
    {
      label: 'Python FastAPI вакансии',
      id: 18,
      filter: 'Python',
    },
    {
      label: 'Java Spring Boot вакансии',
      id: 19,
      filter: 'Java',
    },
    {
      label: 'JavaScript Node.js вакансии',
      id: 20,
      filter: 'JavaScript',
    },
    {
      label: 'Data Science TensorFlow вакансии',
      id: 21,
      filter: 'Data Science',
    },
    {
      label: 'QA Selenium вакансии',
      id: 22,
      filter: 'QA',
    },
    {
      label: 'C# .NET Core вакансии',
      id: 23,
      filter: 'C#',
    },
  ],
}

export const INTERVIEWS_SEO_TAGS = {
  default: [
    {
      label: 'вопросы на собеседовании junior разработчик',
      id: 0,
    },
    {
      label: 'технические вопросы фронтенд',
      id: 1,
    },
    {
      label: 'в вопросы в Яндекс собеседование',
      id: 2,
    },
    {
      label: 'частые вопросы на собеседовании',
      id: 3,
    },
  ],
  withFilter: [
    {
      label: 'вопросы по Python на собеседовании',
      id: 0,
      filter: 'Python',
    },
    {
      label: 'вопросы по Java на собеседовании',
      id: 1,
      filter: 'Java',
    },
    {
      label: 'вопросы по JavaScript на собеседовании',
      id: 2,
      filter: 'JavaScript',
    },
    {
      label: 'вопросы по Data Science на собеседовании',
      id: 3,
      filter: 'Data Science',
    },
    {
      label: 'вопросы по QA на собеседовании',
      id: 4,
      filter: 'QA',
    },
    {
      label: 'вопросы по C# на собеседовании',
      id: 5,
      filter: 'C#',
    },

    {
      label: 'вопросы по Python для собеседования',
      id: 6,
      filter: 'Python',
    },
    {
      label: 'вопросы по Java для собеседования',
      id: 7,
      filter: 'Java',
    },
    {
      label: 'вопросы по JavaScript для собеседования',
      id: 8,
      filter: 'JavaScript',
    },
    {
      label: 'вопросы по Data Science для собеседования',
      id: 9,
      filter: 'Data Science',
    },
    {
      label: 'вопросы по QA для собеседования',
      id: 10,
      filter: 'QA',
    },
    {
      label: 'вопросы по C# для собеседования',
      id: 11,
      filter: 'C#',
    },
  ],
}

export const VACANCY_SEO_TAGS = {
  default: [
    { label: 'вакансии джуниор', id: 0 },
    { label: 'как откликнуться на вакансию', id: 1 },
    { label: 'примеры вакансий junior', id: 2 },
  ],
  withFilter: [
    {
      label: 'вакансии по Python',
      id: 0,
      filter: 'Python',
    },
    {
      label: 'вакансии по Java',
      id: 1,
      filter: 'Java',
    },
    {
      label: 'вакансии по JavaScript',
      id: 2,
      filter: 'JavaScript',
    },
    {
      label: 'вакансии по Data Science',
      id: 3,
      filter: 'Data Science',
    },
    {
      label: 'вакансии по QA',
      id: 4,
      filter: 'QA',
    },
    {
      label: 'вакансии по C#',
      id: 5,
      filter: 'C#',
    },
    {
      label: 'стажировки по Python',
      id: 6,
      filter: 'Python',
    },
    {
      label: 'стажировки по Java',
      id: 7,
      filter: 'Java',
    },
    {
      label: 'стажировки по JavaScript',
      id: 8,
      filter: 'JavaScript',
    },
    {
      label: 'стажировки по Data Science',
      id: 9,
      filter: 'Data Science',
    },
    {
      label: 'стажировки по QA',
      id: 10,
      filter: 'QA',
    },
    {
      label: 'стажировки по C#',
      id: 11,
      filter: 'C#',
    },
  ],
}

export const QUESTION_SEO_TAGS = {
  default: [
    { label: 'как отвечать на вопрос', id: 0 },
    { label: 'пример собеседования', id: 1 },
    { label: 'фреймворки на собеседовании', id: 2 },
    { label: 'типичные вопросы junior', id: 3 },
    { label: 'интервью вопросы и ответы', id: 4 },
  ],
}
