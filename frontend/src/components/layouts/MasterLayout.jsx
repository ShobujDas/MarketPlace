import NavBar from "../NavBar";
import Footer from '../Footer';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { FaXmark } from "react-icons/fa6";


const MasterLayout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />

      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button onClick={() => toast.dismiss(t.id)} className="btn border-0 shadow-0 p-1 btn-sm fs-4"><FaXmark /></button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>

    </>
  );
};

export default MasterLayout;