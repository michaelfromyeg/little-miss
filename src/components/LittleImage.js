import { images } from "../images";

export const LittleImage = (props) => {
    const { image } = props;

    return <img
        src={images[image]}
        alt="A Little miss meme"
        key={image}
        width={300}
    />
}
