import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import DateInput from "@/Components/DateInput";
import GenderInput from "@/Components/GenderInput";
import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: "",
        lastName: "",
        birthdate: "",
        gender: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="bg-white rounded-lg shadow-xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Create Your Free Account
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
                            <InputLabel
                                htmlFor="firstName"
                                value="First Name"
                            />

                            <TextInput
                                id="firstName"
                                name="firstName"
                                value={data.firstName}
                                className="mt-1 block w-full"
                                autoComplete="firstName"
                                isFocused={true}
                                placeholder="First Name"
                                required
                                onChange={(e) =>
                                    setData("firstName", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.firstName}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="lastName" value="Last Name" />

                            <TextInput
                                id="lastName"
                                name="lastName"
                                value={data.lastName}
                                className="mt-1 block w-full"
                                autoComplete="lastName"
                                isFocused={true}
                                placeholder="Last Name"
                                onChange={(e) =>
                                    setData("lastName", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.lastName}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="birthdate" value="Birthdate" />

                            <DateInput
                                id="birthdate"
                                name="birthdate"
                                value={data.birthdate}
                                className="mt-1 block w-full"
                                autoComplete="off"
                                isFocused={true}
                                required
                                onChange={(e) =>
                                    setData("birthdate", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.birthdate}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="gender" value="Gender" />

                            <GenderInput
                                id="gender"
                                name="gender"
                                value={data.gender}
                                className="mt-1 block w-full"
                                autoComplete="off"
                                isFocused={true}
                                required
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.gender}
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
                                autoComplete="new-password"
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
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                placeholder="••••••••"
                                required
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                        <PrimaryButton
                            className="justify-center w-full bg-primary-600 hover:bg-primary-700 ring-1 focus:outline-none ring-slate-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            disabled={processing}
                        >
                            <div className="flex items-center justify-center">
                                Create an account
                            </div>
                        </PrimaryButton>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account?{" "}
                            <Link
                                href={route("login")}
                                className="font-medium text-primary-600 hover:underline"
                            >
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            {/*
            Default Format
            <form onSubmit={submit}>
                
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor="firstName" value="First Name" />

                    <TextInput
                        id="firstName"
                        name="firstName"
                        value={data.firstName}
                        className="mt-1 block w-full"
                        autoComplete="firstName"
                        isFocused={true}
                        onChange={(e) => setData('firstName', e.target.value)}
                        required
                    />

                    <InputError message={errors.firstName} className="mt-2" />
                </div>
                
                <div className='mt-4'>
                    <InputLabel htmlFor="lastName" value="Last Name" />

                    <TextInput
                        id="lastName"
                        name="lastName"
                        value={data.lastName}
                        className="mt-1 block w-full"
                        autoComplete="lastName"
                        isFocused={true}
                        onChange={(e) => setData('lastName', e.target.value)}
                    />

                    <InputError message={errors.lastName} className="mt-2" />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor="birthdate" value="Birthdate" />

                    <DateInput
                        id="birthdate"
                        name="birthdate"
                        value={data.birthdate}
                        className="mt-1 block w-full"
                        autoComplete="off"
                        isFocused={true}
                        onChange={(e) => setData('birthdate', e.target.value)}
                        required
                    />

                    <InputError message={errors.birthdate} className="mt-2" />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor="gender" value="Gender" />

                    <GenderInput
                        id="gender"
                        name="gender"
                        value={data.gender}
                        className="mt-1 block w-full"
                        autoComplete="off"
                        isFocused={true}
                        onChange={(e) => setData('gender', e.target.value)}
                        required
                    />

                    <InputError message={errors.gender} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Sign Up
                    </PrimaryButton>
                </div>
            </form> */}
        </GuestLayout>
    );
}
