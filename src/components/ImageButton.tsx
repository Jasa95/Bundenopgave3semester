
interface imageButtonProps {
    image: string;
    onClick: () => void;
}

export default function ImageButton({image, onClick}: imageButtonProps) {
    return(
        <div>
            <img src={image} alt
            ="" onClick={onClick} />
        </div>
    )
}