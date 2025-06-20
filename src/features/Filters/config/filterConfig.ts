export const VACANCIES_FILTERS = [
  {
    id: 'speciality',
    label: 'auto',
    type: 'dropdown',
    options: ['Python', 'Java', 'JavaScript', 'Data Science', 'QA', 'C#'],
  },
  {
    id: 'source',
    label: 'Источник',
    type: 'dropdown',
    options: ['Hh.ru', 'Habr Career', 'Linkedin'],
  },
  {
    id: 'location',
    label: 'Город',
    type: 'dropdown',
    options: [
      'Andrewchester',
      'Williamsville',
      'Saint Petersburg',
      'Nizhny Novgorod',
      'Omsk',
      'Krasnoyarsk',
      'Samara',
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
