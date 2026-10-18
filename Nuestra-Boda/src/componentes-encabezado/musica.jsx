
"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Music,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
  Sparkles,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY XV CLÁSICO
// ==========================================

// Canción de la invitación
const MUSICA_URL = "/musica.mp3";

// Volumen inicial (0 a 1)
const VOLUMEN_INICIAL = 0.45;

// ==========================================
// PALETA DE COLORES - XV CLÁSICO
// ==========================================

const COLORES = {
  fondo: "#F7FAFC",
  azulClaro: "#DFEAF2",
  azulEmpolvado: "#A9C5D8",
  champagne: "#C8AD85",
  azulOscuro: "#40576B",
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const Musica = () => {
  const audioRef = useRef(null);

  const [mostrarModal, setMostrarModal] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [silenciado, setSilenciado] = useState(false);
  const [cargando, setCargando] = useState(false);

  // ==========================================
  // CONFIGURACIÓN DEL AUDIO
  // ==========================================

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = VOLUMEN_INICIAL;

    const detenerCarga = () => {
      setCargando(false);
    };

    const detectarReproduccion = () => {
      setReproduciendo(true);
      setCargando(false);
    };

    const detectarPausa = () => {
      setReproduciendo(false);
      setCargando(false);
    };

    const detectarSilencio = () => {
      setSilenciado(audio.muted);
    };

    audio.addEventListener("playing", detectarReproduccion);
    audio.addEventListener("pause", detectarPausa);
    audio.addEventListener("canplay", detenerCarga);
    audio.addEventListener("error", detenerCarga);
    audio.addEventListener("volumechange", detectarSilencio);

    return () => {
      audio.removeEventListener("playing", detectarReproduccion);
      audio.removeEventListener("pause", detectarPausa);
      audio.removeEventListener("canplay", detenerCarga);
      audio.removeEventListener("error", detenerCarga);
      audio.removeEventListener("volumechange", detectarSilencio);
    };
  }, []);

  // ==========================================
  // REPRODUCIR MÚSICA DESDE EL MODAL
  // ==========================================

  const reproducirMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      setCargando(true);

      audio.muted = false;
      setSilenciado(false);

      await audio.play();

      setReproduciendo(true);
      setMostrarModal(false);
    } catch (error) {
      console.error(
        "No se pudo reproducir la música:",
        error
      );

      setCargando(false);
      setMostrarModal(false);
    }
  };

  // ==========================================
  // CONTINUAR SIN MÚSICA
  // ==========================================

  const continuarSinMusica = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setReproduciendo(false);
    setCargando(false);
    setMostrarModal(false);
  };

  // ==========================================
  // ALTERNAR REPRODUCCIÓN
  // ==========================================

  const alternarReproduccion = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        setCargando(true);

        await audio.play();

        setReproduciendo(true);
      } catch (error) {
        console.error(
          "No se pudo reproducir la música:",
          error
        );

        setCargando(false);
      }
    } else {
      audio.pause();
      setReproduciendo(false);
    }
  };

  // ==========================================
  // SILENCIAR / ACTIVAR SONIDO
  // ==========================================

  const alternarSilencio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !audio.muted;
    setSilenciado(audio.muted);
  };

  return (
    <>
      {/* ======================================
          AUDIO
      ====================================== */}

      <audio
        ref={audioRef}
        src={MUSICA_URL}
        loop
        preload="auto"
      />

      {/* ======================================
          MODAL DE BIENVENIDA XV AÑOS
      ====================================== */}

      <AnimatePresence>
        {mostrarModal && (
          <motion.div
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              bg-[#1B2938]/75
              px-5
              backdrop-blur-xl
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="
                relative
                w-full max-w-[420px]
                overflow-hidden
                rounded-tl-[42px]
                rounded-br-[42px]
                border border-[#A9C5D8]/60
                bg-[#F7FAFC]
                px-7 py-10
                text-center
                shadow-[0_25px_70px_rgba(20,40,60,0.3)]
                sm:px-10 sm:py-12
              "
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
            >
              {/* DECORACIÓN SUPERIOR */}

              <div
                className="
                  absolute top-0 left-1/2
                  h-[3px] w-28
                  -translate-x-1/2
                  bg-[#C8AD85]
                "
              />

              {/* DESTELLOS DECORATIVOS */}

              <Sparkles
                size={25}
                strokeWidth={1}
                className="
                  absolute left-5 top-6
                  text-[#C8AD85]/70
                "
              />

              <Sparkles
                size={19}
                strokeWidth={1}
                className="
                  absolute bottom-7 right-5
                  text-[#C8AD85]/60
                "
              />

              {/* BOTÓN CERRAR */}

              <button
                type="button"
                onClick={continuarSinMusica}
                aria-label="Cerrar ventana de música"
                className="
                  absolute right-5 top-5
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-[#A9C5D8]/50
                  bg-[#DFEAF2]
                  text-[#40576B]
                  transition
                  hover:scale-105
                  hover:bg-white
                "
              >
                <X size={17} />
              </button>

              {/* ICONO MUSICAL */}

              <motion.div
                className="
                  mx-auto mb-6
                  flex h-20 w-20
                  items-center justify-center
                  rounded-full
                  border border-[#C8AD85]/60
                  bg-[#DFEAF2]
                  text-[#40576B]
                  shadow-[0_10px_30px_rgba(64,87,107,0.12)]
                "
                animate={{
                  rotate: reproduciendo ? 360 : 0,
                }}
                transition={{
                  duration: 8,
                  repeat: reproduciendo ? Infinity : 0,
                  ease: "linear",
                }}
              >
                <Music
                  size={31}
                  strokeWidth={1.5}
                />
              </motion.div>

              {/* SUBTÍTULO */}

              <p
                className="
                  mb-3
                  text-xs uppercase
                  tracking-[0.32em]
                  text-[#C8AD85]
                "
              >
                Darla Sanchez · Mis XV Años
              </p>

              {/* TÍTULO */}

              <h2
                className="
                  mb-4
                  font-playfair
                  text-3xl
                  font-medium
                  text-[#40576B]
                  sm:text-4xl
                "
              >
                La magia de mis XV años
              </h2>

              {/* DIVISOR DECORATIVO */}

              <div
                className="
                  mx-auto mb-6
                  flex items-center
                  justify-center gap-3
                "
              >
                <span
                  className="
                    h-px w-12
                    bg-[#C8AD85]/70
                  "
                />

                <Sparkles
                  size={15}
                  strokeWidth={1.3}
                  className="text-[#C8AD85]"
                />

                <span
                  className="
                    h-px w-12
                    bg-[#C8AD85]/70
                  "
                />
              </div>

              {/* DESCRIPCIÓN */}

              <p
                className="
                  mx-auto mb-5
                  max-w-[310px]
                  text-sm leading-7
                  text-[#40576B]/85
                "
              >
                Cada sueño tiene una melodía especial...
                Te invito a disfrutar la música que
                acompañará este momento tan importante
                de mi vida.
              </p>

              {/* FIRMA */}

              <p
                className="
                  mb-8
                  font-playfair
                  text-lg italic
                  text-[#40576B]
                "
              >
                Con cariño, Darla.
              </p>

              {/* BOTONES */}

              <div className="flex flex-col gap-3">

                {/* ESCUCHAR MÚSICA */}

                <button
                  type="button"
                  onClick={reproducirMusica}
                  disabled={cargando}
                  className="
                    flex w-full
                    items-center justify-center
                    gap-3
                    rounded-full
                    bg-[#40576B]
                    px-6 py-4
                    text-sm uppercase
                    tracking-[0.16em]
                    text-[#F7FAFC]
                    transition
                    hover:-translate-y-0.5
                    hover:bg-[#34495B]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {cargando ? (
                    <>
                      <span
                        className="
                          h-4 w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-white/40
                          border-t-white
                        "
                      />
                      Cargando
                    </>
                  ) : (
                    <>
                      <Play
                        size={17}
                        fill="currentColor"
                      />
                      Escuchar música
                    </>
                  )}
                </button>

                {/* CONTINUAR SIN MÚSICA */}

                <button
                  type="button"
                  onClick={continuarSinMusica}
                  className="
                    w-full
                    rounded-full
                    border border-[#A9C5D8]/80
                    bg-transparent
                    px-6 py-4
                    text-sm uppercase
                    tracking-[0.14em]
                    text-[#40576B]
                    transition
                    hover:bg-[#DFEAF2]
                  "
                >
                  Continuar sin música
                </button>
              </div>

              {/* DECORACIÓN INFERIOR */}

              <div
                className="
                  absolute bottom-0 left-1/2
                  h-[3px] w-28
                  -translate-x-1/2
                  bg-[#C8AD85]
                "
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================
          CONTROLES FLOTANTES
      ====================================== */}

      {!mostrarModal && (
        <motion.div
          className="
            fixed bottom-5 right-5
            z-[9998]
            flex items-center gap-2
            rounded-full
            border border-[#A9C5D8]/60
            bg-[#F7FAFC]/95
            p-2
            shadow-[0_12px_35px_rgba(64,87,107,0.2)]
            backdrop-blur-md
          "
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          {/* REPRODUCIR / PAUSAR */}

          <button
            type="button"
            onClick={alternarReproduccion}
            aria-label={
              reproduciendo
                ? "Pausar música"
                : "Reproducir música"
            }
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              bg-[#40576B]
              text-[#F7FAFC]
              transition
              hover:scale-105
              hover:bg-[#34495B]
            "
          >
            {cargando ? (
              <span
                className="
                  h-4 w-4
                  animate-spin
                  rounded-full
                  border-2
                  border-white/40
                  border-t-white
                "
              />
            ) : reproduciendo ? (
              <Pause
                size={18}
                fill="currentColor"
              />
            ) : (
              <Play
                size={18}
                fill="currentColor"
              />
            )}
          </button>

          {/* ACTIVAR / SILENCIAR */}

          <button
            type="button"
            onClick={alternarSilencio}
            aria-label={
              silenciado
                ? "Activar sonido"
                : "Silenciar música"
            }
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              text-[#40576B]
              transition
              hover:bg-[#DFEAF2]
            "
          >
            {silenciado ? (
              <VolumeX size={19} />
            ) : (
              <Volume2 size={19} />
            )}
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Musica;
