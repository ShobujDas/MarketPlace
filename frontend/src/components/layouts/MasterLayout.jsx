import NavBar from './../NavBar';
import Footer from './../Footer';

const MasterLayout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default MasterLayout;