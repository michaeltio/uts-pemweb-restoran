import Drawing from "../../../public/images/assets/drawing.png";
import Logo from "../../../public/images/assets/temp.png";

export default function Guest({ children }) {
    return (
        <section className="mont-font relative">
            <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="hidden md:block w-1/2">
                    <img
                        className="absolute top-12 left-10 z-0 w-3/6 grayscale opacity-30"
                        src={Drawing}
                        alt="drawing"
                    />
                </div>
                <div className="w-full md:w-1/2 sm:max-w-md xl:p-0">
                    <a
                        href="/"
                        className="flex justify-center mb-6 text-2xl font-semibold text-gray-900"
                    >
                        <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
                        Sushi King
                    </a>
                    {children}
                </div>
            </div>
        </section>
    );
}
