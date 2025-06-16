export const VACANCIES_FILTERS = [
  {
    id: 'category',
    label: 'auto',
    type: 'dropdown',
    options: ['Python', 'Java', 'JavaScript', 'Data Science', 'QA', 'C#'],
  },
  {
    id: 'source',
    label: 'Источник',
    type: 'dropdown',
    options: ['HH', 'Habr Career', 'LinkedIn'],
  },
  {
    id: 'city',
    label: 'Город',
    type: 'dropdown',
    options: [
      'Москва',
      'Санкт-Петербург',
      'Нижний Новгород',
      'Омск',
      'Красноярск',
      'Самара',
    ],
  },
  {
    id: 'remote',
    label: 'Удаленно',
    type: 'switch',
  },
  {
    id: 'internship',
    label: 'Стажировка',
    type: 'switch',
  },
]

export const INTERVIEWS_FILTERS = [
  {
    id: 'category',
    label: 'auto',
    type: 'dropdown',
    options: ['Python', 'Java', 'JavaScript', 'Data Science', 'QA', 'C#'],
  },
  {
    id: 'stack',
    label: 'Стек',
    type: 'dropdown',
    options: ['Vue', 'React', 'Angular'],
  },
  {
    id: 'grade',
    label: 'Грейд',
    type: 'dropdown',
    options: ['Trainee', 'Junior', 'Middle', 'Senior'],
  },
]
