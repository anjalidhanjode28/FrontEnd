function UserProfile(properties) {
    const { profile, name, title, skillSets } = properties;
  
    const style = {
      marginTop: "0px",
      borderRadius: "50%",
      border: "1px solid black"
    };
  
    return (
      <div className="Container">
        <div idName="First">
          <h1>
            {name} <button>follow</button>
          </h1>
          <h3>{title}</h3>
          <div>{skillSets}</div>
        </div>
  
        <div idName="Second">
          <img
            src={profile}
            alt="avatar_icon"
            style={style}
            height="230px"
            width="230px"
          />
        </div>
      </div>
    );
  }
  
  export default UserProfile;
  