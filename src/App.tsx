import Content from "./sections/Content";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import "./styles/style.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <br />
        <hr />
        <Content />
        <br />
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default App;
