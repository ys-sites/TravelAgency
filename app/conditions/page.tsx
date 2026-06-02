'use client';

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useLang } from "../context/lang-context";

const t = {
  welcome: {
    EN: "LEGAL & COMPLIANCE",
    FR: "CADRE JURIDIQUE & CONFORMITÉ"
  },
  title: {
    EN: "General Terms & Conditions",
    FR: "Conditions Générales de Vente"
  },
  backHome: {
    EN: "Back to Home",
    FR: "Retour à l'accueil"
  }
};

export default function ConditionsPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <Navbar />

      {/* Header section with radial background mask */}
      <section className="relative h-[35vh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-end pb-10 px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto w-full z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-brand-gold hover:text-zinc-900 font-mono text-[10px] tracking-widest uppercase transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.backHome[lang]}</span>
          </Link>
          <div>
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase block mb-1">
              {t.welcome[lang]}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-white tracking-wide uppercase leading-tight font-bold">
              {t.title[lang]}
            </h1>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto bg-white">
        <div className="prose prose-zinc max-w-none space-y-10 text-[13px] md:text-[14px] leading-relaxed text-zinc-600 font-light">
          
          {lang === "FR" ? (
            <>
              <p className="font-medium text-zinc-900">
                Ces conditions s’appliquent pour toute transaction effectuée auprès de Majestic Experiences Voyages, qu’il s’agisse notamment de la réservation d’un forfait voyage (groupe, tout-inclus ou personnalisé) réservé à l’agence, par téléphone ou par le site de réservation en ligne, de la souscription à une assurance-voyage ou de l’achat d’un certificat cadeau. Veuillez les lire attentivement et n’hésitez pas à communiquer avec nous pour toutes précisions.
              </p>

              <p>
                Majestic Experiences Voyages est titulaire d’un permis d’Agence de voyage du Québec. Tous les clients ayant effectué une réservation de voyage auprès de Majestic Experiences Voyages sont admissibles pour des réclamations au Fonds d’indemnisation des clients des agences de voyage (FICAV), selon les conditions de l’Office de la protection du consommateur.
              </p>

              <hr className="border-zinc-200" />

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  TARIFS AFFICHÉS
                </h3>
                <p>
                  Tous les tarifs de Majestic Experiences Voyages, qu’ils soient publicisés sur le site web, dans les brochures ou autre, sont en dollars canadiens et incluent les taxes de vente TPS et TVQ.
                </p>
                <p>
                  Le prix et la disponibilité des forfaits voyages de groupe affichés sur le site Web sont mis à jour régulièrement. Le prix des voyages personnalisés et des tout-inclus du site web et des brochures sont valides au moment de leur parution et peuvent changer tout dépendamment de la disponibilité chez les fournisseurs.
                </p>
                <p>
                  Conformément aux lois de l’Office de la protection du consommateur, Majestic Experiences Voyages peut augmenter le prix d’un voyage déjà vendu à un client en cas de surcharge de carburant par le transporteur ou de modification du taux de change. Pour que le prix du voyage soit affecté par une augmentation du taux de change, il faut que le taux de change ait augmenté de plus de 5% entre la date d’achat du voyage et la 45e journée avant le départ. Dès que le prix du voyage augmente d’au moins 7% (avant taxes), le client peut décider d’annuler son voyage et d’être remboursé. Il peut sinon accepter un autre voyage en remplacement, en payant les frais excédents ou en étant remboursé des frais perçus en trop. L’augmentation des taxes de vente TPS ou TVQ pourrait entrainer une augmentation des tarifs affichés sur tous les médiums puisque ceux-ci incluent les taxes. Aucune modification de prix n’est permise dans les 30 jours qui précèdent la date de départ.
                </p>
                <p>
                  Toute réduction de prix d’un voyage résultant d’une promotion ou d’une décision de Majestic Experiences Voyages s’applique aux nouvelles réservations seulement. Les frais de bagages ne sont pas inclus dans nos forfaits, sauf indication contraire. Les tarifs affichés sur le site web peuvent changer sans préavis.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  MODES DE PAIEMENT
                </h3>
                <p>
                  Plusieurs modes de paiements sont acceptés pour faciliter l’achat de services :
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Argent comptant;</li>
                  <li>Chèques – Notez qu’un frais d’administration sera facturé pour le traitement d’un chèque sans provisions;</li>
                  <li>Virements Interac (maximum de 10 000 $);</li>
                  <li>Cartes débit;</li>
                  <li>Cartes de crédit : Visa, Mastercard, Discover et American Express;</li>
                  <li>Certificats-cadeaux ou crédits-voyages de Majestic Experiences Voyages.</li>
                </ul>

                <h4 className="font-bold text-zinc-800 mt-4">PAIEMENT PAR CARTE DE CRÉDIT</h4>
                <p>
                  La carte de crédit doit être détenue par un des passagers procédant à la réservation. En permettant l’usage de son numéro de carte de crédit, le client s’engage à respecter les conditions de réservation. Le titulaire de la carte, ayant fourni les informations apparaissant sur celle-ci, reconnaît la responsabilité de paiement de tous les passagers au dossier.
                </p>

                <h4 className="font-bold text-zinc-800 mt-4">UTILISATION DE LA CARTE DE CRÉDIT DU CLIENT À DISTANCE ET SANS CONTACT</h4>
                <p>
                  Le détenteur de la carte de crédit reconnaît que lorsque le conseiller en voyages autorisé effectue une transaction sans présenter la carte et en donnant uniquement son numéro de carte de crédit : Visa, Mastercard ou American Express (ex. : transaction téléphonique ou par internet) ou qu’il effectue une transaction à l’aide de la technologie sans contact, il assume les mêmes responsabilités que s’il avait signé une pièce justificative ou saisi son NIP sur un appareil accessible.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  DÉPÔT DE GARANTIE et PAIEMENT FINAL
                </h3>
                <p>
                  Nous vous recommandons de réserver votre séjour au moins 45 jours avant la date de départ. Un dépôt de garantie de 10%* de la valeur totale du voyage (assurances en sus) est requis au moment de la réservation suivi du paiement final 45 jours avant la date du départ. Pour les réservations effectuées 44 jours ou MOINS avant le départ, le paiement complet doit être versé au moment de la réservation. Exceptions : L’échéancier de paiement peut varier pour certains hôtels, compagnies aériennes, compagnies de location de voiture ainsi que certains fournisseurs ou forfaits groupes ou promotions. Si tel est le cas, les modalités de paiements vous seront alors présentés dans votre devis ou sur le détail du forfait en question sur notre site web ainsi que sur votre facture.
                </p>
                <p className="italic text-zinc-500">
                  *Pour les réservations de voyages en autocar, un dépôt de garantie de 25% de la valeur totale du voyage (assurances en sus) est requis au moment de la réservation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-2">
                  <div className="border border-zinc-100 p-4 rounded-xl bg-zinc-50/50">
                    <h5 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">Autocar</h5>
                    <p className="text-[12px] text-zinc-600">
                      Paiement final à 45 jours du départ. Pour les voyages d’une journée, le montant total est dû lors de la réservation. Le paiement complet est exigé pour tous les séjours de 1 jour et d’une valeur de moins de 300 $. Les voyages réservés sont 100% non remboursables. En cas d’annulation, le montant du dépôt consistera du frais d’annulation.
                    </p>
                  </div>
                  <div className="border border-zinc-100 p-4 rounded-xl bg-zinc-50/50">
                    <h5 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">Croisières</h5>
                    <p className="text-[12px] text-zinc-600">
                      Paiement final à 130 jours du départ.
                    </p>
                  </div>
                  <div className="border border-zinc-100 p-4 rounded-xl bg-zinc-50/50">
                    <h5 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">Golf</h5>
                    <p className="text-[12px] text-zinc-600">
                      Pour nos groupes accompagnés et nos forfaits individuels-offres exclusives, l’échéancier de paiement final varie de 70 à 90 jours avant le départ selon le fournisseur. Veuillez vous référer à l’information affichée sur le site web pour le groupe accompagné ou le forfait individuel-offre exclusive en question ou à la date apparaissant sur votre facture.
                    </p>
                  </div>
                  <div className="border border-zinc-100 p-4 rounded-xl bg-zinc-50/50">
                    <h5 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">Séjours et Circuits</h5>
                    <p className="text-[12px] text-zinc-600">
                      Paiement final à 70 jours du départ pour tous les groupes accompagnés Majestic. Pour les voyages forfaits individuels, le paiement final est dû à 45 jours du départ.
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  Majestic Experiences Voyages se réserve le droit d’annuler ladite réservation sans préavis, sans recours par le client et moyennant des frais d’annulation si le paiement complet n’a pas été effectué dans les délais prescrits. Pour les groupes privés, les conditions de dépôt et de paiement final peuvent varier selon l’entente entre les parties.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  POLITIQUE D’ANNULATION
                </h3>
                <p>
                  Les conditions d’annulations des voyages réservés chez Majestic Experiences Voyages, dans certains cas, peuvent refléter les conditions d’annulations de nos fournisseurs et partenaires. Il est possible de demander à votre conseiller en voyage les conditions d’annulations pour chaque services de votre réservation si applicable. En cas d’annulation avant d’avoir acquitté le paiement final, le montant du dépôt sera considéré comme le frais d’annulation. En cas d’annulation après avoir acquitté le paiement final, le frais d’annulation d’un forfait individuel représentera ce que les fournisseurs et partenaires facturent à Majestic Experiences Voyages selon les contrats négociés entre eux en plus du montant correspondant au dépôt. En cas d’annulation pour un forfait groupe accompagné, après avoir acquitté le paiement final, le frais d’annulation est 100 % du montant déboursé pour le voyage, le forfait groupe accompagné est 100% non remboursable après le paiement final.
                </p>
                <p>
                  Veuillez noter que le décès d’un passager avant le départ est considéré comme une annulation. Si les autres voyageurs au dossier désirent tout de même voyager, ils doivent contacter dans les plus brefs délais leur conseiller en voyages afin de s’enquérir des conditions d’annulation. Des frais peuvent s’appliquer. Une annulation doit être faite par courriel auprès de votre conseiller en voyage.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  FRAIS DE MODIFICATION DE RÉSERVATION & SERVICES NON UTILISÉS
                </h3>
                <p>
                  Pour tout changement après la réservation (par exemple : type de chambre, hôtel, type d’automobile), des frais de dossier seront appliqués en plus des frais inhérents à l’ajout ou la modification de la réservation. Les changements demandés sont sujets à la disponibilité des fournisseurs.
                </p>
                <p>
                  Aucun remboursement ne sera effectué par Majestic Experiences Voyages pour des services réservés et non utilisés par le client. Il n’est également pas possible d’utiliser ces services à une date ultérieure.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  BAGAGES & ÉQUIPEMENT
                </h3>
                <p>
                  Majestic Experiences Voyages se dégage de toute responsabilité concernant un dommage relatif aux bagages ou tout équipement sportif (sac de golf, paddleboard, valises, etc.) durant tous types de transports et la manutention par les employés de Majestic Experiences Voyages ou de ses fournisseurs. Majestic Experiences Voyages ne peut être tenu responsable d’un bris ou d’une perte de bagages et d’équipements sportifs auprès d’un service de voyages Majestic ou d’un fournisseur.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  ASSURANCE VOYAGE, PASSEPORT & MINEURS
                </h3>
                <p>
                  Majestic Experiences Voyages recommande fortement à ses clients de souscrire à une assurance voyage avant leur départ. Des assurances annulation, interruption et médicale peuvent être obtenues directement auprès de nos conseillers.
                </p>
                <p>
                  Le passeport canadien est requis partout et en tout temps pour voyager à l’extérieur du Canada. Certains pays exigent que le passeport soit valide pour une période excédant de 6 mois la date de retour prévue. Il est de la responsabilité du client de s’assurer que son passeport est valide pour la durée du séjour.
                </p>
                <p>
                  Un adulte doit être présent par chambre pour tout voyage auquel des mineurs (moins de 18 ans) participent.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  DONNÉES PERSONNELLES & LOIS APPLICABLES
                </h3>
                <p>
                  La protection de l’identité et des renseignements personnels des clients est une priorité pour Majestic Experiences Voyages. Nous demandons donc seulement les informations nécessaires au dossier pour le bon fonctionnement des opérations.
                </p>
                <p>
                  Les présentes conditions générales et les rapports de droit entre Majestic Experiences Voyages et ses clients sont régis par les lois de la province du Québec.
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="font-medium text-zinc-900">
                These general terms apply to all transactions carried out with Majestic Experiences Voyages, whether booking a travel package (group, all-inclusive, or customized), reserving via phone or online, subscribing to travel insurance, or purchasing gift certificates. Please read them carefully.
              </p>

              <p>
                Majestic Experiences Voyages holds a Quebec travel agency permit. All clients who have booked travel with Majestic Experiences Voyages are eligible for claims to the Travel Agents Client Compensation Fund (FICAV), in accordance with the Office de la protection du consommateur conditions.
              </p>

              <hr className="border-zinc-200" />

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  DISPLAYED RATES
                </h3>
                <p>
                  All rates advertised on the website, brochures, or otherwise are in Canadian dollars and include GST and QST sales taxes. Prices are updated regularly and depend on availability at suppliers.
                </p>
                <p>
                  Pursuant to consumer protection laws, Majestic Experiences Voyages may increase the price of travel in the event of fuel surcharges or exchange rate shifts prior to 45 days before departure. If price increases by 7% or more, the customer may cancel with a full refund. No price modifications are permitted within 30 days of departure.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  PAYMENT METHODS
                </h3>
                <p>
                  Several payment modes are accepted to facilitate purchases: cash, Interac e-transfers, debit, credit cards (Visa, Mastercard, Discover, Amex), and Majestic Experiences Voyages gift certificates.
                </p>
                <h4 className="font-bold text-zinc-800 mt-4">CREDIT CARD PAYMENTS</h4>
                <p>
                  The credit card must belong to one of the passengers in the reservation. The cardholder assumes financial responsibility for all passengers listed in the file. Remote transactions (phone/internet) carry the same responsibility as physical signatures.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  SECURITY DEPOSIT & FINAL PAYMENT
                </h3>
                <p>
                  We recommend booking at least 45 days prior to departure. A security deposit of 10%* of the total value (excluding insurance) is required at booking, followed by final payment 45 days before departure. Complete payment is required immediately for bookings made 44 days or less prior to departure.
                </p>
                <p className="italic text-zinc-500">
                  *For coach/bus tours, a 25% security deposit is required at booking.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pt-2">
                  <div className="border border-zinc-100 p-4 rounded-xl bg-zinc-50/50">
                    <h5 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">Bus Tours</h5>
                    <p className="text-[12px] text-zinc-600">
                      Final payment 45 days before departure. For single-day trips, full amount is due at booking. Single-day stays under $300 are 100% non-refundable.
                    </p>
                  </div>
                  <div className="border border-zinc-100 p-4 rounded-xl bg-zinc-50/50">
                    <h5 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">Cruises</h5>
                    <p className="text-[12px] text-zinc-600">
                      Final payment 130 days before departure.
                    </p>
                  </div>
                  <div className="border border-zinc-100 p-4 rounded-xl bg-zinc-50/50">
                    <h5 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">Golf</h5>
                    <p className="text-[12px] text-zinc-600">
                      For hosted groups and signature packages, final payment schedule varies between 70 to 90 days before departure depending on suppliers.
                    </p>
                  </div>
                  <div className="border border-zinc-100 p-4 rounded-xl bg-zinc-50/50">
                    <h5 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">Stays and Circuits</h5>
                    <p className="text-[12px] text-zinc-600">
                      Final payment 70 days before departure for hosted groups, and 45 days for individual packages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  CANCELLATION & MODIFICATION POLICY
                </h3>
                <p>
                  Cancellations must be made in writing. Security deposits are considered cancellation fees prior to final payments. Cancellation after final payments for individual packages aligns with supplier fee structures. Group bookings are 100% non-refundable after final payment.
                </p>
                <p>
                  Passenger death is treated as a cancellation; contact us immediately to adjust bookings. Administrative fees apply for reservation modifications (hotel changes, room upgrades, etc.), subject to supplier availability.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  BAGGAGE & PERSONAL PROPERTY LIABILITY
                </h3>
                <p>
                  Majestic Experiences Voyages is not liable for loss or damage to baggage or sports equipment (golf bags, paddleboards, suitcases, etc.) during transport or handling by our staff and suppliers. Travel insurance is highly recommended.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-lg md:text-xl font-bold uppercase text-zinc-900 tracking-wide">
                  PASSPORTS, MINORS & APPLICABLE LAWS
                </h3>
                <p>
                  A valid Canadian passport is required for all travel outside Canada. Some countries require validity for at least 6 months post-return. An adult must occupy each room if minors (under 18) are present.
                </p>
                <p>
                  These terms are governed by the laws of the Province of Quebec, Canada.
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
