import React, {Component} from 'react';
import { Suma } from './Suma';
import data from './data.json';
import _ from 'lodash';

const HappyFace = ({children}) => {
    return (
        <div>
            <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Nicolas_Cage_Deauville_2013_2.jpg/200px-Nicolas_Cage_Deauville_2013_2.jpg" />
            {children}
        </div>
      )
}

const Product = (props) =>{
  console.log(props);
    let {name} = props;
    let price = parseInt(props.price.replace('$',''));

    let priceStyle = {color:'red'};
    if(price < 100){
        priceStyle = {color:'green'};
    }
    return (
        <div>
            <p>{name} - <strong style={priceStyle}>{price}€</strong></p>
            <HappyFace>{name}</HappyFace>
        </div>
    )
}

const ProductList = ({list}) => (

      <ul>
          {list.map((prod,i) => <
               Product key={i} name={prod.name} price={prod.price}
             />)}
      </ul>

)

export class App extends Component {
    render() {
        let categories = _.groupBy(data,'category');
        return (
        <div>
            <h1>Hello! {this.props.title}</h1>
            {Object.keys(categories).map(catNamer => (
                <div>
                    <h2>{catNamer}</h2>
                    <ProductList list={categories[catNamer]}/>
                </div>
            ))}
        </div>
        )
    }
}
