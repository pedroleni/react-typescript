import "./Avatar.css";
const Avatar = ({ data }) => {
  return <img className="avatar" src={localStorage.getItem("urlIMG")} alt="" />;
};

export default Avatar;
