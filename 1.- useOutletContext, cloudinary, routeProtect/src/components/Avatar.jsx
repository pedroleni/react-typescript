import "./Avatar.css";
const Avatar = ({ data }) => {
  console.log("data", data);

  return <img className="avatar" src={localStorage.getItem("urlIMG")} alt="" />;
};

export default Avatar;
