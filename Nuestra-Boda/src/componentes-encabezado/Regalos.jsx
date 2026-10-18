
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  Heart,
  Sparkles,
  Copy,
  Check,
  X,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY XV CLÁSICO
// ==========================================

const informacion = {
  subtitulo: "Un detalle con cariño",
  titulo: "Mesa de Regalos",

  descripcion:
    "El regalo más bonito será compartir contigo este día tan especial. Si deseas tener un detalle conmigo, puedes hacerlo con un regalo físico o mediante una transferencia bancaria.",

  fraseFinal:
    "Gracias por formar parte de este sueño tan especial.",
};

// DATOS BANCARIOS DE EJEMPLO
// Reemplazar antes de publicar la invitación.

const datosBancarios = {
  banco: "Santander",
  numero: "1234 5678 9012 3456",
  titular: "Juan Pérez",
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Regalos = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);

  // ==========================================
  // COPIAR NÚMERO BANCARIO
  // ==========================================

  const copiarCuenta = async () => {
    try {
      await navigator.clipboard.writeText(
        datosBancarios.numero.replace(/\s/g, "")
      );

      setCopiado(true);
    } catch (error) {
      console.error(
        "No se pudo copiar el número bancario:",
        error
      );
    }
  };

  // ==========================================
  // CERRAR MODAL CON ESCAPE
  // ==========================================

  useEffect(() => {
    if (!mostrarModal) {
      setCopiado(false);
      return;
    }

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setMostrarModal(false);
      }
    };

    document.addEventListener(
      "keydown",
      cerrarConEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        cerrarConEscape
      );
    };
  }, [mostrarModal]);

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
          DECORACIONES DEL FONDO
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute -left-32 -top-32
          h-96 w-96
          rounded-full
          bg-[#DFEAF2]/70
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-32 -right-32
          h-96 w-96
          rounded-full
          bg-[#A9C5D8]/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -left-36 top-20
          h-80 w-80
          rounded-full
          border border-[#A9C5D8]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-36 bottom-20
          h-80 w-80
          rounded-full
          border border-[#C8AD85]/25
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
          border border-[#A9C5D8]/60
          bg-[#DFEAF2]
          shadow-[0_25px_70px_rgba(64,87,107,0.14)]
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
            border border-[#C8AD85]/30
          "
        />

        <div
          className="
            pointer-events-none
            absolute -right-9 -top-9
            h-28 w-28
            rounded-full
            border border-[#A9C5D8]/40
          "
        />

        <div
          className="
            relative z-10
            px-7 py-16
            text-center
            sm:px-14
            sm:py-20
          "
        >
          {/* ======================================
              ENCABEZADO
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* ADORNO */}

            <div
              className="
                mb-6
                flex items-center
                justify-center
                gap-3
              "
            >
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
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#8E744F]
                sm:text-sm
              "
            >
              {informacion.subtitulo}
            </p>

            {/* TÍTULO */}

            <h2
              className="
                mt-5
                font-cursiveDancing
                text-5xl
                leading-tight
                text-[#40576B]
                sm:text-6xl
                md:text-7xl
              "
            >
              {informacion.titulo}
            </h2>

            {/* SEPARADOR */}

            <div
              className="
                mx-auto mt-8
                flex items-center
                justify-center
                gap-4
              "
            >
              <span className="h-px w-14 bg-[#C8AD85]" />

              <Heart
                size={16}
                strokeWidth={1.3}
                className="text-[#C8AD85]"
              />

              <span className="h-px w-14 bg-[#C8AD85]" />
            </div>
          </motion.div>

          {/* ======================================
              IMAGEN DEL REGALO
          ====================================== */}

          <motion.img
            whileHover={{
              scale: 1.05,
              rotate: 3,
            }}
            transition={{ duration: 0.3 }}
            src="/regalo1.png"
            alt="Detalle de regalo para mis XV años"
            className="
              mx-auto
              mt-12
              w-28
              object-contain
              sm:w-32
            "
          />

          {/* ======================================
              MENSAJE PRINCIPAL
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="
                mx-auto
                mt-10
                max-w-2xl
                font-playfair
                text-lg
                leading-9
                text-[#40576B]
                sm:text-xl
                sm:leading-10
              "
            >
              {informacion.descripcion}
            </p>

            {/* DETALLES DE REGALO */}

            <div
              className="
                mx-auto
                mt-9
                flex max-w-md
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border border-[#A9C5D8]/60
                  bg-[#F7FAFC]/80
                  px-5
                  py-3
                  text-[#40576B]
                "
              >
                <Gift
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#8E744F]"
                />

                <span className="font-playfair text-sm">
                  Regalos físicos
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border border-[#A9C5D8]/60
                  bg-[#F7FAFC]/80
                  px-5
                  py-3
                  text-[#40576B]
                "
              >
                <Heart
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#8E744F]"
                />

                <span className="font-playfair text-sm">
                  Transferencia bancaria
                </span>
              </div>
            </div>

            {/* ======================================
                BOTÓN DATOS BANCARIOS
            ====================================== */}

            <motion.button
              type="button"
              onClick={() => setMostrarModal(true)}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              className="
                mt-12
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#40576B]
                px-9
                py-4
                font-playfair
                text-base
                text-[#F7FAFC]
                shadow-[0_15px_35px_rgba(64,87,107,0.20)]
                transition-colors
                duration-300
                hover:bg-[#536F85]
                sm:text-lg
              "
            >
              <Gift
                size={20}
                strokeWidth={1.5}
              />

              Ver datos bancarios
            </motion.button>

            {/* FRASE FINAL */}

            <p
              className="
                mx-auto
                mt-10
                max-w-md
                font-playfair
                text-base
                italic
                leading-relaxed
                text-[#40576B]/80
                sm:text-lg
              "
            >
              {informacion.fraseFinal}
            </p>

            {/* FIRMA */}

            <p
              className="
                mt-6
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

      {/* ======================================
          MODAL DE DATOS BANCARIOS
      ====================================== */}

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/75
              px-5
              backdrop-blur-xl
            "
            onClick={() => setMostrarModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* TARJETA BANCARIA */}

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Datos bancarios"
              onClick={(e) => e.stopPropagation()}
              initial={{
                scale: 0.85,
                opacity: 0,
                y: 60,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
                y: 60,
              }}
              transition={{ duration: 0.35 }}
              className="
                relative
                w-full
                max-w-[380px]
                rounded-[2rem]
                border border-[#C8AD85]/50
                bg-[#40576B]
                p-8
                text-[#F7FAFC]
                shadow-[0_30px_80px_rgba(0,0,0,0.4)]
              "
            >
              {/* CERRAR */}

              <button
                type="button"
                onClick={() => setMostrarModal(false)}
                aria-label="Cerrar datos bancarios"
                className="
                  absolute
                  right-5
                  top-5
                  text-[#F7FAFC]
                  transition-colors
                  hover:text-[#C8AD85]
                "
              >
                <X size={25} />
              </button>

              {/* ICONO */}

              <div
                className="
                  mb-6
                  flex h-14 w-14
                  items-center
                  justify-center
                  rounded-full
                  border border-[#C8AD85]/50
                  bg-[#F7FAFC]/10
                "
              >
                <Gift
                  size={26}
                  strokeWidth={1.3}
                  className="text-[#C8AD85]"
                />
              </div>

              {/* BANCO */}

              <p
                className="
                  mb-2
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#C8AD85]
                "
              >
                Datos para transferencia
              </p>

              <h3
                className="
                  font-playfair
                  text-3xl
                  text-[#F7FAFC]
                "
              >
                {datosBancarios.banco}
              </h3>

              {/* DECORACIÓN */}

              <div
                className="
                  mt-6
                  h-8 w-12
                  rounded-md
                  border border-[#C8AD85]/60
                  bg-[#C8AD85]
                "
              />

              {/* NÚMERO */}

              <p
                className="
                  mt-8
                  break-all
                  font-playfair
                  text-lg
                  tracking-[0.12em]
                  text-[#F7FAFC]
                "
              >
                {datosBancarios.numero}
              </p>

              {/* TITULAR */}

              <p
                className="
                  mt-7
                  text-sm
                  text-[#DFEAF2]/75
                "
              >
                Titular
              </p>

              <p
                className="
                  mt-2
                  font-playfair
                  text-lg
                  text-[#F7FAFC]
                "
              >
                {datosBancarios.titular}
              </p>

              {/* BOTÓN COPIAR */}

              <button
                type="button"
                onClick={copiarCuenta}
                className="
                  mt-9
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#C8AD85]
                  py-3
                  font-semibold
                  text-[#40576B]
                  transition-colors
                  hover:bg-[#D9C29E]
                "
              >
                {copiado ? (
                  <>
                    <Check size={19} />
                    Número copiado
                  </>
                ) : (
                  <>
                    <Copy size={19} />
                    Copiar número
                  </>
                )}
              </button>

              {/* MENSAJE */}

              <p
                className="
                  mt-6
                  text-center
                  font-playfair
                  text-sm
                  italic
                  text-[#DFEAF2]/80
                "
              >
                Gracias por tu cariño y tus buenos deseos.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Regalos;
