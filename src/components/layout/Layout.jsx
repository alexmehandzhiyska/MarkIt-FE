import Header from "./header/Header";
import Footer from "./footer/Footer";

import "./Layout.css";

const Layout = (props) => {
    return (
        <div className="content-wrapper">
            <Header></Header>

            <main>
                {props.children}
            </main>

            <Footer></Footer>
        </div>
    );
};

export default Layout;