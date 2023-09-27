//import './../Assets/css/main.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

function Layout({children}) {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
