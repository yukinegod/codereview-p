export type CategoryType =
  | 'Python'
  | 'Java'
  | 'JavaScript'
  | 'Data Science'
  | 'QA'
  | 'C#'

export interface IUseRecruitmentHoverStore {
  isHovered: boolean
  setHovered: (state: boolean) => void
}

export type TopMenuType = 'main' | 'secondary' | 'arrow'
