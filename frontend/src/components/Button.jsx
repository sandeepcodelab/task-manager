export default function Button({type="button", className, text, ...props}){
    
    return (
        <button
            type={type}
            className={className}
            {...props}
        >
            {text}
        </button>
    )
}