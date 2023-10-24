export default function ViewItem({ source, name }) {
    return (
        <div data-aos="zoom-in" className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
                <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg h-56 object-cover object-center mb-2 overflow:hidden"
                    src={source}
                />
                <div className="w-full">
                    <h2 className="title-font font-medium text-lg">{name}</h2>
                </div>
            </div>
        </div>
    );
}
