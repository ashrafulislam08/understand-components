const Button = ({ title }) => {
  const variants = {
    primary: {
      color: "black",
      background: "green",
    },
  };
  return <button>{title}</button>;
};

export default Button;
