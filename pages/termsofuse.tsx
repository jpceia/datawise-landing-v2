import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import React from 'react';
import { NextPage } from 'next';
import ContactData from '../utils/ContactData';

const TermsOfUse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Termos de Utilização | Datawise</title>
        <meta name="description" content="Conheça os nossos termos de utilização do website e serviços da DataWise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Termos de Utilização | Datawise" />
        <meta property="og:description" content="Conheça os nossos termos de utilização do website e serviços da DataWise." />
        <meta property="og:image" content="/pexels-photo-6153354.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.datawise.pt/termsofuse" />
        <meta property="og:site_name" content="DataWise" />
      </Head>

      <Navbar />

      <main>
        <section className="pt-36 pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Header section */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-10">
              <div className="bg-primary p-8 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Termos de Utilização</h1>
                <p className="text-lg opacity-90">Condições gerais de utilização do website e serviços da DataWise</p>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className="prose prose-blue max-w-none">
                  <p className="text-lg mb-8">
                    A sua privacidade é importante para nós. É política da DataWise respeitar a sua privacidade e cumprir todas as leis e
                    regulamentos aplicáveis em relação a qualquer informação pessoal que possamos recolher sobre si, incluindo no nosso
                    site, https://www.datawise.pt e noutros sites que possuímos e operamos.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Informação que Recolhemos</h2>
                  <p>
                    As informações que recolhemos incluem tanto as informações que você nos fornece conscientemente e ativamente ao utilizar
                    ou participar de qualquer um dos nossos serviços e promoções, como as informações automaticamente enviadas pelos seus
                    dispositivos durante o acesso aos nossos produtos e serviços.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Dados de Registo</h3>
                  <p>
                    Quando visita o nosso site, os nossos servidores podem registar automaticamente os dados padrão fornecidos pelo seu
                    navegador web. Isso pode incluir o endereço IP do seu dispositivo, o tipo e versão do seu navegador, as páginas que
                    visita, a data e hora da sua visita, o tempo gasto em cada página, outros detalhes sobre a sua visita e os detalhes
                    técnicos de quaisquer erros que possa encontrar.
                  </p>
                  <p>
                    Esteja ciente de que, embora esta informação não o identifique pessoalmente por si só, pode ser possível combiná-la com
                    outros dados para identificar individualmente determinadas pessoas.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Informações Pessoais</h3>
                  <p>Podemos solicitar informações pessoais que podem incluir uma ou mais das seguintes:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Endereço de e-mail</li>
                    <li>Nome</li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">
                    Razões Legítimas para Processar as Suas Informações Pessoais
                  </h2>
                  <p>
                    Recolhemos e usamos as suas informações pessoais apenas quando tivermos uma razão legítima para o fazer. Nesses casos,
                    apenas recolhemos informações pessoais que sejam razoavelmente necessárias para lhe fornecer os nossos serviços.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Recolha e Utilização da Informação</h2>
                  <p>Podemos recolher informações pessoais suas quando realizar qualquer uma das seguintes atividades no nosso site:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Utilizar um dispositivo móvel ou navegador web para aceder ao nosso conteúdo</li>
                    <li>Entrar em contacto connosco por e-mail, redes sociais ou tecnologias semelhantes</li>
                    <li>Quando nos menciona nas redes sociais</li>
                  </ul>
                  <p>
                    Podemos recolher, armazenar, usar e divulgar informações para os seguintes fins, e as informações pessoais não serão
                    processadas de forma incompatível com esses fins:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Para entrar em contacto e comunicar consigo</li>
                    <li>Para considerar a sua candidatura de emprego</li>
                  </ul>
                  <p>
                    Esteja ciente de que podemos combinar as informações que recolhemos sobre si com informações gerais ou dados de pesquisa
                    que recebemos de outras fontes confiáveis.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Segurança das Suas Informações Pessoais</h2>
                  <p>
                    Quando recolhemos e processamos informações pessoais, e enquanto mantivermos essas informações, iremos protegê-las por
                    meios comercialmente aceitáveis para prevenir perda e roubo, bem como acesso, divulgação, cópia, uso ou modificação não
                    autorizados.
                  </p>
                  <p>
                    Embora façamos o nosso melhor para proteger as informações pessoais que nos fornece, aconselhamos que nenhum método de
                    transmissão eletrónica ou armazenamento é 100% seguro, e ninguém pode garantir segurança absoluta dos dados. Cumpriremos
                    as leis aplicáveis em relação a qualquer violação de dados.
                  </p>
                  <p>
                    Você é responsável por selecionar qualquer palavra-passe e pela sua segurança, assegurando a segurança das suas próprias
                    informações no âmbito dos nossos serviços.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Por Quanto Tempo Guardamos as Suas Informações Pessoais</h2>
                  <p>
                    Guardamos as suas informações pessoais apenas pelo tempo necessário. Esse período pode depender de para que estamos a
                    utilizar as suas informações, de acordo com esta política de privacidade. Se as suas informações pessoais já não forem
                    necessárias, iremos eliminá-las ou torná-las anónimas, removendo todos os detalhes que o identifiquem.
                  </p>
                  <p>
                    No entanto, se necessário, podemos reter as suas informações pessoais para cumprir com uma obrigação legal, contábil ou
                    de relatórios ou para fins de arquivamento no interesse público, para fins de pesquisa científica ou histórica, ou para
                    fins estatísticos.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Transferências Internacionais de Informações Pessoais</h2>
                  <p>
                    As informações pessoais que recolhemos são armazenadas e/ou processadas onde nós ou os nossos parceiros, afiliados e
                    fornecedores terceiros mantêm instalações. Esteja ciente de que os locais onde armazenamos, processamos ou transferimos
                    as suas informações pessoais podem não ter as mesmas leis de proteção de dados que o país onde forneceu inicialmente as
                    informações.
                  </p>
                  <p>Se transferirmos as suas informações pessoais para terceiros noutros países:</p>
                  <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Realizaremos essas transferências em conformidade com os requisitos da legislação aplicável</li>
                    <li>Protegeremos as informações pessoais transferidas de acordo com esta política de privacidade</li>
                  </ol>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Os Seus Direitos e Controlo das Suas Informações Pessoais</h2>
                  <p>
                    Você tem sempre o direito de reter informações pessoais nossas, com o entendimento de que a sua experiência no nosso
                    site pode ser afetada. Não discriminaremos você por exercer qualquer um dos seus direitos sobre as suas informações
                    pessoais. Se nos fornecer informações pessoais, entende que iremos recolhê-las, armazená-las, utilizá-las e divulgá-las
                    de acordo com esta política de privacidade.
                  </p>
                  <p>Você tem o direito de solicitar detalhes de quaisquer informações pessoais que mantemos sobre si.</p>
                  <p>
                    Se recebermos informações pessoais sobre si de terceiros, iremos protegê-las conforme descrito nesta política de
                    privacidade. Se você é um terceiro que fornece informações pessoais sobre outra pessoa, garante e declara que tem o
                    consentimento dessa pessoa para nos fornecer as informações.
                  </p>
                  <p>
                    Se anteriormente concordou que utilizássemos as suas informações pessoais para fins de marketing direto, pode mudar de
                    ideia a qualquer momento. Iremos disponibilizar a opção de cancelar a subscrição da nossa base de dados de e-mails ou
                    optar por não receber comunicações. Esteja ciente de que poderemos precisar de solicitar informações específicas para
                    ajudar a confirmar a sua identidade.
                  </p>
                  <p>
                    Se acredita que as informações que mantemos sobre si estão incorretas, desatualizadas, incompletas, irrelevantes ou
                    enganosas, entre em contacto connosco utilizando os detalhes fornecidos nesta política de privacidade. Tomaremos as
                    medidas razoáveis para corrigir qualquer informação que se revele incorreta, incompleta, enganosa ou desatualizada.
                  </p>
                  <p>
                    Se acreditar que violámos uma lei de proteção de dados relevante e deseja apresentar uma reclamação, entre em contacto
                    connosco utilizando os detalhes abaixo e forneça-nos todos os detalhes da alegada violação. Iremos investigar
                    imediatamente a sua reclamação e responderemos, por escrito, expondo o resultado da investigação e as medidas que
                    tomaremos para lidar com a sua reclamação. Você também tem o direito de entrar em contacto com uma autoridade reguladora
                    ou de proteção de dados em relação à sua reclamação.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Uso de Cookies</h2>
                  <p>
                    Utilizamos "cookies" para recolher informações sobre si e sobre a sua atividade no nosso site. Um cookie é um pequeno
                    pedaço de dados que o nosso site armazena no seu computador e que acede sempre que o visita, para que possamos
                    compreender como usa o nosso site. Isso ajuda-nos a oferecer-lhe conteúdo com base nas suas preferências.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Limites da Nossa Política</h2>
                  <p>
                    O nosso site pode conter links para sites externos que não são operados por nós. Esteja ciente de que não temos controlo
                    sobre o conteúdo e as políticas desses sites, e não podemos aceitar responsabilidade ou obrigação pelas respetivas
                    práticas de privacidade.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Alterações a Esta Política</h2>
                  <p>
                    A nosso critério, podemos alterar a nossa política de privacidade para refletir atualizações nos nossos processos de
                    negócios, práticas aceitáveis ou alterações legislativas ou regulamentares. Se decidirmos alterar esta política de
                    privacidade, publicaremos as alterações aqui no mesmo link através do qual está a aceder a esta política de privacidade.
                  </p>
                  <p>
                    Se for exigido por lei, solicitaremos o seu consentimento ou daremos a oportunidade de optar por permitir ou recusar,
                    conforme aplicável, quaisquer novos usos das suas informações pessoais.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">Contacte-nos</h2>
                  <p>
                    Para quaisquer questões ou preocupações relacionadas com a sua privacidade, pode contactar-nos através dos seguintes
                    detalhes:
                  </p>
                  <p className="mt-2">
                    <strong>Preocupações Relacionadas com a Privacidade</strong>
                    <br />
                    E-mail:{' '}
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

export default TermsOfUse;
