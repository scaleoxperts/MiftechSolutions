"use client";
import axios from "axios";
import { motion } from "motion/react";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";
import { FormDataSchema } from "./validationSchema";

const lato = Lato({ subsets: ["latin"], weight: "400" });

interface ContactFormProps {
    currentRoute: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
}

export function ContactForm({ currentRoute }: ContactFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        currentRoute
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState<FormErrors>({});

    const validateField = (name: string, value: string) => {
        try {
            const fieldSchema = FormDataSchema.pick({ [name]: true } as Record<string, true>);
            fieldSchema.parse({ [name]: value });
            setFieldErrors(prev => ({ ...prev, [name]: undefined }));
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldError = error.issues[0]?.message;
                setFieldErrors(prev => ({ ...prev, [name]: fieldError }));
            }
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (fieldErrors[name as keyof FormErrors]) {
            validateField(name, value);
        }
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const validateForm = (): boolean => {
        try {
            FormDataSchema.parse(formData);
            setFieldErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors: FormErrors = {};
                error.issues.forEach((issue) => {
                    if (issue.path[0]) {
                        errors[issue.path[0] as keyof FormErrors] = issue.message;
                    }
                });
                setFieldErrors(errors);
                return false;
            }
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!validateForm()) {
            setError("Please correct the errors below");
            return;
        }

        setLoading(true);

        try {
            const validatedData = FormDataSchema.parse(formData);

            const res = await axios.post('/api/save-form', validatedData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = res.data;

            if (res.status >= 200 && res.status < 300) {
                if (data.success) {
                    await axios.post('/api/send-mail', {
                        recipientEmail: formData.email,
                        recipientName: formData.name
                    });
                    
                    setFormData({ name: "", phone: "", email: "", message: "", currentRoute });
                    setFieldErrors({});
                    router.push('/thank-you');
                } else {
                    setError(data.error || "Unknown error.");
                }
            } else {
                console.error("Server error:", data);
                setError(data.error || "Something went wrong.");
            }
        } catch (err: unknown) {
            console.error("Fetch error:", err);
            const errorMessage = err instanceof Error ? err.message : "Failed to submit form.";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
        >
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm text-center">{error}</p>
                </div>
            )}

            <InputField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={fieldErrors.name}
            />

            <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={fieldErrors.phone}
            />

            <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={fieldErrors.email}
            />

            <TextareaField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                error={fieldErrors.message}
            />

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`w-full bg-[#087dc0] text-white font-semibold py-4 rounded-lg shadow-lg transition-all hover:shadow-xl hover:bg-[#076ba8] ${loading ? "opacity-70 cursor-not-allowed" : ""} ${lato.className}`}
            >
                {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                    </div>
                ) : (
                    "Request a Quote"
                )}
            </motion.button>
        </form>
    );
}