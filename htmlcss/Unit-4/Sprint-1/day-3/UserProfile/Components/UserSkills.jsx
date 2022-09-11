function UserSkills(properties) {
    const { icon, description } = properties;
  
    console.log(properties);
  
    const style = {
      display: "flex",
      width: "fit-content",
      padding: " 3%",
      borderRadius: "1rem"
    };
  
    return (
      <div style={style}>
        <img src={icon} alt="icon" height="20px" width="20px" />
        <div>{description}</div>
      </div>
    );
  }
  
  export default UserSkills;
  