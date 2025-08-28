export default function Button({type="button", className, text="", icon=null, ...props}){
    
    return (
        <button
            type={type}
            className={className}
            {...props}
        >
            {icon} {text}
        </button>
    )
}