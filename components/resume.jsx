export default function Resume() {
  return (
    <div className=" bg-gray-400 bg-opacity-30 p-2 rounded-full w-max">
      <svg
        className="animate-bounce w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="#00000c"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="128"
          y1="40"
          x2="128"
          y2="216"
          fill="none"
          stroke="#00000c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <polyline
          points="56 144 128 216 200 144"
          fill="none"
          stroke="#00000c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
      </svg>
    </div>
  );
}
