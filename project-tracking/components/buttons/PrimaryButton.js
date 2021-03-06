
const PrimaryButton = (props) => {

    const buttonStyles = 'block rounded-md text-center py-2 tracking-wider bg-primary font-bold  text-white uppercase cursor-pointer  transform ease-out duration-700  hover:scale-105 w-full no-underline text-xl';

    if (props.type === 'link') {
        return (
            <a href={props.url ? props.url : '#'} className={buttonStyles}>
                {props.children}
            </a>
        )
    } else if (props.type === 'button') {
        return (
            <button onClick={props.onClick ? props.onClick : () => console.log('button onPress not configured')} className={buttonStyles}>
                {props.children}
            </button>
        )
    } else {
        return (
            <a href={props.url ? props.url : '#'} className={buttonStyles}>
                {props.children}
            </a>
        )
    }
}

export default PrimaryButton;
