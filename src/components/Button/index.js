import './style.css';

const Button = (props) => {

    return(
        
        <button class="button" >
            {props.label}
        </button>
     
    )
}
export default Button;