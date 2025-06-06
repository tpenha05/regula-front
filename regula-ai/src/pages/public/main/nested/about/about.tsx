import { useRef, useState, useEffect } from "react";
import { Footer } from "../../components/footer";
import { BlackHeader } from "../../components/blackHeader";
import { Link } from "react-router-dom";

export const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const [countUp, setCountUp] = useState({
    productivity: 0,
    cost: 0,
    satisfaction: 0,
    partnerships: 0,
  });

  useEffect(() => {
    if (!statsVisible) return;
    const intervalId = window.setInterval(() => {
      setCountUp((prev) => {
        const next = {
          productivity: Math.min(prev.productivity + 1, 50),
          cost: Math.min(prev.cost + 1, 38),
          satisfaction: Math.min(prev.satisfaction + 1, 20),
          partnerships: Math.min(prev.partnerships + 1, 10),
        };
        if (
          next.productivity === 50 &&
          next.cost === 38 &&
          next.satisfaction === 20 &&
          next.partnerships === 10
        ) {
          clearInterval(intervalId);
        }
        return next;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, [statsVisible]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setStatsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => {
      if (statsRef.current) obs.unobserve(statsRef.current);
    };
  }, []);

  return (
    <>
      <BlackHeader />

      <main className="w-full">
        <section className="pt-32 sm:pt-40 pb-16 px-4">
          <div className="w-[90%] mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 sm:mb-8 md:mb-10 text-gray-900">A Regula.ai</h1>

            <div className="w-full relative rounded-lg overflow-hidden">
              <img src="/about/bg1.png" alt="Regula.ai Banner" className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover" />

              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 text-white">
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
                  Começamos.<br />
                  Evoluímos.<br />
                  Mudamos.<br />
                  <span className="hidden sm:block">Mas mantivemos o nosso objetivo:</span>
                  <span className="block sm:hidden">Mas mantivemos nosso objetivo:</span>
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mt-4 sm:mt-6 md:mt-8">
                  <span className="text-yellow-500">Soluções</span><br />
                  focadas em sua<br />
                  empresa
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full border-t border-gray-200 my-4"></div>

        <section className="py-12 sm:py-16 md:py-20 px-4 bg-blue-950 text-white">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center sm:text-left">Valores que guiam a empresa</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b border-white pb-2">Inovação</h3>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-justify sm:text-left">
                  Utilizamos inteligência artificial de forma estratégica
                  para transformar a regulação de sinistros,
                  antecipando tendências e entregando soluções
                  tecnológicas de ponta ao mercado segurador.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b border-white pb-2">Confiabilidade</h3>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-justify sm:text-left">
                  Garantimos segurança, precisão e conformidade em
                  cada etapa do processo. Nossas soluções seguem os
                  mais altos padrões de proteção de dados e
                  integridade operacional.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b border-white pb-2">Agilidade</h3>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-justify sm:text-left">
                  Valorizamos a eficiência e a rapidez na análise de
                  sinistros, automatizando processos para reduzir o
                  tempo de resposta e melhorar a experiência de
                  seguradoras e segurados.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-18 px-4 bg-white">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6 text-gray-900 text-center sm:text-left">Nossos Resultados</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center sm:text-left">
              A Regula.ai transforma a análise de sinistros com tecnologia de ponta,
              aumentando a eficiência e promovendo resultados reais para empresas
            </p>

            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-8 md:gap-y-10 gap-x-4 py-8 sm:py-10 md:py-12 place-items-center"
            >
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900">+{countUp.productivity}%</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">Produtividade</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900">{countUp.cost}%</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">Diminuição dos gastos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900">+{countUp.satisfaction}%</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">Satisfação dos clientes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900">+{countUp.partnerships}</p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">Parcerias</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};