function SkillTag({ text, logo, size, pulse, position }) {
    return (
      <Html position={position} center>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 2 }}
          animate={pulse ? { scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 shadow-xl backdrop-blur-lg border border-white/20 text-white font-medium cursor-pointer select-none hover:shadow-2xl hover:backdrop-blur-md"
          style={{
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(9,9,121,0.1) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          {logo && (
            <img
              src={logo}
              alt={text}
              className="object-contain"
              style={{
                width: `${size * 22}px`,
                height: `${size * 22}px`,
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))",
              }}
            />
          )}
          <span className="text-sm font-semibold">{text}</span>
        </motion.div>
      </Html>
    );
  }
  