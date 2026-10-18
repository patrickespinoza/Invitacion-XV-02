
import React from "react";

export default function Portada() {
  return (
    <section className="relative w-full h-screen min-h-[500px] overflow-hidden">

      {/* ======================================
          FOTO DE PORTADA
      ====================================== */}

      <img
        src="/portada.png"
        alt="Darla Sanchez - Mis XV Años"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[center_15%]
        "
      />

      {/* ======================================
          CONTENIDO INFERIOR
      ====================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-10
          flex
          w-full
          flex-col
          items-center
          justify-end
          px-4
          pb-5
          text-center
          sm:pb-8
          md:pb-10
        "
      >

        {/* MIS XV AÑOS */}

        <p
          className="
            mb-3
            font-playfair
            text-xs
            uppercase
            tracking-[0.4em]
            text-white
            drop-shadow-lg
            sm:text-sm
          "
        >
          Mis XV Años
        </p>

        {/* NOMBRE DE LA QUINCEAÑERA */}

        <h1
          className="
            font-cursiveDancing
            text-5xl
            leading-tight
            text-white
            drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          Darla Sanchez
        </h1>

        {/* FECHA DEL EVENTO */}

        <p
          className="
            mt-3
            font-playfair
            text-sm
            uppercase
            tracking-[0.2em]
            text-white
            drop-shadow-lg
            sm:text-base
            md:text-lg
          "
        >
          11 · Junio · 2027
        </p>

      </div>

    </section>
  );
}
