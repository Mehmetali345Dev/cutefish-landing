export default function Apps() {
  return (
    <div className="md:flex grid justify-between w-full items-center px-8 md:px-32 py-8 bg-gradient-to-r from-indigo-300 to-pink-300">
      <div className="grid justify-items-start gap-3 flex-grow">
        <h1 className="text-3xl text-white font-bold">Awesome Apps</h1>
        <p className="md:w-3/6 text-white">
          We have developed a series of cutefish OS applications to ensure that
          users experience a unified UI / UX experience in their daily use.
        </p>
      </div>
      <img src="/apps.svg" className="h-96" />
    </div>
  );
}
