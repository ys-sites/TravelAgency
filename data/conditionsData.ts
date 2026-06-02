export interface ConditionsSection {
  title: { FR: string; EN: string };
  paragraphs: { FR: string; EN: string }[];
  list?: { FR: string[]; EN: string[] };
  subsections?: {
    title: { FR: string; EN: string };
    paragraph: { FR: string; EN: string };
  }[];
  grid?: {
    title: { FR: string; EN: string };
    desc: { FR: string; EN: string };
  }[];
}

export const conditionsIntro = {
  p1: {
    FR: "Ces conditions s’appliquent pour toute transaction effectuée auprès de Majestic Experiences Voyages, qu’il s’agisse notamment de la réservation d’un forfait voyage (groupe, tout-inclus ou personnalisé) réservé à l’agence, par téléphone ou par le site de réservation en ligne, de la souscription à une assurance-voyage ou de l’achat d’un certificat cadeau. Veuillez les lire attentivement et n’hésitez pas à communiquer avec nous pour toutes précisions.",
    EN: "These general terms apply to all transactions carried out with Majestic Experiences Voyages, whether booking a travel package (group, all-inclusive, or customized), reserving via phone or online, subscribing to travel insurance, or purchasing gift certificates. Please read them carefully."
  },
  p2: {
    FR: "Majestic Experiences Voyages est titulaire d’un permis d’Agence de voyage du Québec. Tous les clients ayant effectué une réservation de voyage auprès de Majestic Experiences Voyages sont admissibles pour des réclamations au Fonds d’indemnisation des clients des agences de voyage (FICAV), selon les conditions de l’Office de la protection du consommateur.",
    EN: "Majestic Experiences Voyages holds a Quebec travel agency permit. All clients who have booked travel with Majestic Experiences Voyages are eligible for claims to the Travel Agents Client Compensation Fund (FICAV), in accordance with the Office de la protection du consommateur conditions."
  }
};

export const conditionsSections: ConditionsSection[] = [
  {
    title: {
      FR: "TARIFS AFFICHÉS",
      EN: "DISPLAYED RATES"
    },
    paragraphs: [
      {
        FR: "Tous les tarifs de Majestic Experiences Voyages, qu’ils soient publicisés sur le site web, dans les brochures ou autre, sont en dollars canadiens et incluent les taxes de vente TPS et TVQ.",
        EN: "All rates advertised on the website, brochures, or otherwise are in Canadian dollars and include GST and QST sales taxes. Prices are updated regularly and depend on availability at suppliers."
      },
      {
        FR: "Le prix et la disponibilité des forfaits voyages de groupe affichés sur le site Web sont mis à jour régulièrement. Le prix des voyages personnalisés et des tout-inclus du site web et des brochures sont valides au moment de leur parution et peuvent changer tout dépendamment de la disponibilité chez les fournisseurs.",
        EN: "Pursuant to consumer protection laws, Majestic Experiences Voyages may increase the price of travel in the event of fuel surcharges or exchange rate shifts prior to 45 days before departure."
      },
      {
        FR: "Conformément aux lois de l’Office de la protection du consommateur, Majestic Experiences Voyages peut augmenter le prix d’un voyage déjà vendu à un client en cas de surcharge de carburant par le transporteur ou de modification du taux de change. Pour que le prix du voyage soit affecté par une augmentation du taux de change, il faut que le taux de change ait augmenté de plus de 5% entre la date d’achat du voyage et la 45e journée avant le départ. Dès que le prix du voyage augmente d’au moins 7% (avant taxes), le client peut décider d’annuler son voyage et d’être remboursé. Il peut sinon accepter un autre voyage en remplacement, en payant les frais excédents ou en étant remboursé des frais perçus en trop. L’augmentation des taxes de vente TPS ou TVQ pourrait entrainer une augmentation des tarifs affichés sur tous les médiums puisque ceux-ci incluent les taxes. Aucune modification de prix n’est permise dans les 30 jours qui précèdent la date de départ.",
        EN: "If price increases by 7% or more, the customer may cancel with a full refund. No price modifications are permitted within 30 days of departure."
      },
      {
        FR: "Toute réduction de prix d’un voyage résultant d’une promotion ou d’une décision de Majestic Experiences Voyages s’applique aux nouvelles réservations seulement. Les frais de bagages ne sont pas inclus dans nos forfaits, sauf indication contraire. Les tarifs affichés sur le site web peuvent changer sans préavis.",
        EN: "Any price reduction resulting from a promotion or decision by Majestic Experiences Voyages applies to new bookings only. Baggage fees are not included unless specified. Rates are subject to change without notice."
      }
    ]
  },
  {
    title: {
      FR: "MODES DE PAIEMENT",
      EN: "PAYMENT METHODS"
    },
    paragraphs: [
      {
        FR: "Plusieurs modes de paiements sont acceptés pour faciliter l’achat de services :",
        EN: "Several payment modes are accepted to facilitate purchases:"
      }
    ],
    list: {
      FR: [
        "Argent comptant;",
        "Chèques – Notez qu’un frais d’administration sera facturé pour le traitement d’un chèque sans provisions;",
        "Virements Interac (maximum de 10 000 $);",
        "Cartes débit;",
        "Cartes de crédit : Visa, Mastercard, Discover et American Express;",
        "Certificats-cadeaux ou crédits-voyages de Majestic Experiences Voyages."
      ],
      EN: [
        "Cash;",
        "Cheques (subject to administration fee if returned NSF);",
        "Interac e-Transfers (maximum of $10,000);",
        "Debit cards;",
        "Credit cards: Visa, Mastercard, Discover, and American Express;",
        "Majestic Experiences Voyages gift certificates or travel credits."
      ]
    },
    subsections: [
      {
        title: {
          FR: "PAIEMENT PAR CARTE DE CRÉDIT",
          EN: "CREDIT CARD PAYMENTS"
        },
        paragraph: {
          FR: "La carte de crédit doit être détenue par un des passagers procédant à la réservation. En permettant l’usage de son numéro de carte de crédit, le client s’engage à respecter les conditions de réservation. Le titulaire de la carte, ayant fourni les informations apparaissant sur celle-ci, reconnaît la responsabilité de paiement de tous les passagers au dossier.",
          EN: "The credit card must belong to one of the passengers in the reservation. The cardholder assumes financial responsibility for all passengers listed in the file. Remote transactions (phone/internet) carry the same responsibility as physical signatures."
        }
      },
      {
        title: {
          FR: "UTILISATION DE LA CARTE DE CRÉDIT DU CLIENT À DISTANCE ET SANS CONTACT",
          EN: "REMOTE AND CONTACTLESS CREDIT CARD TRANSACTIONS"
        },
        paragraph: {
          FR: "Le détenteur de la carte de crédit reconnaît que lorsque le conseiller en voyages autorisé effectue une transaction sans présenter la carte et en donnant uniquement son numéro de carte de crédit : Visa, Mastercard ou American Express (ex. : transaction téléphonique ou par internet) ou qu’il effectue une transaction à l’aide de la technologie sans contact, il assume les mêmes responsabilités que s’il avait signé une pièce justificative ou saisi son NIP sur un appareil accessible.",
          EN: "The cardholder acknowledges that transactions conducted without physically presenting the card (e.g., via phone, internet, or contactless technology) carry the same legal and financial responsibilities as a signed sales slip or PIN entry."
        }
      }
    ]
  },
  {
    title: {
      FR: "DÉPÔT DE GARANTIE et PAIEMENT FINAL",
      EN: "SECURITY DEPOSIT & FINAL PAYMENT"
    },
    paragraphs: [
      {
        FR: "Nous vous recommandons de réserver votre séjour au moins 45 jours avant la date de départ. Un dépôt de garantie de 10%* de la valeur totale du voyage (assurances en sus) est requis au moment de la réservation suivi du paiement final 45 jours avant la date du départ. Pour les réservations effectuées 44 jours ou MOINS avant le départ, le paiement complet doit être versé au moment de la réservation. Exceptions : L’échéancier de paiement peut varier pour certains hôtels, compagnies aériennes, compagnies de location de voiture ainsi que certains fournisseurs ou forfaits groupes ou promotions. Si tel est le cas, les modalités de paiements vous seront alors présentés dans votre devis ou sur le détail du forfait en question sur notre site web ainsi que sur votre facture.",
        EN: "We recommend booking at least 45 days prior to departure. A security deposit of 10%* of the total value (excluding insurance) is required at booking, followed by final payment 45 days before departure. Complete payment is required immediately for bookings made 44 days or less prior to departure. Payment timelines may vary for specific hotels, airlines, car rentals, suppliers, group packages, or promotions, as detailed in your quote or invoice."
      },
      {
        FR: "*Pour les réservations de voyages en autocar, un dépôt de garantie de 25% de la valeur totale du voyage (assurances en sus) est requis au moment de la réservation.",
        EN: "*For coach/bus tours, a 25% security deposit is required at booking."
      }
    ],
    grid: [
      {
        title: { FR: "Autocar", EN: "Bus Tours" },
        desc: {
          FR: "Paiement final à 45 jours du départ. Pour les voyages d’une journée, le montant total est dû lors de la réservation. Le paiement complet est exigé pour tous les séjours de 1 jour et d’une valeur de moins de 300 $. Les voyages réservés sont 100% non remboursables. En cas d’annulation, le montant du dépôt consistera du frais d’annulation.",
          EN: "Final payment 45 days before departure. For single-day trips, full amount is due at booking. Single-day stays under $300 are 100% non-refundable."
        }
      },
      {
        title: { FR: "Croisières", EN: "Cruises" },
        desc: {
          FR: "Paiement final à 130 jours du départ.",
          EN: "Final payment 130 days before departure."
        }
      },
      {
        title: { FR: "Golf", EN: "Golf" },
        desc: {
          FR: "Pour nos groupes accompagnés et nos forfaits individuels-offres exclusives, l’échéancier de paiement final varie de 70 à 90 jours avant le départ selon le fournisseur. Veuillez vous référer à l’information affichée sur le site web pour le groupe accompagné ou le forfait individuel-offre exclusive en question ou à la date apparaissant sur votre facture.",
          EN: "For hosted groups and signature packages, final payment schedule varies between 70 to 90 days before departure depending on suppliers."
        }
      },
      {
        title: { FR: "Séjours et Circuits", EN: "Stays and Circuits" },
        desc: {
          FR: "Paiement final à 70 jours du départ pour tous les groupes accompagnés Majestic. Pour les voyages forfaits individuels, le paiement final est dû à 45 jours du départ.",
          EN: "Final payment 70 days before departure for hosted groups, and 45 days for individual packages."
        }
      }
    ]
  },
  {
    title: {
      FR: "POLITIQUE D’ANNULATION",
      EN: "CANCELLATION & MODIFICATION POLICY"
    },
    paragraphs: [
      {
        FR: "Les conditions d’annulations des voyages réservés chez Majestic Experiences Voyages, dans certains cas, peuvent refléter les conditions d’annulations de nos fournisseurs et partenaires. Il est possible de demander à votre conseiller en voyage les conditions d’annulations pour chaque services de votre réservation si applicable. En cas d’annulation avant d’avoir acquitté le paiement final, le montant du dépôt sera considéré comme le frais d’annulation. En cas d’annulation après avoir acquitté le paiement final, le frais d’annulation d’un forfait individuel représentera ce que les fournisseurs et partenaires chargent à Majestic Experiences Voyages selon les contrats négociés entre eux en plus du montant correspondant au dépôt. En cas d’annulation pour un forfait groupe accompagné, après avoir acquitté le paiement final, le frais d’annulation est 100 % du montant déboursé pour le voyage, le forfait groupe accompagné est 100% non remboursable après le paiement final.",
        EN: "Cancellations must be made in writing. Security deposits are considered cancellation fees prior to final payments. Cancellation after final payments for individual packages aligns with supplier fee structures. Group bookings are 100% non-refundable after final payment."
      },
      {
        FR: "Veuillez noter que le décès d’un passager avant le départ est considéré comme une annulation. Si les autres voyageurs au dossier désirent tout de même voyager, ils doivent contacter dans les plus brefs délais leur conseiller en voyages afin de s’enquérir des conditions d’annulation. Des frais peuvent s’appliquer. Une annulation doit être faite par courriel auprès de votre conseiller en voyage.",
        EN: "Passenger death is treated as a cancellation; contact us immediately to adjust bookings. Administrative fees apply for reservation modifications (hotel changes, room upgrades, etc.), subject to supplier availability."
      }
    ]
  },
  {
    title: {
      FR: "FRAIS DE MODIFICATION DE RÉSERVATION & SERVICES NON UTILISÉS",
      EN: "MODIFICATION CHARGES & UNUSED SERVICES"
    },
    paragraphs: [
      {
        FR: "Pour tout changement après la réservation (par exemple : type de chambre, hôtel, type d’automobile), des frais de dossier seront appliqués en plus des frais inhérents à l'ajout ou la modification de la réservation. Les changements demandés sont sujets à la disponibilité des fournisseurs.",
        EN: "Administrative fees apply for reservation modifications (hotel changes, room upgrades, car type, etc.), subject to supplier availability."
      },
      {
        FR: "Aucun remboursement ne sera effectué par Majestic Experiences Voyages pour des services réservés et non utilisés par le client. Il n’est également pas possible d’utiliser ces services à une date ultérieure.",
        EN: "No refunds are issued for services reserved but unused by the client. Unused services cannot be transferred or deferred."
      }
    ]
  },
  {
    title: {
      FR: "BAGAGES & ÉQUIPEMENT",
      EN: "BAGGAGE & PERSONAL PROPERTY LIABILITY"
    },
    paragraphs: [
      {
        FR: "Majestic Experiences Voyages se dégage de toute responsabilité concernant un dommage relatif aux bagages ou tout équipement sportif (sac de golf, paddleboard, valises, etc.) durant tous types de transports et la manutention par les employés de Majestic Experiences Voyages ou de ses fournisseurs. Majestic Experiences Voyages ne peut être tenu responsable d’un bris ou d’une perte de bagages et d’équipements sportifs auprès d’un service de voyages Majestic ou d’un fournisseur.",
        EN: "Majestic Experiences Voyages is not liable for loss or damage to baggage or sports equipment (golf bags, paddleboards, suitcases, etc.) during transport or handling by our staff and suppliers. Travel insurance is highly recommended."
      }
    ]
  },
  {
    title: {
      FR: "ASSURANCE VOYAGE, PASSEPORT & MINEURS",
      EN: "TRAVEL INSURANCE, PASSPORTS & MINORS"
    },
    paragraphs: [
      {
        FR: "Majestic Experiences Voyages recommande fortement à ses clients de souscrire à une assurance voyage avant leur départ. Des assurances annulation, interruption et médicale peuvent être obtenues directement auprès de nos conseillers.",
        EN: "Majestic Experiences Voyages highly recommends purchasing travel insurance before departure. Cancellation, interruption, and medical policies can be arranged through our concierges."
      },
      {
        FR: "Le passeport canadien est requis partout et en tout temps pour voyager à l’extérieur du Canada. Certains pays exigent que le passeport soit valide pour une période excédant de 6 mois la date de retour prévue. Il est de la responsabilité du client de s’assurer que son passeport est valide pour la durée du séjour.",
        EN: "A valid Canadian passport is required for all travel outside Canada. Some countries require validity for at least 6 months post-return. It is the client's sole responsibility to secure all required travel documents."
      },
      {
        FR: "Un adulte doit être présent par chambre pour tout voyage auquel des mineurs (moins de 18 ans) participent.",
        EN: "An adult (18+) must occupy each room if minors are participating in the travel party."
      }
    ]
  },
  {
    title: {
      FR: "DONNÉES PERSONNELLES & LOIS APPLICABLES",
      EN: "PERSONAL DATA & APPLICABLE LAWS"
    },
    paragraphs: [
      {
        FR: "La protection de l’identité et des renseignements personnels des clients est une priorité pour Majestic Experiences Voyages. Nous demandons donc seulement les informations nécessaires au dossier pour le bon fonctionnement des opérations.",
        EN: "The protection of client identity and personal data is a priority. We request only information strictly necessary for operational fulfillment."
      },
      {
        FR: "Les présentes conditions générales et les rapports de droit entre Majestic Experiences Voyages et ses clients sont régis par les lois de la province du Québec.",
        EN: "These terms and conditions and the legal relations between the parties are governed by the laws of the Province of Quebec, Canada."
      }
    ]
  }
];
