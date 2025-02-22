function ProfileCard({title, handle, img, description}){

    return (    <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={img} alt="logo"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <p className="title is-4"> {title}</p>
                <p className="subtitle is-6"> {handle}</p>
                <p className="subtitle is-6"> {description} </p>
            </div>

        </div>
    </div>
)
}
export default ProfileCard;