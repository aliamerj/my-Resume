import Content from "./components/contents/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "MintCream" }}>
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
