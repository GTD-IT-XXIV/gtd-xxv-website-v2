import Telegram from "./images/telegram.png";

export default function Contact() {
  return (
    <div className="rounded-2xl shadow m-3 bg-white">
      <div
        className={`cursor-pointer accordion-header p-3 flex justify-between items-center rounded-t-xl bg-gray-300`}
      >
        <p className="m-0 font-bold text-xl">Contact Us</p>
      </div>
      <div className={`p-3`}>
        <a
          className="flex gap-3 items-center"
          href="https://t.me/kenzhiiskandar"
        >
          <img src={Telegram} className="w-8 h-8" />
          Telegram
        </a>
      </div>
    </div>
  );
}
