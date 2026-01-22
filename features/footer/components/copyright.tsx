"use client"

export default function Copyright() {
    return (
        <div className="flex">
            <div>
                <p className="text-center text-neutral-50 font-mono opacity-40">
                    {'Copyright'}{' \u00A9'} {new Date().getFullYear()} | {'Mariela González Porlfolio'}
                </p>
            </div>
            <div></div>

        </div>
    )
}
