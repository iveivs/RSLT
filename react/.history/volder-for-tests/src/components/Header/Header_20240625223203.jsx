import styles from './Header.module.css'
console.log(styles);
function Header() {
    console.log(styles);
    return <>
    <div className="someClass"> Header for test</div>
    <div className="someClass2"> div for test</div>
    <div className="someClass3"> div for test</div>
    </>
}

export default Header