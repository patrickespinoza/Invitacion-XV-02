
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Send,
  CheckCircle2,
  Flower2,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY XV CLÁSICO
// ==========================================

// ENLACE DE GOOGLE APPS SCRIPT
// Conservamos el enlace original.

const URL_CONFIRMACION =
  "https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec";

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // ==========================================
  // ENVIAR CONFIRMACIÓN
  // ==========================================

  const enviarConfirmacion = async (e) => {
    e.preventDefault();

    if (!nombreInvitado.trim() || !asistencia) {
      setError(
        "Completa tu nombre y confirma tu asistencia."
      );
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (
        !invitados ||
        !Number.isInteger(Number(invitados)) ||
        Number(invitados) < 1
      )
    ) {
      setError("Indica el número de invitados.");
      return;
    }

    setError("");
    setEnviando(true);
    setEnviado(false);

    const data = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados:
        asistencia === "Sí asistiré" ? invitados : "0",
      mensaje: mensajeInvitado.trim(),
    };

    try {
      const respuesta = await fetch(URL_CONFIRMACION, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!respuesta.ok) {
        throw new Error(
          "No se pudo completar la solicitud."
        );
      }

      setEnviado(true);

      setNombreInvitado("");
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados("");
    } catch (error) {
      console.error(
        "Error al enviar confirmación:",
        error
      );

      setError(
        "Hubo un error al enviar. Intenta nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  // ==========================================
  // ESTILOS REUTILIZABLES
  // ==========================================

  const estiloCampo = `
    w-full
    bg-[#F7FAFC]
    border border-[#A9C5D8]/65
    rounded-2xl
    px-5 py-4
    text-[#40576B]
    placeholder:text-[#40576B]/45
    outline-none
    transition-all duration-300
    focus:border-[#C8AD85]
    focus:ring-2
    focus:ring-[#C8AD85]/25
  `;

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
          DECORACIONES DE FONDO
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute -left-36 top-16
          h-80 w-80
          rounded-full
          border border-[#A9C5D8]/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-36 bottom-16
          h-80 w-80
          rounded-full
          border border-[#C8AD85]/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute -left-32 -top-32
          h-96 w-96
          rounded-full
          bg-[#A9C5D8]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-32 -bottom-32
          h-96 w-96
          rounded-full
          bg-[#C8AD85]/10
          blur-3xl
        "
      />

      <Sparkles
        size={25}
        strokeWidth={1}
        className="
          absolute left-8 top-12
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

      {/* ======================================
          TARJETA PRINCIPAL
      ====================================== */}

      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          relative z-10
          mx-auto
          w-full
          max-w-3xl
          overflow-hidden
          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-2xl
          rounded-bl-2xl
          border border-[#C8AD85]/45
          bg-[#F7FAFC]
          px-6 py-12
          shadow-[0_25px_70px_rgba(0,0,0,0.22)]
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

        {/* ======================================
            ENCABEZADO
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >

          {/* ICONO PRINCIPAL */}

          <div
            className="
              mx-auto mb-7
              flex h-16 w-16
              items-center
              justify-center
              rounded-full
              border border-[#C8AD85]/50
              bg-[#DFEAF2]
            "
          >
            <Heart
              size={29}
              strokeWidth={1.3}
              className="text-[#40576B]"
            />
          </div>

          {/* SUBTÍTULO */}

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#9A7E55]
              sm:text-sm
            "
          >
            RSVP · Mis XV Años
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
            Confirma tu asistencia
          </h2>

          {/* SEPARADOR */}

          <div
            className="
              mx-auto my-8
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

          {/* DESCRIPCIÓN */}

          <p
            className="
              mx-auto
              max-w-xl
              font-playfair
              text-base
              leading-relaxed
              text-[#40576B]/85
              sm:text-lg
            "
          >
            Estoy muy emocionada de celebrar mis XV años
            y me encantaría compartir este momento
            tan especial contigo.
            Por favor, confirma tu asistencia
            para que podamos preparar todo con cariño.
          </p>

          {/* FIRMA */}

          <p
            className="
              mt-6
              font-cursiveDancing
              text-3xl
              text-[#C8AD85]
              sm:text-4xl
            "
          >
            Con cariño, Darla
          </p>

        </motion.div>

        {/* ======================================
            FORMULARIO
        ====================================== */}

        <form
          onSubmit={enviarConfirmacion}
          className="
            relative z-10
            mx-auto
            mt-12
            max-w-xl
            space-y-6
          "
        >

          {/* ======================================
              NOMBRE DEL INVITADO
          ====================================== */}

          <div>
            <label
              htmlFor="nombreInvitado"
              className="
                mb-3 block
                text-sm font-medium
                text-[#40576B]
              "
            >
              Nombre y apellido
            </label>

            <input
              id="nombreInvitado"
              type="text"
              placeholder="Escribe tu nombre completo"
              autoComplete="name"
              value={nombreInvitado}
              onChange={(e) =>
                setNombreInvitado(e.target.value)
              }
              className={estiloCampo}
            />
          </div>

          {/* ======================================
              ASISTENCIA
          ====================================== */}

          <div>
            <p
              className="
                mb-4
                text-sm font-medium
                text-[#40576B]
              "
            >
              ¿Me acompañarás en mis XV años?
            </p>

            <div
              className="
                grid grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >

              {/* SÍ ASISTIRÉ */}

              <button
                type="button"
                aria-pressed={
                  asistencia === "Sí asistiré"
                }
                onClick={() => {
                  setAsistencia("Sí asistiré");
                  setError("");
                  setEnviado(false);
                }}
                className={`
                  rounded-2xl
                  border
                  px-5 py-4
                  font-playfair
                  text-lg
                  transition-all duration-300
                  ${
                    asistencia === "Sí asistiré"
                      ? "border-[#40576B] bg-[#40576B] text-[#F7FAFC] shadow-lg"
                      : "border-[#A9C5D8]/65 bg-[#DFEAF2] text-[#40576B] hover:border-[#C8AD85]"
                  }
                `}
              >
                Sí asistiré
              </button>

              {/* NO ASISTIRÉ */}

              <button
                type="button"
                aria-pressed={
                  asistencia === "No podré asistir"
                }
                onClick={() => {
                  setAsistencia("No podré asistir");
                  setInvitados("");
                  setError("");
                  setEnviado(false);
                }}
                className={`
                  rounded-2xl
                  border
                  px-5 py-4
                  font-playfair
                  text-lg
                  transition-all duration-300
                  ${
                    asistencia === "No podré asistir"
                      ? "border-[#40576B] bg-[#40576B] text-[#F7FAFC] shadow-lg"
                      : "border-[#A9C5D8]/65 bg-[#DFEAF2] text-[#40576B] hover:border-[#C8AD85]"
                  }
                `}
              >
                No asistiré
              </button>

            </div>
          </div>

          {/* ======================================
              NÚMERO DE INVITADOS
          ====================================== */}

          {asistencia === "Sí asistiré" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label
                htmlFor="numeroInvitados"
                className="
                  mb-3 block
                  text-sm font-medium
                  text-[#40576B]
                "
              >
                Número de invitados
              </label>

              <input
                id="numeroInvitados"
                type="number"
                min="1"
                step="1"
                placeholder="¿Cuántas personas asistirán?"
                value={invitados}
                onChange={(e) =>
                  setInvitados(e.target.value)
                }
                className={estiloCampo}
              />
            </motion.div>
          )}

          {/* ======================================
              MENSAJE PARA DARLA
          ====================================== */}

          <div>
            <label
              htmlFor="mensajeInvitado"
              className="
                mb-3 block
                text-sm font-medium
                text-[#40576B]
              "
            >
              Mensaje para Darla

              <span
                className="
                  ml-2
                  text-[#40576B]/50
                "
              >
                (Opcional)
              </span>
            </label>

            <textarea
              id="mensajeInvitado"
              placeholder="Déjame unas palabras bonitas para mis XV años..."
              value={mensajeInvitado}
              onChange={(e) =>
                setMensajeInvitado(e.target.value)
              }
              rows={4}
              className={`${estiloCampo} resize-none`}
            />
          </div>

          {/* ======================================
              MENSAJE DE ERROR
          ====================================== */}

          {error && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              role="alert"
              className="
                rounded-xl
                border border-[#C8AD85]/50
                bg-[#DFEAF2]
                px-4 py-3
                text-sm
                text-[#40576B]
              "
            >
              {error}
            </motion.p>
          )}

          {/* ======================================
              MENSAJE DE ÉXITO
          ====================================== */}

          {enviado && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border border-[#A9C5D8]/60
                bg-[#DFEAF2]
                px-4 py-4
                text-sm
                text-[#40576B]
              "
            >
              <CheckCircle2
                size={22}
                className="
                  shrink-0
                  text-[#40576B]
                "
              />

              <span>
                ¡Tu confirmación fue enviada correctamente!
                Gracias por ser parte de mis XV años.
              </span>
            </motion.div>
          )}

          {/* ======================================
              BOTÓN DE ENVÍO
          ====================================== */}

          <motion.button
            type="submit"
            disabled={enviando}
            whileHover={
              enviando ? {} : { scale: 1.02 }
            }
            whileTap={
              enviando ? {} : { scale: 0.98 }
            }
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#40576B]
              px-8 py-4
              font-playfair
              text-lg
              text-[#F7FAFC]
              shadow-[0_15px_35px_rgba(64,87,107,0.25)]
              transition-colors duration-300
              hover:bg-[#536F85]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {enviando ? (
              "Enviando..."
            ) : (
              <>
                <Send
                  size={20}
                  strokeWidth={1.6}
                />

                Enviar confirmación
              </>
            )}
          </motion.button>

        </form>

        {/* ======================================
            LÍNEA DECORATIVA INFERIOR
        ====================================== */}

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

export default Confirmacion;
