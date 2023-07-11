export default function Row({children}){
    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
            {children}
        </div>
    )
}