import { motion } from "framer-motion";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex flex-col gap-3 text-center items-center w-full">
      <motion.h1
        animate={{ y: 100, opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-5xl font-bold flex flex-col md:flex-row items-center gap-2">
          Meet the
          <motion.span className="text-indigo-600">Cutefish</motion.span>
        </h1>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-lg"
      >
        Focus on simplicity, beauty and practicality
      </motion.p>

      <motion.div
        animate={{ y: 100, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ delay: 1 }}
      >
        <img src="desktop2.png" alt="cutefish" className="rounded-md" />
        <Link href="/downloads">
          <div className="text-lg bg-indigo-600 px-8 text-center w-full text-white rounded-md py-4 mb-4 font-bold">
            Try Now!
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
