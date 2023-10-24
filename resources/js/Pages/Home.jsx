import Categories from "@/Components/Home/Categories";
import Footer from "@/Components/Home/Footer";
import Greetings from "@/Components/Home/Greetings";
import Opening from "@/Components/Home/Opening";
import View from "@/Components/Home/View";
import Navbar from "@/Layouts/Navbar";
import { Head } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Welcome({ auth }) {
    let isAdmin = 0;

    if (auth && auth.user && "isAdmin" in auth.user) {
        isAdmin = auth.user.isAdmin;
    } else {
        isAdmin = 0;
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Head title="Sushi King" />
            <div className="bg-white">
                <Navbar loggedIn={auth.user} isAdmin={isAdmin} />

                <Opening />

                <Greetings />

                <Categories />

                <View />

                <Footer />
            </div>
        </>
    );
}
