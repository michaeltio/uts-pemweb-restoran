import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
        captcha: "",
    });

    const [captcha, setCaptcha] = useState("");
    const [captchaIncorrect, setCaptchaIncorrect] = useState(false);

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    useEffect(() => {
        const code = generateRandomCode(5);
        setCaptcha(code);
    }, []);

    const submit = (e) => {
        e.preventDefault();
        const captchaInput = data.captcha;
        if (captchaInput === captcha) {
            post(route("login"));
        } else {
            //console.log("Captcha is incorrect. Please try again.");
            setCaptchaIncorrect(true);
            setTimeout(() => {
                setCaptchaIncorrect(false);
                resetForm();
            }, 2000);
        }
    };

    function generateRandomCode(length) {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let code = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        return code;
    }

    function resetForm() {
        setData("email", "");
        setData("password", "");
        setData("captcha", "");
    }

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="bg-white rounded-lg shadow-xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                placeholder="name@company.com"
                                required
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                placeholder="••••••••"
                                required
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel
                                htmlFor="captcha"
                                value={`Please enter the following CAPTCHA: ${captcha}`}
                            />
                            <TextInput
                                id="captcha"
                                type="text"
                                name="captcha"
                                className="mt-1 block w-full"
                                autoComplete="off"
                                required
                                onChange={(e) =>
                                    setData("captcha", e.target.value)
                                }
                            />
                            {captchaIncorrect && (
                                <p className="text-red-500">
                                    Incorrect CAPTCHA. Please try again.
                                </p>
                            )}
                        </div>
                        <div className="flex justify-between block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ml-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="w-full justify-center bg-primary-600 hover:bg-primary-700 ring-1 focus:outline-none ring-slate-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                disabled={processing}
                            >
                                <div className="flex items-center justify-center">
                                    Sign In
                                </div>
                            </PrimaryButton>
                        </div>
                        <p className="text-sm font-light text-gray-500">
                            Don't have an account yet?{" "}
                            <Link
                                href={route("register")}
                                className="font-medium text-primary-600 hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
