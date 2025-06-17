import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AlertBox } from './components/AlertBox/AlertBox';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';

function App() {
  const description = 'second edition playstation';
  const product = {name: 'Playstation'};
  const description2 = { name: 'Samsung'};
  const user = { name: 'John'};

  return (
    <div>
      <h1>AlertBox</h1>
      <AlertBox 
      type="warning" 
      message="This is a warning alert!" 
      children="Fix warning"/>

      <AlertBox 
      type="success" 
      message="This is a success alert!" 
      children="Great"/>

      <AlertBox 
      type="error" 
      message="This is an error alert" 
      children="error 123"/>

      <AlertBox 
      type="info" 
      message ="This is an info alert" 
      children="hello, the info will be sent to your gmail"/>

      <h1>Products</h1>
      <ProductDisplay
      product={product}
      showDescription={description}
      showStockStatus={true}/>

      <h1>Product</h1>
      <ProductDisplay
      product={description2}
      showDescription="Smart 4k TV"
      showStockStatus={false} />

      <h1>Profile</h1>
      <UserProfileCard
      user={user}
      showEmail={true}
      showRole={true} /> 

    </div>
  );
}


export default App;