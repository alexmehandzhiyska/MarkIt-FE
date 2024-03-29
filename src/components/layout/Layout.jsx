import Header from "./header/Header";

import "./Layout.css";

const Layout = (props) => {
    return (
        <div className="content-wrapper">
            <Header></Header>

            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;