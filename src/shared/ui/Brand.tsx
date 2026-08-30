export default function Brand() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="flex justify-center items-center bg-linear-to-br from-primary-400 to-primary-600 rounded-md w-9 sm:w-11 h-9 sm:h-11">
        <img
          src="/logo-white.png"
          alt=""
          className="w-[25px] sm:w-[30px] h-[25px] sm:h-[30px]"
          width={30}
          height={30}
        />
      </span>
      <span className="font-extrabold text-primary-800 text-2xl sm:text-3xl">
        Levora
      </span>
    </div>
  );
}
