interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div>
      <img src={imgUrl} alt={name} width="300" />
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}
