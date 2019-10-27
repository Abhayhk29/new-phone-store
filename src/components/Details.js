import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(val) => {
                    const { id, company, img, info, price, title, inCart } = val.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* {title} */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>

                                </div>
                            </div>
                            {/* {end title} */}
                            {/* {Product Info} */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/* {Product Text} */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>model : {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted load">
                                        {info}
                                    </p>
                                    {/* {Butto} */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick= { () => {
                                                val.addToCart(id);
                                                val.openModal(id);
                                            }}
                                        >
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
