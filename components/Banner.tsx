function Banner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
            <div>
                <h1 className="text-7xl">Daily Blog Blog</h1>
                <h2 className="mt-5">
                    Welcome to <span className="underline underline-offset-8 decoration-4 decoration-[#0bda51]">A Blog Blog</span> for people who like blog stuff.
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                New product features | The latest in technology | The weekly debugging nightmares & more!
            </p>
        </div>
    )
}

export default Banner