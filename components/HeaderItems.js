function HeaderItems({Icon, title}) {
    return (
        <div className="">
            <Icon className="h-8 mb-1" />
            <p className="opacity-0 hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItems
