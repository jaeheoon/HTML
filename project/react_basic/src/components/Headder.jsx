import { useContext } from "react";
import { MemberContext, ThemeContext } from "../ContextExampleApp";

function Headder() {
  const {isDark} = useContext(ThemeContext);
  const member = useContext(MemberContext);
  return (
    <header className="header"
    style={{
      backgroundColor: isDark ? 'black' : 'gray',
      color: isDark ? 'white' : 'black',
    }}>
      <h1>환영합니다. {member}님!</h1>
    </header>
  );
}

export default Headder;