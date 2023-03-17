import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='parentBox'>
      <ImageProduct />
      <DescriptionProduct category="Abrak" title="Gelas Aesthetic" price="100.000.000"/>
    </div>
  );
}

function ImageProduct() {
  return (
      <div className='imgBox'>
        <img src='img1.png'></img>
      </div>
  );
}

function DescriptionProduct(props) {
  const {category, title, price} = props;

  return (
      <div className='descBox'>
        <div className='descBody'>
          <div>
            <h3 className='descCate'>{category}</h3>
            <h1 className='descTitle'>{title}</h1>
            <h3 className='descPrice'>IDR {price},00.-</h3>
          </div>
          <div style={{ borderBottom: "2px solid #000 ", marginLeft: 20, marginRight: 20 }}></div>
          <p className='descInfo'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et augue tempor, bibendum mi vel, maximus dolor.
            Proin quis interdum sapien. Aliquam nec semper tellus. Praesent pellentesque tempus lacus, quis vehicula diam pharetra vel.
            Fusce dictum nisi enim, non venenatis urna gravida in.
          </p>
        </div>
        <div className='descFoot'>
          <button className='descBuy'>Buy</button>
        </div>
      </div>
  );
}

export default App;
