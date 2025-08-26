function InputField({type="text", placeholder, className, label, ...props}){

    return (
        <>
        <label className="block text-white font-medium mb-2">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full px-4 py-3 border border-gray-600 bg-gray-900/70 text-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${className}`}
            {...props}
        />
        </>
    )
}

export default InputField