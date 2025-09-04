interface Props {
  value: string;
  handleInputChange: (value: string) => void;
  textArea?: boolean;
  label: string;
}

const TextInput = ({ value, handleInputChange, textArea, label }: Props) => {
  const InputComponent = textArea ? "textarea" : "input";
  return (
    <div className="relative">
      <InputComponent
        {...(!textArea && { type: "text" })}
        value={value}
        onChange={({ target }) => handleInputChange(target.value)}
        className="w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none dark:bg-gray-800/50 dark:border-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:bg-gray-800/70 bg-white/80 border-gray-300 text-gray-900 focus:border-blue-600 focus:bg-white"
      />
      <label className="text-sm absolute left-4 top-2 pointer-events-none origin-left text-gray-600 dark:text-gray-400">
        {label}
      </label>
    </div>
  );
};

export default TextInput;
