
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Flower2,
  Heart,
  Shirt,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY XV CLÁSICO
// ==========================================

const textos = {
  subtitulo: "Una noche para brillar",
  titulo: "Código de Vestimenta",
  vestimenta: "Formal",
  descripcion:
    "Esta noche será muy especial para mí. Me encantará verte elegante y listo para compartir una celebración llena de magia, alegría y momentos inolvidables.",
  fraseFinal:
    "Lo más importante de esta noche será contar con tu presencia.",
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Vestimenta = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#A9C5D8]
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
          absolute -left-32 -top-32
          h-96 w-96
          rounded-full
          bg-[#DFEAF2]/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-32 -right-32
          h-96 w-96
          rounded-full
          bg-[#F7FAFC]/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute left-10 top-16
          h-52 w-52
          rounded-full
          border border-[#F7FAFC]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute bottom-16 right-10
          h-52 w-52
          rounded-full
          border border-[#C8AD85]/30
        "
      />

      {/* ======================================
          TARJETA PRINCIPAL
      ====================================== */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="
          relative
          mx-auto
          max-w-3xl
          overflow-hidden
          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-2xl
          rounded-bl-2xl
          border border-[#C8AD85]/50
          bg-[#F7FAFC]
          px-7
          py-16
          text-center
          shadow-[0_25px_70px_rgba(64,87,107,0.18)]
          sm:px-14
          sm:py-20
        "
      >

        {/* LÍNEA SUPERIOR */}

        <div
          className="
            absolute left-1/2 top-0
            h-[3px] w-28
            -translate-x-1/2
            bg-[#C8AD85]
          "
        />

        {/* DECORACIONES DE ESQUINAS */}

        <div
          className="
            pointer-events-none
            absolute -right-16 -top-16
            h-44 w-44
            rounded-full
            border border-[#A9C5D8]/30
          "
        />

        <div
          className="
            pointer-events-none
            absolute -right-9 -top-9
            h-28 w-28
            rounded-full
            border border-[#C8AD85]/30
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-20 -left-20
            h-48 w-48
            rounded-full
            border border-[#A9C5D8]/25
          "
        />

        <div className="relative z-10">

          {/* ======================================
              ENCABEZADO
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* ICONO PRINCIPAL */}

            <div
              className="
                mx-auto mb-7
                flex h-20 w-20
                items-center
                justify-center
                rounded-full
                border border-[#C8AD85]/50
                bg-[#DFEAF2]
              "
            >
              <Sparkles
                size={34}
                strokeWidth={1.2}
                className="text-[#40576B]"
              />
            </div>

            {/* SUBTÍTULO */}

            <p
              className="
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#C8AD85]
                sm:text-sm
              "
            >
              {textos.subtitulo}
            </p>

            {/* TÍTULO */}

            <h2
              className="
                font-cursiveDancing
                text-5xl
                leading-tight
                text-[#40576B]
                sm:text-6xl
                md:text-7xl
              "
            >
              {textos.titulo}
            </h2>

            {/* SEPARADOR */}

            <div
              className="
                my-9
                flex items-center
                justify-center
                gap-4
              "
            >
              <span className="h-px w-14 bg-[#C8AD85]" />

              <Flower2
                size={19}
                strokeWidth={1.2}
                className="text-[#C8AD85]"
              />

              <span className="h-px w-14 bg-[#C8AD85]" />
            </div>

          </motion.div>

          {/* ======================================
              VESTIMENTA FORMAL
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              flex
              max-w-xl
              flex-col
              items-center
            "
          >

            {/* ICONO */}

            <div
              className="
                mb-5
                flex h-14 w-14
                items-center
                justify-center
                rounded-full
                bg-[#DFEAF2]
              "
            >
              <Shirt
                size={26}
                strokeWidth={1.3}
                className="text-[#40576B]"
              />
            </div>

            {/* TIPO DE VESTIMENTA */}

            <h3
              className="
                font-playfair
                text-3xl
                text-[#40576B]
                sm:text-4xl
              "
            >
              {textos.vestimenta}
            </h3>

            {/* DESCRIPCIÓN */}

            <p
              className="
                mx-auto
                mt-6
                max-w-lg
                font-playfair
                text-base
                leading-8
                text-[#40576B]/80
                sm:text-lg
              "
            >
              {textos.descripcion}
            </p>

          </motion.div>

          {/* ======================================
              DIVISOR CENTRAL
          ====================================== */}

          <div
            className="
              mx-auto my-12
              flex items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px w-16
                bg-[#C8AD85]/70
              "
            />

            <Heart
              size={18}
              strokeWidth={1.3}
              className="text-[#C8AD85]"
            />

            <span
              className="
                h-px w-16
                bg-[#C8AD85]/70
              "
            />
          </div>
      

          {/* ======================================
              FRASE FINAL
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="mt-12"
          >

            <Flower2
              size={24}
              strokeWidth={1.2}
              className="
                mx-auto mb-5
                text-[#C8AD85]
              "
            />

            <p
              className="
                mx-auto
                max-w-md
                font-playfair
                text-base
                italic
                leading-relaxed
                text-[#40576B]/85
                sm:text-lg
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
              Con cariño, Darla
            </p>

          </motion.div>

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

export default Vestimenta;
