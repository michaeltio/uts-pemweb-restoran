import Categories from "@/Components/Home/Categories";
import Footer from "@/Components/Home/Footer";
import Greetings from "@/Components/Home/Greetings";
import Opening from "@/Components/Home/Opening";
import View from "@/Components/Home/View";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    let isAdmin = 0;

    if (auth && auth.user && "isAdmin" in auth.user) {
        isAdmin = auth.user.isAdmin;
    } else {
        isAdmin = 0;
    }

    return (
        <>
            <Head title="Sushi King" />
            <div>
                <Navbar loggedIn={auth.user} isAdmin={isAdmin} />

                <Opening />

                <div className="-mt-20">
                    <Greetings />
                </div>

                <div className="mb-24 mx-56 h-56 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-20">
                    <Categories />
                </div>

                <View />

                <Footer />
            </div>
        </>
    );
}
