export default function Desktop() {
  return (
    <div className="md:flex grid justify-between w-full items-center px-8 md:px-32 py-8 bg-gradient-to-r from-green-300 to-indigo-300">
      <img src="/desktop.png" className="rounded-md md:w-3/6 w-full " />
      <div className="grid justify-items-start md:justify-items-end md:text-right gap-3 flex-grow">
        <h1 className="text-3xl text-white font-bold">Cutefish Desktop</h1>
        <p className="md:w-4/6 text-lg text-white">
          Cutefish desktop environment is an efficient, beautiful, and modern
          desktop environment built using Qt Quick and some KDE basic
          frameworks.
        </p>
      </div>
    </div>
  );
}
