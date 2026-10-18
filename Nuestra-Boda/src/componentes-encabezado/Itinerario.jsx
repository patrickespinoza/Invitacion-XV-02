
import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  GlassWater,
  Crown,
  Music2,
  UtensilsCrossed,
  Cake,
  MoonStar,
  Sparkles,
  Flower2,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY XV CLÁSICO
// ==========================================

// Modifica los horarios y nombres según el evento.
const eventos = [
  {
    titulo: "Ceremonia de acción de gracias",
    hora: "4:30 PM",
    icono: Church,
  },
  {
    titulo: "Recepción de invitados",
    hora: "6:00 PM",
    icono: GlassWater,
  },
  {
    titulo: "Entrada de la quinceañera",
    hora: "7:00 PM",
    icono: Crown,
  },
  {
    titulo: "Vals de XV años",
    hora: "7:30 PM",
    icono: Music2,
  },
  {
    titulo: "Cena",
    hora: "8:30 PM",
    icono: UtensilsCrossed,
  },
  {
    titulo: "Pastel y celebración",
    hora: "10:00 PM",
    icono: Cake,
  },
  {
    titulo: "Fin de la celebración",
    hora: "12:00 AM",
    icono: MoonStar,
  },
];

// ==========================================
// ANIMACIONES
// ==========================================

const animacionEntrada = {
  oculto: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// TARJETA DE EVENTO
// ==========================================

const EventoItinerario = ({
  titulo,
  hora,
  icono: Icono,
  ultimo,
}) => {
  return (
    <motion.div
      variants={animacionEntrada}
      className="
        relative
        flex
        items-start
        gap-4
        sm:gap-8
      "
    >
      {/* ======================================
          COLUMNA DEL ICONO Y LÍNEA
      ====================================== */}

      <div
        className="
          relative
          flex
          shrink-0
          flex-col
          items-center
        "
      >

        {/* ICONO CIRCULAR */}

        <div
          className="
            relative
            z-10
            flex
            h-16 w-16
            items-center
            justify-center
            rounded-full
            border border-[#C8AD85]/60
            bg-[#DFEAF2]
            shadow-[0_8px_25px_rgba(64,87,107,0.12)]
            sm:h-20
            sm:w-20
          "
        >
          <Icono
            size={29}
            strokeWidth={1.4}
            className="text-[#40576B]"
          />
        </div>

        {/* LÍNEA VERTICAL */}

        {!ultimo && (
          <div
            className="
              absolute
              top-16
              bottom-[-2.5rem]
              w-[2px]
              bg-[#C8AD85]/60
              sm:top-20
            "
          />
        )}

      </div>

      {/* ======================================
          INFORMACIÓN DEL EVENTO
      ====================================== */}

      <div
        className="
          min-w-0
          flex-1
          pb-10
          sm:pb-12
        "
      >
        <div
          className="
            rounded-2xl
            border border-[#A9C5D8]/50
            bg-[#DFEAF2]/55
            px-5
            py-5
            transition-all
            duration-300
            hover:border-[#C8AD85]/80
            hover:shadow-[0_10px_30px_rgba(64,87,107,0.10)]
            sm:px-8
            sm:py-6
          "
        >

          {/* HORA */}

          <p
            className="
              mb-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#8E744F]
              sm:text-sm
            "
          >
            {hora}
          </p>

          {/* NOMBRE DEL EVENTO */}

          <h3
            className="
              font-playfair
              text-xl
              leading-snug
              text-[#40576B]
              sm:text-2xl
            "
          >
            {titulo}
          </h3>

        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL - ITINERARIO
// ==========================================

const Itinerario = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#40576B]
        px-5
        py-20
        sm:py-28
      "
    >

      {/* ======================================
          DECORACIONES DEL FONDO
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-36
          top-20
          h-80
          w-80
          rounded-full
          border border-[#A9C5D8]/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-36
          bottom-20
          h-80
          w-80
          rounded-full
          border border-[#C8AD85]/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-96
          w-96
          rounded-full
          bg-[#A9C5D8]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -bottom-32
          h-96
          w-96
          rounded-full
          bg-[#C8AD85]/10
          blur-3xl
        "
      />

      {/* DESTELLOS */}

      <Sparkles
        size={25}
        strokeWidth={1}
        className="
          absolute
          left-8
          top-12
          text-[#C8AD85]/60
        "
      />

      <Sparkles
        size={22}
        strokeWidth={1}
        className="
          absolute
          bottom-12
          right-8
          text-[#C8AD85]/60
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
        "
      >

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
          viewport={{ once: true, amount: 0.1 }}
          className="
            relative
            overflow-hidden
            rounded-tl-[4rem]
            rounded-br-[4rem]
            rounded-tr-2xl
            rounded-bl-2xl
            border border-[#C8AD85]/45
            bg-[#F7FAFC]
            px-6
            py-14
            shadow-[0_25px_70px_rgba(0,0,0,0.20)]
            sm:px-12
            sm:py-16
          "
        >

          {/* DECORACIÓN SUPERIOR */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              border border-[#A9C5D8]/30
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-12
              -top-12
              h-40
              w-40
              rounded-full
              border border-[#C8AD85]/25
            "
          />

          {/* ======================================
              ENCABEZADO
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              z-10
              text-center
            "
          >

            {/* ICONO DECORATIVO */}

            <div
              className="
                mx-auto
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border border-[#C8AD85]/50
                bg-[#DFEAF2]
              "
            >
              <Crown
                size={30}
                strokeWidth={1.2}
                className="text-[#40576B]"
              />
            </div>

            {/* SUBTÍTULO */}

            <p
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#9A7E55]
                sm:text-sm
              "
            >
              Momentos de mis XV años
            </p>

            {/* TÍTULO */}

            <h2
              className="
                font-cursiveDancing
                text-5xl
                text-[#40576B]
                sm:text-6xl
                md:text-7xl
              "
            >
              Itinerario
            </h2>

            {/* SEPARADOR */}

            <div
              className="
                mx-auto
                my-8
                flex
                items-center
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

            {/* DESCRIPCIÓN */}

            <p
              className="
                mx-auto
                max-w-xl
                font-playfair
                text-base
                leading-relaxed
                text-[#40576B]/80
                sm:text-lg
              "
            >
              Cada momento de mis XV años será parte
              de un sueño hecho realidad.
              Me encantará que me acompañes a vivir
              cada instante de esta celebración
              tan especial.
            </p>

          </motion.div>

          {/* ======================================
              LÍNEA DE TIEMPO
          ====================================== */}

          <motion.div
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              staggerChildren: 0.12,
            }}
            className="
              relative
              z-10
              mx-auto
              mt-14
              max-w-2xl
            "
          >

            {eventos.map((evento, index) => (
              <EventoItinerario
                key={`${evento.titulo}-${index}`}
                {...evento}
                ultimo={
                  index === eventos.length - 1
                }
              />
            ))}

          </motion.div>

          {/* ======================================
              FRASE FINAL
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              z-10
              mt-4
              text-center
            "
          >

            {/* SEPARADOR */}

            <div
              className="
                mx-auto
                mb-7
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <span className="h-px w-12 bg-[#C8AD85]" />

              <Sparkles
                size={19}
                strokeWidth={1.2}
                className="text-[#C8AD85]"
              />

              <span className="h-px w-12 bg-[#C8AD85]" />
            </div>

            {/* FRASE */}

            <p
              className="
                font-cursiveDancing
                text-3xl
                text-[#40576B]
                sm:text-4xl
              "
            >
              ¡Te espero para celebrar mis XV!
            </p>

            {/* FIRMA */}

            <p
              className="
                mt-4
                font-playfair
                text-sm
                uppercase
                tracking-[0.25em]
                text-[#9A7E55]
              "
            >
              Darla Sanchez
            </p>

          </motion.div>

          {/* ======================================
              LÍNEAS DECORATIVAS
          ====================================== */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-[3px]
              w-28
              -translate-x-1/2
              bg-[#C8AD85]
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-[3px]
              w-28
              -translate-x-1/2
              bg-[#C8AD85]
            "
          />

        </motion.div>
      </div>
    </section>
  );
};

export default Itinerario;
