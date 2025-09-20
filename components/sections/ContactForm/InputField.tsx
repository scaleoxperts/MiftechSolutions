import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "400" });

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    required?: boolean;
    error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    type,
    value,
    onChange,
    onBlur,
    required = false,
    error,
}) => (
    <div>
        <label className={`block text-sm font-semibold text-[var(--dark-gray)] mb-2 ${lato.className}`}>
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            className={`w-full rounded-lg border px-4 py-3 text-[var(--dark-gray)] focus:outline-none focus:ring-2 transition-all ${error
                    ? "border-red-300 focus:ring-red-500 bg-red-50"
                    : "border-gray-300 focus:ring-[#087dc0]"
                } ${lato.className}`}
        />
        {error && (
            <p className={`mt-1 text-sm text-red-600 ${lato.className}`}>
                {error}
            </p>
        )}
    </div>
);