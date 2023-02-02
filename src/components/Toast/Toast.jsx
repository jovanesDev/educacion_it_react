import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import  Swal  from 'sweetalert2'
import { toastOffFn } from '../../redux/actions/layoutActions'

const Toast = ({titulo}) => {

    const {visible} = useSelector(store => store.layout.toast)

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(toastOffFn())
        }, 2000);
      }, []);

    
    if(visible) {
       return  <h1>{titulo}</h1>
    }

    return null

  
}

export default Toast