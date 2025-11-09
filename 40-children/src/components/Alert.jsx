export default function Alert({type,children}) {   

    const colors = {
        success: {bg:"green",color:"white"},
        error: {bg:"red",color:"white"},
        warning: {bg:"yellow",color:"black"},
        info: {bg:"blue",color:"white"},
    }
    const style = {
        backgroundColor: colors[type].bg,
        color: colors[type].color,
        padding: "12px 14px",
        borderRadius: "5px",
        margin: "10px 0",
    }
    return (
        <div
         style={style}>
            {children}
        </div>
    );
}