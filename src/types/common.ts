export type DictionaryType<
  KeyType extends string | number | symbol,
  ValueType
> = {
  [key in KeyType]: ValueType
}
export interface LabelValueCommonInterface<ValueType> {
  label: string
  value: ValueType
}

export type AuthProviderType = 'GOOGLE' | 'KAKAO' | 'NAVER'
