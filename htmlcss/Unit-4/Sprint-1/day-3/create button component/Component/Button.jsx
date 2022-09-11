function Button(props) {
    console.log(props);
    const { text } = props;
    return <button className="Btn">{text}</button>;
  }
  
  export default Button;