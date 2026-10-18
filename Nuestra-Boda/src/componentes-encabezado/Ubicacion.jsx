
import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
  Navigation,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY XV CLÁSICO
// ==========================================

const Celebracion = ({
  titulo = "Mi gran celebración",
  fecha = "11 Julio 2027",
  hora = "4:30 PM",
  lugar = "Salón Event Center",
  direccion = "C.5 Pte. 400, Libertad, Heroica Puebla de Zaragoza, Pue.",
  ubicacion = "https://maps.app.goo.gl/TsSDUBKAractwi8F8",
}) => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7FAFC]
        px-5
        py-20
        sm:py-28
      "
    >

      {/* ======================================
          DECORACIONES DE FONDO
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute -left-32 top-10
          h-80 w-80
          rounded-full
          bg-[#DFEAF2]/70
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-32 bottom-10
          h-80 w-80
          rounded-full
          bg-[#A9C5D8]/25
          blur-3xl
        "
      />

      {/* ======================================
          TARJETA PRINCIPAL
      ====================================== */}

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-2xl
          rounded-bl-2xl
          border border-[#C8AD85]/40
          bg-[#40576B]
          px-6
          py-14
          text-center
          shadow-[0_25px_70px_rgba(64,87,107,0.22)]
          sm:px-12
          sm:py-16
        "
      >

        {/* LÍNEA SUPERIOR */}

        <div
          className="
            absolute top-0 left-1/2
            h-[3px] w-28
            -translate-x-1/2
            bg-[#C8AD85]
          "
        />

        {/* DECORACIONES DE ESQUINAS */}

        <div
          className="
            pointer-events-none
            absolute -top-20 -right-20
            h-56 w-56
            rounded-full
            border border-[#C8AD85]/20
          "
        />

        <div
          className="
            pointer-events-none
            absolute -top-12 -right-12
            h-40 w-40
            rounded-full
            border border-[#C8AD85]/20
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-20 -left-20
            h-56 w-56
            rounded-full
            border border-[#A9C5D8]/20
          "
        />

        <div className="relative z-10">

          {/* ======================================
              ENCABEZADO
          ====================================== */}

          <div className="mb-6 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[#C8AD85]" />

            <Sparkles
              size={21}
              strokeWidth={1.2}
              className="text-[#C8AD85]"
            />

            <span className="h-px w-12 bg-[#C8AD85]" />

          </div>

          {/* SUBTÍTULO */}

          <p
            className="
              mb-4
              font-playfair
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#C8AD85]
              sm:text-sm
            "
          >
            El día que tanto he soñado
          </p>

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
              mt-6
              max-w-2xl
              font-playfair
              text-base
              leading-relaxed
              text-[#F7FAFC]/85
              sm:text-lg
            "
          >
            Un día lleno de sueños, alegría y momentos
            inolvidables está por llegar.
            Me encantaría que formaras parte
            de esta celebración tan especial.
          </p>

          {/* SEPARADOR */}

          <div
            className="
              mx-auto my-10
              h-px w-24
              bg-[#C8AD85]
            "
          />

          {/* ======================================
              FECHA Y HORA
          ====================================== */}

          <div
            className="
              mx-auto
              grid
              max-w-2xl
              grid-cols-1
              gap-5
              sm:grid-cols-2
            "
          >

            {/* FECHA */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border border-[#C8AD85]/30
                bg-[#DFEAF2]
                px-6 py-7
                shadow-lg
              "
            >

              <CalendarDays
                size={26}
                strokeWidth={1.4}
                className="mb-4 text-[#40576B]"
              />

              <p
                className="
                  mb-2
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#40576B]/70
                "
              >
                Fecha
              </p>

              <p
                className="
                  font-playfair
                  text-2xl
                  text-[#40576B]
                  sm:text-3xl
                "
              >
                {fecha}
              </p>

            </div>

            {/* HORA */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl
                border border-[#C8AD85]/30
                bg-[#DFEAF2]
                px-6 py-7
                shadow-lg
              "
            >

              <Clock3
                size={26}
                strokeWidth={1.4}
                className="mb-4 text-[#40576B]"
              />

              <p
                className="
                  mb-2
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#40576B]/70
                "
              >
                Hora
              </p>

              <p
                className="
                  font-playfair
                  text-2xl
                  text-[#40576B]
                  sm:text-3xl
                "
              >
                {hora}
              </p>

            </div>

          </div>

          {/* ======================================
              UBICACIÓN
          ====================================== */}

          <div className="mx-auto mt-12 max-w-2xl">

            {/* ICONO */}

            <div
              className="
                mx-auto mb-5
                flex h-16 w-16
                items-center
                justify-center
                rounded-full
                border border-[#C8AD85]/50
                bg-[#F7FAFC]/10
              "
            >
              <MapPin
                size={29}
                strokeWidth={1.3}
                className="text-[#C8AD85]"
              />
            </div>

            {/* SUBTÍTULO */}

            <p
              className="
                mb-3
                font-cursiveDancing
                text-4xl
                text-[#C8AD85]
                sm:text-5xl
              "
            >
              Te espero en
            </p>

            {/* NOMBRE DEL SALÓN */}

            <h3
              className="
                mb-4
                font-playfair
                text-2xl
                text-[#F7FAFC]
                sm:text-3xl
              "
            >
              {lugar}
            </h3>

            {/* DIRECCIÓN */}

            <p
              className="
                mx-auto
                max-w-xl
                text-base
                leading-relaxed
                text-[#F7FAFC]/80
                sm:text-lg
              "
            >
              {direccion}
            </p>

          </div>

          {/* ======================================
              BOTÓN GOOGLE MAPS
          ====================================== */}

          <motion.a
            href={ubicacion}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#C8AD85]
              px-9
              py-4
              font-playfair
              text-base
              tracking-wide
              text-[#40576B]
              shadow-[0_15px_35px_rgba(0,0,0,0.18)]
              transition-colors
              duration-300
              hover:bg-[#D9C29E]
              sm:text-lg
            "
          >

            <Navigation
              size={19}
              strokeWidth={1.7}
            />

            Ver ubicación

          </motion.a>

          {/* ======================================
              FRASE FINAL
          ====================================== */}

          <p
            className="
              mx-auto
              mt-10
              max-w-md
              font-playfair
              text-sm
              italic
              leading-relaxed
              text-[#F7FAFC]/75
              sm:text-base
            "
          >
            Tu presencia hará que este día
            sea aún más inolvidable.
          </p>

        </div>

        {/* LÍNEA INFERIOR */}

        <div
          className="
            absolute bottom-0 left-1/2
            h-[3px] w-28
            -translate-x-1/2
            bg-[#C8AD85]
          "
        />

      </motion.div>

    </section>
  );
};

export default Celebracion;
