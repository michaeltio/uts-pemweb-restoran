import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="bg-white rounded-lg shadow-xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>

                    <form onSubmit={submit}>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                        <PrimaryButton
                            className="mt-4 justify-center w-full bg-primary-600 hover:bg-primary-700 ring-1 focus:outline-none ring-slate-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            disabled={processing}
                        >
                            <div className="flex items-center justify-center">
                                Email Password Rest link
                            </div>
                        </PrimaryButton>
                        <p className="mt-4 text-sm font-light text-gray-500">
                            Already have an account?{" "}
                            <Link
                                href={route("login")}
                                className="font-medium text-primary-600 hover:underline"
                            >
                                Login here
                            </Link>
                        </p>
                        <p className="mt-4 text-sm font-light text-gray-500">
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
