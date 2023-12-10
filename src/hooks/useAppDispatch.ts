import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/redux/store'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
