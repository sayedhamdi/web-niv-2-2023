import { Link } from "react-router-dom"
export default function LinkPlus({to,children,styles}){
    return (
        <Link to={to} style={{textDecoration:'none',...styles}}>{children}</Link>
    )
}