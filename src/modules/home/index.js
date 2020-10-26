import React, { useContext } from 'react'
import { withRouter } from 'react-router';
import Product from '../../components/product'
import { products } from '../../fake/data';
import Context from '../../components/context';






function Home() {
    const { setCartItems } = useContext(Context);
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap'  }}>
            {products.map(product => (
                <Product
                    key={product.id}
                    price={product.price}
                    name={product.name}
                    description={product.description}
                    addAction={() => setCartItems(c => c + 1)}
                    src={product.src}
                />
            ))}

        </div>
    );
}

export default withRouter(Home);
