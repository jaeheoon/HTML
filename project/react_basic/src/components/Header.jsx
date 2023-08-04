// 재사용성을 위한 사용자 컴포넌트 정의
function Header(props) {
    return (
        <div>
            <header>
                <h1><a href="/" onClick={(event) => {
                    event.preventDefault();
                    props.onChangeMode();
                }}>{props.title}</a></h1>
            </header>
        </div>
    );
}
export default Header;