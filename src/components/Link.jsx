export default function Link({href, children}){
    return(
        <>
            <a href={href} className="rounded-2xl bg-fourth-purple p-2 text-2xl">{children}</a>
        </>
    )
}