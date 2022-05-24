import NavMenu from './NavMenu';

const Layout = ({ children }) => {
    return (
        <div>
            <NavMenu></NavMenu>
            <div className="content-page relative transition-all duration-300 ease-in-out h-screen">
                {children}
            </div>
        </div>
    )
}

export default Layout;