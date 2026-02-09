const InputField = ({ label, value, setValue, type = "text", placeholder = "" }) => (
  <div className="space-y-1">
    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide">
      {label}
    </label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      className="w-full px-4 py-2.5 rounded-xl bg-[#050810] border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none transition"
    />
  </div>
);

export default InputField;
