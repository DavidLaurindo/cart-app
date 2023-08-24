function ProductCard({ data }){
    const { title, thumbnail, price } = data

    return(
        <section>
            <img src={thumbnail} alt="product" />
            <div>
                <h2>R$ {price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                })}</h2>
                <h2>{title}</h2>
            </div>

            <button type="button">adicionar</button>
        </section>
    )
}

export default ProductCard