export default function Contact() {
    return (
        <div className="rounded-2xl shadow m-3 h-[667px] bg-white">
            <div
                className={`cursor-pointer accordion-header p-3 flex justify-between items-center rounded-t-xl bg-gray-300 h-[60px]`}
            >
                <p className="m-0 font-bold text-xl">Contact Us</p>
            </div>
            <div
                className={`flex h-[607px] accordion-content rounded-b-xl items-center justify-center`}
            >
                <div className="flex h-[540px] w-full bg-gray-300 rounded m-4" />
            </div>
        </div>
    );
}
