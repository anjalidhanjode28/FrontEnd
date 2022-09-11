function Avatar(props) {
    const { src, name } = props;
    return (
      <div>
        <img src={src} alt="avatar-icon" width="100px" className="Image" />
        <h3> {name} </h3>
      </div>
    );
  }
  
  export default Avatar;