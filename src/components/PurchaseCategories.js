import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Button, ButtonGroup } from 'react-bootstrap';

const PurchaseCategories = (props) => {
  const { setCategory } = props;
  const { jumbotronStyle } = styles;
  
  return (
    <div>
      <Jumbotron style={jumbotronStyle}>
        <h2>Select Your Category</h2>

        <ButtonGroup bsSize="large">
          <Button onClick={ () => setCategory('dining')}><span className="fa fa-cutlery"> Dining</span></Button>
          <Button onClick={ () => setCategory('airfare')}><span className="fa fa-plane"> Airfare</span></Button>
          <Button onClick={ () => setCategory('hotels')}><span className="fa fa-hotel"> Hotels</span></Button>
        </ButtonGroup>

        <br />
        <br />

        <ButtonGroup bsSize="large">
          <Button onClick={ () => setCategory('ground_transportation')}><span className="fa fa-train"> Ground Transportation</span></Button>            
          <Button onClick={ () => setCategory('gas') }><span className="fa fa-car"> Gas</span></Button>          
        </ButtonGroup>

        <br />
        <br />

        <ButtonGroup bsSize="large">
          <Button onClick={ () => setCategory('amazon')}><span className="fa fa-amazon"> Amazon</span></Button>
          <Button onClick={ () => setCategory('wholesale_clubs')}><span className="fa fa-gift"> Wholesale Clubs</span></Button>      
        </ButtonGroup>

        <br />
        <br />

        <ButtonGroup bsSize="large">
          <Button onClick={ () => setCategory('groceries')}><span className="fa fa-shopping-cart"> Groceries</span></Button>
          <Button onClick={ () => setCategory('department_stores')}><span className="fa fa-shopping-bag"> Department Stores</span></Button>
        </ButtonGroup>

        <br />
        <br />

        <ButtonGroup bsSize="large">
          <Button onClick={ () => setCategory('entertainment')}><span className="fa fa-film"> Entertainment</span></Button>            
          <Button onClick={ () => setCategory('drug_stores')}><span className="fa fa-medkit"> Drug Stores</span></Button>
        </ButtonGroup>

        <br />
        <br />

        <ButtonGroup bsSize="large">
          <Button onClick={ () => setCategory('home_improvement')}><span className="fa fa-home"> Home Improvement</span></Button>          
          <Button onClick={ () => setCategory('miscellaneous') }><span className="fa fa-coffee"> Misc.</span></Button>            
        </ButtonGroup>

      </Jumbotron>
      {props.children}
    </div>
  );
};

const styles = {
  jumbotronStyle: {
    backgroundColor: 'rgb(200,240,255)'
  }
};


export default PurchaseCategories
