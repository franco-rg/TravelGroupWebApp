const Header = ({
    title,
    breadcrums,
    data = {}
}) => {
    const pageItems = () => {
        const longitud = breadcrums.length;
        return breadcrums.map((item, index) =>
            <li key={item.id}>
                <a href={typeof (item.url) === 'function' ? item.url(data) : item.url} className="text-gray-400 no-underline mx-0 px-0 hover:text-gray-900 hover:no-underline hover:font-bold">
                    {((longitud - 1) != index && longitud > 1) ? (
                        <>
                            {item.name}
                            <span className="mx-1 font-medium hover:text-gray-400">/</span>
                        </>
                    ) : (
                        <>
                            {item.name}
                        </>
                    )}
                </a>
            </li>
        );
    }
    return (
        <div className="mx-3 mt-4 sm:mx-8 lg:mx-10 px-6 bg-white h-14 py-9 relative shadow-beautiful rounded-lg">
            {/* className= " bg-menu" */}
            <div className="h-full px-2 m-auto md:px-8 lg:px-5">
                <div className="flex flex-col-reverse items-center justify-center h-full gap-2 sm:flex-row sm:gap-0 sm:justify-between">
                    <div>
                        <ul className="flex items-center gap-1 breadcrumbs pull-left">
                            <li key="99"><h1 className="text-xl font-normal text-gray-700 select-none text lg:text-2xl montserrat mr-4">{title}</h1></li>
                            {breadcrums ? pageItems() : <></>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='absolute w-1.5 h-full top-0 left-0 py-4'>
                <div className='w-full h-full rounded-r-md' style={{background: '#BAD1CD'}}></div>
            </div>
        </div>
    );
}
export default Header;