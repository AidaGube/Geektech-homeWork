import './App.css';
import Header from './components/Header/Header';
import Text from './components/Text/Text';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Text />
        <div className='card'>
          <Card title={'Chinese tech'} p={'Investment bank China Renaissance '} />
          <Card title={'Investment bank China Renaissance '} p={'Investment bank China Renaissance '} />
          <Card title={'goes missing: company'} p={'Investment bank China Renaissance '} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
