import './style.css'




function HighlightsCard (props) {
    let title;

    switch (props.cardName) {
        case 'uvIndex':
            title = 'UV Index';
            break;
            case 'windStatus':
            title = 'Wind Status';
            break;
            case 'sunriseSunset':
            title = 'Sunrise & Sunset';
            break;
            case 'humidity':
            title = 'Humidity';
            break;
            case 'visibility':
            title = 'Visibility';
            break;
        default:
            break;
    }

    return(
        <div>
            <p>{title}</p>
            <p>DATA</p>
            <p>Details</p>
        </div>
    );
}

export default HighlightsCard;