
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY XV CLÁSICO
// ==========================================

const Contador = ({
  titulo = "¡Mis XV años están por llegar!",
  texto = "Hay momentos que se sueñan toda la vida, y el mío está cada vez más cerca. Me haría muy feliz compartir contigo este día tan especial.",
  frase = "¡Comienza la cuenta regresiva!",
  fecha = "2027-07-11T00:00:00",
}) => {

  // ==========================================
  // CÁLCULO DEL TIEMPO
  // ==========================================

  const calculateTime = () => {
    const difference = +new Date(fecha) - +new Date();

    if (difference > 0) {
      return {
        Días: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        Horas: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        Minutos: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        Segundos: Math.floor(
          (difference / 1000) % 60
        ),
      };
    }

    return {
      Días: 0,
      Horas: 0,
      Minutos: 0,
      Segundos: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [fecha]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#40576B]
        px-6
        py-24
      "
    >

      {/* ======================================
          DECORACIÓN DE FONDO
      ====================================== */}

      <div
        className="
          absolute -top-36 -left-24
          h-[450px] w-[450px]
          rounded-full
          bg-[#A9C5D8]/20
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute -bottom-40 -right-24
          h-[380px] w-[380px]
          rounded-full
          bg-[#C8AD85]/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* DESTELLOS DECORATIVOS */}

      <Sparkles
        size={28}
        strokeWidth={1}
        className="
          absolute top-12 left-8
          text-[#C8AD85]/60
        "
      />

      <Sparkles
        size={22}
        strokeWidth={1}
        className="
          absolute bottom-12 right-8
          text-[#C8AD85]/60
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ======================================
            TEXTO PRINCIPAL
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >



          {/* TÍTULO */}

          <h2
            className="
              font-cursiveDancing
              text-5xl
              leading-tight
              text-[#F7FAFC]
              sm:text-6xl
              md:text-7xl
            "
          >
            {titulo}
          </h2>

          {/* DESCRIPCIÓN */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              font-playfair
              text-lg
              leading-relaxed
              text-[#F7FAFC]/90
              sm:text-2xl
              md:text-3xl
            "
          >
            {texto}
          </p>

          {/* DIVISOR DECORATIVO */}

          <div
            className="
              mx-auto my-10
              flex items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px w-16
                bg-[#C8AD85]/80
              "
            />

            <Sparkles
              size={20}
              strokeWidth={1.2}
              className="text-[#C8AD85]"
            />

            <span
              className="
                h-px w-16
                bg-[#C8AD85]/80
              "
            />
          </div>

          {/* FRASE */}

          <p
            className="
              font-playfair
              text-2xl
              italic
              text-[#DFEAF2]
              sm:text-3xl
            "
          >
            {frase}
          </p>

        </motion.div>

        {/* ======================================
            CONTADOR REGRESIVO
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
            relative
            mx-auto
            mt-16
            max-w-4xl
            overflow-hidden
            rounded-[2rem]
            border border-[#C8AD85]/40
            bg-[#F7FAFC]
            p-8
            shadow-[0_25px_70px_rgba(0,0,0,0.25)]
            sm:p-10
          "
        >

          {/* LÍNEA DECORATIVA SUPERIOR */}

          <div
            className="
              absolute top-0 left-1/2
              h-[3px] w-28
              -translate-x-1/2
              bg-[#C8AD85]
            "
          />

          {/* CONTADOR */}

          <div
            className="
              grid
              grid-cols-2
              gap-6
              sm:grid-cols-4
              sm:gap-8
            "
          >

            {Object.keys(timeLeft).map((item) => (

              <motion.div
                key={item}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                className="
                  flex
                  flex-col
                  items-center
                "
              >

                {/* CÍRCULO */}

                <div
                  className="
                    flex
                    h-20 w-20
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#C8AD85]/60
                    bg-[#A9C5D8]
                    font-playfair
                    text-3xl
                    font-bold
                    text-[#40576B]
                    shadow-[0_10px_25px_rgba(64,87,107,0.15)]
                    sm:h-24
                    sm:w-24
                    sm:text-4xl
                  "
                >
                  {String(timeLeft[item]).padStart(2, "0")}
                </div>

                {/* ETIQUETA */}

                <span
                  className="
                    mt-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#40576B]
                    sm:text-sm
                  "
                >
                  {item}
                </span>

              </motion.div>

            ))}

          </div>

          {/* DECORACIÓN INFERIOR */}

          <div
            className="
              mt-10
              flex items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px w-10
                bg-[#C8AD85]/60
              "
            />

            <Sparkles
              size={16}
              strokeWidth={1.2}
              className="text-[#C8AD85]"
            />

            <span
              className="
                h-px w-10
                bg-[#C8AD85]/60
              "
            />
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contador;
