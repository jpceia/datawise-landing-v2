import React from 'react';

const MissionValues = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full border-4 border-white"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full border-4 border-white"></div>
        <div className="absolute left-1/3 top-20 w-12 h-12 rounded-full bg-white"></div>
        <div className="absolute right-1/4 bottom-10 w-16 h-16 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            QUEM SOMOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Identidade</h2>
          <p className="text-lg opacity-80">
            Conheça os pilares que definem nossa abordagem e impulsionam o nosso compromisso com os clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all hover:translate-y-[-10px] hover:bg-white/15">
            <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Missão</h3>
            <p className="text-center opacity-90">
              Queremos transformar dados em decisões estratégicas, capacitando os nossos clientes a operar com máxima eficiência.
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="opacity-80">Orientação para resultados</span>
              </div>
              <div className="flex items-center mt-2">
                <svg className="w-5 h-5 text-primary-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="opacity-80">Transformação tecnológica</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all hover:translate-y-[-10px] hover:bg-white/15 md:mt-8">
            <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Valores</h3>
            <p className="text-center opacity-90">
              Valorizamos a inovação e o compromisso com resultados, entregando soluções personalizadas que impulsionam o sucesso dos nossos clientes.
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="opacity-80">Excelência técnica</span>
              </div>
              <div className="flex items-center mt-2">
                <svg className="w-5 h-5 text-primary-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="opacity-80">Integridade e transparência</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all hover:translate-y-[-10px] hover:bg-white/15 md:mt-16">
            <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Visão</h3>
            <p className="text-center opacity-90">
              Ambicionamos ser a referência em soluções de ciências de dados, reconhecidos pela capacidade de transformar organizações através da tecnologia.
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="opacity-80">Liderança de mercado</span>
              </div>
              <div className="flex items-center mt-2">
                <svg className="w-5 h-5 text-primary-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="opacity-80">Inovação constante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;