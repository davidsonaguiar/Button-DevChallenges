import './styles.css'

function Button({ 
    variant = 'default', 
    disabled = false,
    startIcon = false,
    endIcon = false,
    disableShadow,
    color = 'no-color',
    size = 'md',
    children
}) {

    const buttonIcon = () => startIcon || endIcon? 'buttonIcon': '';
    const noShadow = () => disableShadow? 'no-shadow': '';

    return(
        <button 
            className={`${variant} ${buttonIcon()} ${noShadow()} ${color} ${size}`} 
            disabled={disabled}>
            {startIcon && <span className="material-icons md-36">{startIcon}</span>}   
            {children}
            {endIcon && <span className="material-icons md-36">{endIcon}</span>}   
        </button>
    )
}

export default Button;