import { useContext } from "react";
import { MemberContext, ThemeContext } from "../ContextExampleApp";

function Content() {
  const {isDark} = useContext(ThemeContext);
  const member = useContext(MemberContext);
  return (
    <div className="content" 
    style={{
      backgroundColor: isDark ? 'black' : 'lightgray',
      color: isDark ? 'white' : 'black',
    }}>
      <p>{member}님, 행복한 하루 되세요...</p>
    </div>
  );
}

export default Content;