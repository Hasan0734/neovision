import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props: any) => {
  const children: any = props.children;
  return (
    <>
      <Navbar tabActive={props.tabActive} navTitle={props.navTitle} />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-9">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
