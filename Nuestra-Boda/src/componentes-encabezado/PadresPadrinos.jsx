
import React from "react";
import { motion } from "framer-motion";
import { Heart, Flower2, Sparkles } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY XV CLÁSICO
// ==========================================

// PADRES DE LA QUINCEAÑERA
const padres = {
  titulo: "Mis padres",
  padre: "Fernando Sanchez",
  madre: "Gabriela Morales",
};

// TEXTOS DE LA SECCIÓN
const textos = {
  subtitulo: "Con todo mi amor y gratitud",
  titulo: "Mis queridos padres",
  descripcion:
    "Detrás de cada uno de mis sueños están las personas que me han acompañado con amor, paciencia y dedicación. Hoy quiero agradecerles por ser parte de cada paso de mi vida.",
  fraseFinal:
    "Gracias por enseñarme a soñar, por cuidar mis pasos y por llenar mi vida de amor. Este día tan especial también es de ustedes.",
};

// ==========================================
// ANIMACIONES
// ==========================================

const animacionTarjeta = {
  oculto: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// TARJETA DE PADRES
// ==========================================

const TarjetaPadres = ({ titulo, padre, madre }) => {
  return (
    <motion.div
      variants={animacionTarjeta}
      className="
        relative
        w-full
        max-w-[520px]
        overflow-hidden
        rounded-tl-[3.5rem]
        rounded-br-[3.5rem]
        rounded-tr-[1rem]
        rounded-bl-[1rem]
        border border-[#A9C5D8]/50
        bg-[#F7FAFC]
        px-6 py-12
        sm:px-12 sm:py-16
        text-center
        shadow-[0_18px_50px_rgba(64,87,107,0.12)]
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

      {/* DECORACIONES SUPERIORES */}
      <div
        className="
          pointer-events-none
          absolute -top-16 -right-16
          h-44 w-44
          rounded-full
          border border-[#A9C5D8]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute -top-9 -right-9
          h-28 w-28
          rounded-full
          border border-[#C8AD85]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-20 -left-20
          h-44 w-44
          rounded-full
          border border-[#A9C5D8]/25
        "
      />

      <div className="relative z-10 flex flex-col items-center">

        {/* ICONO */}
        <div
          className="
            mb-7
            flex h-16 w-16
            items-center justify-center
            rounded-full
            border border-[#C8AD85]/50
            bg-[#DFEAF2]
          "
        >
          <Flower2
            size={30}
            strokeWidth={1.2}
            className="text-[#40576B]"
          />
        </div>

        {/* TÍTULO */}
        <h3
          className="
            font-playfair
            text-xl
            text-[#40576B]
            sm:text-2xl
          "
        >
          {titulo}
        </h3>

        {/* SEPARADOR */}
        <div className="my-7 flex items-center gap-3">
          <div className="h-px w-12 bg-[#C8AD85]" />

          <Heart
            size={15}
            strokeWidth={1.4}
            className="text-[#C8AD85]"
          />

          <div className="h-px w-12 bg-[#C8AD85]" />
        </div>

        {/* NOMBRES */}
        <div className="flex flex-col items-center gap-4">

          <p
            className="
              font-playfair
              text-2xl
              leading-snug
              text-[#40576B]
              sm:text-[1.9rem]
            "
          >
            {padre}
          </p>

          <span
            className="
              font-cursiveDancing
              text-4xl
              text-[#C8AD85]
            "
          >
            &
          </span>

          <p
            className="
              font-playfair
              text-2xl
              leading-snug
              text-[#40576B]
              sm:text-[1.9rem]
            "
          >
            {madre}
          </p>

        </div>

        {/* DECORACIÓN FINAL DE TARJETA */}
        <div className="mt-9 flex items-center gap-3">

          <div className="h-px w-8 bg-[#C8AD85]/60" />

          <Sparkles
            size={18}
            strokeWidth={1.2}
            className="text-[#C8AD85]"
          />

          <div className="h-px w-8 bg-[#C8AD85]/60" />

        </div>
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
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Padres = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#DFEAF2]
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
          absolute -left-40 top-20
          h-80 w-80
          rounded-full
          border border-[#A9C5D8]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-40 bottom-20
          h-80 w-80
          rounded-full
          border border-[#C8AD85]/25
        "
      />

      {/* DESTELLOS */}

      <Sparkles
        size={26}
        strokeWidth={1}
        className="
          absolute left-8 top-12
          text-[#C8AD85]/70
        "
      />

      <Sparkles
        size={22}
        strokeWidth={1}
        className="
          absolute bottom-12 right-8
          text-[#C8AD85]/70
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ======================================
            ENCABEZADO
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >

          {/* ADORNO */}
          <div className="mb-6 flex items-center justify-center gap-3">

            <div className="h-px w-12 bg-[#C8AD85]" />

            <Heart
              size={20}
              strokeWidth={1.3}
              className="text-[#C8AD85]"
            />

            <div className="h-px w-12 bg-[#C8AD85]" />

          </div>

          {/* SUBTÍTULO */}
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#40576B]/75
              sm:text-sm
            "
          >
            {textos.subtitulo}
          </p>

          {/* TÍTULO PRINCIPAL */}
          <h2
            className="
              mt-5
              font-cursiveDancing
              text-5xl
              text-[#40576B]
              sm:text-6xl
              md:text-7xl
            "
          >
            {textos.titulo}
          </h2>

          {/* DESCRIPCIÓN */}
          <p
            className="
              mx-auto mt-7
              max-w-2xl
              font-playfair
              text-base
              leading-relaxed
              text-[#40576B]/85
              sm:text-lg
            "
          >
            {textos.descripcion}
          </p>

        </motion.div>

        {/* ======================================
            TARJETA CENTRAL DE PADRES
        ====================================== */}

        <motion.div
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            flex
            items-center
            justify-center
          "
        >
          <TarjetaPadres {...padres} />
        </motion.div>

        {/* ======================================
            FRASE FINAL
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >

          <Flower2
            size={25}
            strokeWidth={1.2}
            className="mx-auto mb-5 text-[#C8AD85]"
          />

          <p
            className="
              mx-auto
              max-w-xl
              font-playfair
              text-lg
              italic
              leading-relaxed
              text-[#40576B]/90
              sm:text-xl
            "
          >
            {textos.fraseFinal}
          </p>

          {/* FIRMA */}
          <p
            className="
              mt-7
              font-cursiveDancing
              text-3xl
              text-[#40576B]
              sm:text-4xl
            "
          >
            Con amor, Darla
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default Padres;
