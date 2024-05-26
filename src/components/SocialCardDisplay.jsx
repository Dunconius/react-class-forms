

export default function SocialCardDisplay(props) {

    return <div>
        <p>{props.content}</p>
        {props.imageUrl && <img src={props.imageUrl} alt="social post" />}
        <button onClicl={props.toggleEditMode}>Edit Post</button>
    </div>
}