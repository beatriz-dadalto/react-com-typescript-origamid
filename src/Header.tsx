import { useUi } from "./UiContext";

const Header = () => {
  const { setDark } = useUi();

  return (
    <div>
      <button onClick={(dark) => setDark((dark) => !dark)}>Ui Mode</button>
    </div>
  );
};

export default Header;
