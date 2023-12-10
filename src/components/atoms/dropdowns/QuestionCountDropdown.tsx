import { Dispatch, SetStateAction } from 'react'
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { NUMBER_OF_MENU_ITEMS } from 'src/constants/datas'

interface QuestionCountDropdownChildProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const QuestionCountDropdown = (props: QuestionCountDropdownChildProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.setValue(event.target.value)
  }
  return (
    <>
      <InputLabel id="demo-select-small-label">문항 갯수</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="문항 갯수"
        value={props.value}
        onChange={handleChange}
        defaultValue={NUMBER_OF_MENU_ITEMS[0].label}
      >
        {NUMBER_OF_MENU_ITEMS.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}

export default QuestionCountDropdown
