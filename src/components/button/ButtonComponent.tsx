import Button from 'react-bootstrap/Button';

// model
import {IButton} from '../../models/IButton'
const ButtonComponent = ({text,actionColor,variant,typeButton,onClick,...rest}:IButton)=>{
    return (
        <Button {...rest} onClick={onClick} style={{width:"100px",height:"100px",borderRadius:typeButton?"none":"50%",border:actionColor?"5px solid #c0392b":"none"}} variant={variant}>{text}</Button>
    )
}
export default ButtonComponent