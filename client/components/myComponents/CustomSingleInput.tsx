type CustomSingleInputProps = {
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const CustomSingleInput = ({
  type = "text",
  placeholder,
  className = "",
  name,
  value,
  onChange,
  onClick,
}: CustomSingleInputProps) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      onClick={onClick}
      className={`py-2 pl-4 pr-6 border-2 text-neutral-2 text-sm border-neutral-6 rounded-3xl w-full outline-none placeholder:text-neutral-4 placeholder:text-sm ${className}`}
      placeholder={placeholder}
    />
  );
};

export default CustomSingleInput;
