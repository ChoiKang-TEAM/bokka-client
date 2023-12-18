import { LabelValueCommonInterface } from 'src/types'

export const DEFAULT_WEB_SITE_NAME = 'MYEONJEOB_BOKKA'

export const NUMBER_OF_MENU_ITEMS: LabelValueCommonInterface<string>[] =
  Array.from({ length: 5 }, (_, i) => {
    const value = (i + 1) * 10
    return {
      value: value.toString(),
      label: `${value}개`,
    }
  })
