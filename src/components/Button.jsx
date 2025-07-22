export default function Button ({texto}){
    const classButon = `p-2 text-center rounded-2xl text-amber-100 bg-button-header`
    return(
        <>
            <button className={classButon}>{texto}</button>
        </>
    )
}