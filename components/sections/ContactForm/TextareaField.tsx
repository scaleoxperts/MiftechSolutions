import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "400" });

interface TextareaFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    required?: boolean;
    error?: string;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
    label,
    name,
    value,
    onChange,
    onBlur,
    rows = 5,
    required = false,
    error,
}) => (
    <div>
        <label className={`block text-sm font-semibold text-[var(--dark-gray)] mb-2 ${lato.className}`}>
            {label}
        </label>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            rows={rows}
            required={required}
            className={`w-full rounded-lg border px-4 py-3 text-[var(--dark-gray)] focus:outline-none focus:ring-2 transition-all resize-vertical ${error
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