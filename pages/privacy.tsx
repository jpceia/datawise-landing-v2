import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import React from 'react';
import { NextPage } from 'next';
import ContactData from '../utils/ContactData';

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Datawise</title>
        <meta name="description" content="Conheça a nossa política de privacidade e proteção de dados pessoais." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Política de Privacidade | Datawise" />
        <meta property="og:description" content="Conheça a nossa política de privacidade e proteção de dados pessoais." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.datawise.pt/privacy" />
        <meta property="og:image" content="/images/pexels-photo-6153354.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className="pt-36 pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Header section */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-10">
              <div className="bg-primary p-8 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Política de Privacidade e Proteção de Dados</h1>
                <p className="text-lg opacity-90">Transparência e segurança no tratamento dos seus dados</p>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="prose prose-blue max-w-none">
                  <p className="text-lg mb-8">
                    Na Datawise, valorizamos a sua privacidade e estamos comprometidos com a proteção dos seus dados pessoais. Esta política
                    descreve quais informações recolhemos, como as utilizamos e as opções que tem em relação aos seus dados.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Informações que Recolhemos</h2>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Informações fornecidas diretamente por si:</h3>
                  <p>
                    Solicitamos determinadas informações, como o seu nome verdadeiro, empresa e endereço de e-mail, caso entre em contacto
                    connosco. Podemos também guardar qualquer mensagem enviada através do Formulário de Contacto. Utilizamos essas
                    informações para operar e para nos mantermos em contacto consigo.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Informações analíticas:</h3>
                  <p>
                    Podemos recolher diretamente dados analíticos, ou usar ferramentas e serviços de análise de terceiros, para nos ajudar a
                    medir o tráfego e as tendências de uso. Estas ferramentas recolhem informações enviadas pelo seu navegador ou
                    dispositivo móvel, incluindo as páginas que visita e outras informações que nos ajudam a melhorar o nosso website.
                    Recolhemos e utilizamos essas informações de forma agregada, o que significa que não podem ser usadas para identificar
                    qualquer utilizador individual.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Informações sobre cookies:</h3>
                  <p>
                    Detalhes completos podem ser encontrados na nossa Política de Cookies. Quando visita o nosso website, podemos enviar um
                    ou mais cookies — um pequeno ficheiro de texto contendo uma cadeia de caracteres alfanuméricos — para o seu computador,
                    que identifica de forma única o seu navegador e permite que a Datawise melhore a sua navegação no website. Um cookie
                    também pode transmitir informações sobre como utiliza o site (por exemplo, as páginas que visualiza, os links que clica
                    e outras ações).
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Como Utilizamos as Informações</h2>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Comunicações comerciais e de marketing:</h3>
                  <p>
                    Usamos as informações que recolhemos, como o seu endereço de e-mail, para nos comunicarmos diretamente consigo. Podemos
                    enviar-lhe e-mails contendo newsletters, insights e notícias especiais. Se não desejar receber esses e-mails, terá a
                    opção de cancelar a subscrição ou alterar as suas preferências.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Uso das informações que recolhemos:</h3>
                  <p>Podemos usar cookies para:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>
                      Lembrar informações, para que não tenha que as introduzir novamente durante a sua visita ou na próxima vez que visitar
                      o site
                    </li>
                    <li>Fornecer conteúdo e informações personalizados</li>
                    <li>Monitorizar a eficácia do nosso website</li>
                    <li>Acompanhar métricas agregadas, como o número total de visitantes, tráfego e padrões demográficos</li>
                    <li>Diagnosticar ou resolver problemas tecnológicos</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Partilha de Informações</h2>
                  <p>Não alugamos nem vendemos as suas informações a terceiros fora da Datawise sem o seu consentimento.</p>
                  <p>
                    A Política de Privacidade da Datawise não se aplica a, e não podemos controlar, as atividades de terceiros. Consulte as
                    respetivas políticas de privacidade desses terceiros para mais informações.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Segurança das Informações</h2>
                  <p>
                    A Datawise preocupa-se com a segurança das suas informações e utiliza medidas de segurança comercialmente razoáveis para
                    preservar a integridade e segurança de todas as informações recolhidas através do website.
                  </p>
                  <p>
                    No entanto, a Datawise não pode garantir a segurança de qualquer informação transmitida e não pode assegurar que essas
                    informações não possam ser acedidas, divulgadas, alteradas ou destruídas.
                  </p>
                  <p>
                    No caso de qualquer informação sob o nosso controlo ser comprometida como resultado de uma violação de segurança, a
                    Datawise tomará medidas razoáveis para investigar a situação e, quando apropriado, notificará as pessoas cujas
                    informações possam ter sido comprometidas, de acordo com as leis e regulamentos aplicáveis.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">As Suas Escolhas</h2>
                  <p>
                    Tem controlo sobre as informações que partilha connosco. Pode também parar de receber comunicações promocionais por
                    e-mail. Esforçamo-nos por processar rapidamente todos os pedidos de cancelamento de subscrição.
                  </p>
                  <p>
                    Consulte as informações técnicas do seu navegador ou dispositivo móvel para obter instruções sobre como eliminar e
                    desativar cookies e outras ferramentas de rastreamento. Dependendo do tipo de dispositivo, pode não ser possível
                    eliminar ou desativar alguns mecanismos de rastreamento. Note que desativar cookies e/ou outras ferramentas de
                    rastreamento impede a Datawise de acompanhar as atividades do seu navegador e o uso em atividades de publicidade
                    direcionada por terceiros. No entanto, tal poderá desativar muitas das funcionalidades disponíveis.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Contacte-nos</h2>
                  <p>
                    Se tiver dúvidas sobre esta Política de Privacidade ou as práticas de privacidade da Datawise, entre em contacto
                    connosco através do e-mail:{' '}
                    <a href={`mailto:${ContactData.general.email}`} className="text-primary hover:underline">
                      {ContactData.general.email}
                    </a>
                  </p>

                  <div className="mt-12 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Última atualização:{' '}
                      {new Date().toLocaleDateString('pt-PT', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
