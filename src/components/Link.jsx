export default function Link({href, children}){
    return(
        <>
            <a href={href} className="rounded-2xl bg-fourth-purple p-2 md:text-xl lg:text-2xl font-bold">{children}</a>
        </>
    )
}